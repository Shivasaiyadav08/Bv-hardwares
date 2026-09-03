import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, productInterest, message } = body;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // In dev or demo mode without API key, log and return success
      console.log('Contact form received (Resend API key not configured yet):', {
        name,
        email,
        phone,
        company,
        productInterest,
        message,
      });

      return NextResponse.json(
        {
          success: true,
          message:
            'Inquiry received. Please configure RESEND_API_KEY to receive emails.',
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const destinationEmail = process.env.CONTACT_EMAIL || 'info@bvhardwares.in';

    const { data, error } = await resend.emails.send({
      from: 'BV Hardwares Contact Form <onboarding@resend.dev>',
      to: [destinationEmail],
      subject: `New Hardware Inquiry: ${productInterest} - ${name}`,
      text: `
Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phone}
Product of Interest: ${productInterest}

Requirements / Message:
${message || 'No additional message provided.'}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: unknown) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
