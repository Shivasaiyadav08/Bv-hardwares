# Bhagyashree Ventures website

Next.js website for **Bhagyashree Ventures** (legacy website identity: **BV Hardwares**) covering barcode, labeling, RFID, POS, consumables, software and service enquiries.

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS v4
- shadcn-style local UI primitives
- Lucide React icons
- Outfit via `next/font/google`
- Light / dark theme support
- Framer Motion for restrained interaction and reveal animation

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

## Contact / enquiry email behavior

The current contact form does **not** require an email API key or SMTP credentials.

- Direct **Send an email** links use `mailto:info@bvhardwares.in`.
- The pricing/enquiry form prepares the visitor's form details in a `mailto:` message and opens their default email application.
- The visitor reviews the prepared message and presses **Send** in their own email application.

This means there are no contact-form secrets to add to `.env.local` or Vercel for the current implementation. If fully automatic server-side email delivery is required later, the same UI can be connected to Resend, SMTP or another transactional email provider.

## Production

The canonical domain in `lib/site.ts` is `https://bvhardwares.in`, matching the currently indexed site and business email domain. The app is configured for standard Next.js/Vercel deployment.

See `UPDATE_NOTES.md` for the data audit, migration redirects and pre-launch checklist.
