# BV Hardwares - Batch Update

## Implemented

- Redesigned the Partners page with a more visual partnership-focused hero and dedicated HPRT partner presentation.
- Replaced the floating chat placeholder with a proper WhatsApp brand mark.
- Replaced the homepage hero visual with the supplied barcode / labeling / RFID / POS solutions image.
- Replaced the homepage About-the-business visual with the supplied industrial printer / scanner / POS image.
- Simplified main BV product cards to a clean Bootstrap-style card hierarchy.
- Removed Entry / Basic / Mid / Industrial badges from individual product cards.
- Added View Details actions and made cards navigate to product detail pages.
- Added product detail routes at `/products/[category]/[product]` while keeping Get Pricing separate.
- Redesigned the About page hero to be more visual and balanced.
- Updated Mission, Vision and Values content from the original BV Hardwares About page.
- Added the supplied Bhagyashree Ventures ISO 9001:2015 certificate preview, metadata and PDF link.
- Added all BV product detail routes to the sitemap.

## Validation

- Parsed all TypeScript / TSX source files with the TypeScript compiler parser: no syntax errors.
- Checked 155 local image references: 0 missing.
- `npm run build` could not run because dependencies are not installed in this environment.
- `npm ci --offline` was attempted but the local npm cache is missing one required package archive.

## 2026-09-05 follow-up batch

- Replaced the generic Partners handshake hero with a BV/HPRT product-portfolio visual built from the supplied HPRT catalogue assets.
- Replaced the About “Who we are” image with the supplied industrial printer / scanner / POS / RFID visual and optimized it to WebP.
- Expanded BV product detail pages with applications, selection guidance, related models and verified manufacturer specifications where reliable source data was available.
- Added verified specification records for major label-printer models including TSC DA310, TE244, TL240, ML240, MB241T, MX241P, MH series, MH261T and TTP-286MT; Zebra ZD230 / ZT411; Argox CP-2140; HPRT HT800/HT830; and Citizen CL-S631 / CL-S700 references.
- Direct email actions now open `info@bvhardwares.in` using `mailto:` with a pre-filled subject.
- The enquiry form no longer requires Resend/API credentials. It prepares the completed form as a `mailto:` message, opens the visitor’s email app, and clearly tells the visitor to review and press Send.
- Removed the unused Resend API route and Resend dependency from package metadata.
