# Bhagyashree Ventures website

Next.js website for **Bhagyashree Ventures** (legacy website identity: **BV Hardwares**) covering barcode, labeling, RFID, POS, consumables, software and service enquiries.

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS v4
- shadcn-style local UI primitives
- Lucide React icons
- Outfit via `next/font/google`
- Light / dark theme support
- Resend for contact-form email delivery

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Before deployment, run:

```bash
npm run build
npm run lint
```

## Contact form environment

Copy the values in `.env.example` into `.env.local` for local testing or into Vercel Project → Settings → Environment Variables for production.

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL=info@bvhardwares.in
CONTACT_FROM_EMAIL=website@bvhardwares.in
CONTACT_SEND_CONFIRMATION=true
```

The `CONTACT_FROM_EMAIL` domain must be verified in Resend for production sending. The main enquiry is delivered to `CONTACT_EMAIL`; when `CONTACT_SEND_CONFIRMATION` is not set to `false`, the API also attempts a customer acknowledgement email. The API intentionally reports an error instead of a false success when the main enquiry cannot be sent.

## Production

The canonical domain in `lib/site.ts` is `https://bvhardwares.in`, matching the currently indexed site and business email domain. The app is configured for normal Next.js/Vercel deployment because the contact API and migration redirects require server-capable routing.

See `UPDATE_NOTES.md` for the data audit, migration redirects and pre-launch checklist.
