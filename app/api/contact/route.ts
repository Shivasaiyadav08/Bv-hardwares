import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/site';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  productInterest?: string;
  volume?: string;
  message?: string;
  website?: string;
};

const clean = (value: unknown, max = 2000) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return entities[character];
  });

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot for basic bot filtering.
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 60);
    const company = clean(body.company, 160);
    const productInterest = clean(body.productInterest, 160);
    const volume = clean(body.volume, 160);
    const message = clean(body.message, 4000);

    if (!name || !email || !phone || !productInterest || !message) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (phone.replace(/\D/g, '').length < 8) {
      return NextResponse.json({ error: 'Please enter a valid phone or WhatsApp number.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Contact form is not configured: RESEND_API_KEY is missing.');
      return NextResponse.json(
        {
          error: `Online enquiry is temporarily unavailable. Please call ${siteConfig.phone.primaryDisplay} or email ${siteConfig.email}.`,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const destinationEmail = process.env.CONTACT_EMAIL || siteConfig.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      company: escapeHtml(company || 'Not provided'),
      productInterest: escapeHtml(productInterest),
      volume: escapeHtml(volume || 'Not provided'),
      message: escapeHtml(message).replace(/\n/g, '<br />'),
    };

    const subject = `Website enquiry: ${productInterest} — ${name}`;

    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Website <${fromEmail}>`,
      to: [destinationEmail],
      replyTo: email,
      subject,
      text: [
        `Name: ${name}`,
        `Company: ${company || 'Not provided'}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Product / Requirement: ${productInterest}`,
        `Quantity / Timeline: ${volume || 'Not provided'}`,
        '',
        'Requirement details:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#172033">
          <div style="border-radius:16px 16px 0 0;background:#071126;padding:24px 28px;color:white">
            <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#ff9a63;font-weight:700">New website enquiry</div>
            <h1 style="font-size:24px;line-height:1.25;margin:8px 0 0">${safe.productInterest}</h1>
          </div>
          <div style="border:1px solid #e4e8f0;border-top:0;border-radius:0 0 16px 16px;padding:26px 28px;background:#ffffff">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#667085;width:180px">Name</td><td style="padding:8px 0;font-weight:700">${safe.name}</td></tr>
              <tr><td style="padding:8px 0;color:#667085">Company</td><td style="padding:8px 0">${safe.company}</td></tr>
              <tr><td style="padding:8px 0;color:#667085">Email</td><td style="padding:8px 0">${safe.email}</td></tr>
              <tr><td style="padding:8px 0;color:#667085">Phone / WhatsApp</td><td style="padding:8px 0">${safe.phone}</td></tr>
              <tr><td style="padding:8px 0;color:#667085">Quantity / Timeline</td><td style="padding:8px 0">${safe.volume}</td></tr>
            </table>
            <div style="height:1px;background:#e4e8f0;margin:20px 0"></div>
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#1237a5;font-weight:700">Requirement details</div>
            <p style="font-size:14px;line-height:1.7;margin:10px 0 0">${safe.message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'We could not send your enquiry right now. Please call, WhatsApp or email us instead.' },
        { status: 502 }
      );
    }

    // Best-effort acknowledgement to the customer. A failure here should not
    // turn a successfully delivered sales enquiry into an error response.
    if (process.env.CONTACT_SEND_CONFIRMATION !== 'false') {
      try {
        await resend.emails.send({
          from: `${siteConfig.name} <${fromEmail}>`,
          to: [email],
          replyTo: destinationEmail,
          subject: `We received your enquiry — ${siteConfig.name}`,
          text: [
            `Hi ${name},`,
            '',
            `Thank you for contacting ${siteConfig.name}. We have received your enquiry about ${productInterest}.`,
            'Our team will review the requirement and reply using the contact details you provided.',
            '',
            `For urgent enquiries, call ${siteConfig.phone.primaryDisplay} or email ${siteConfig.email}.`,
            '',
            `${siteConfig.name}`,
          ].join('\n'),
        });
      } catch (confirmationError) {
        console.error('Customer confirmation email error:', confirmationError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Unable to process the enquiry.' }, { status: 500 });
  }
}
