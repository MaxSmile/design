# design.vasilkoff.com

Personal portfolio site for **Iryna Vasylkova**, Design Director at Vasilkoff CY Ltd. Single-page React/Next.js app deployed as a static/SSR site.

## Purpose

Showcases Iryna's design work and professional background to potential clients and employers. Primary call-to-action is the contact form at the bottom.

## Page Sections

| Section | Content |
|---|---|
| **Hero** | Full-screen background photo with name and title ("Graphic Designer") |
| **About** | Biography text, portrait photo, links to Facebook / Instagram / LinkedIn |
| **Services** | Three offered services: Figma, Web Design, Branding Identity |
| **Portfolio** | 6 work samples, filterable by category (web / marketing / graphics) |
| **Contact** | Address (Australia NT), two emails, two phones (AU + CY), contact form |

## Content Files

All editable content lives in `src/data/`:

- `about.json` — name, portrait filename, social media links
- `services.json` — service cards (title, description, icon image)
- `portfolios.json` — portfolio items (title, thumbnail, categories, optional video link)
- `navbar.json` — navigation link labels and anchor targets

Portfolio thumbnails are in `public/images/portfolio/` (01–06.jpg). There is also a `03-old.jpg` kept as a backup of the previous third portfolio image.

## Contact Form

Uses **EmailJS** (`@emailjs/browser`). Credentials come from environment variables:

```
NEXT_PUBLIC_SERVICE_ID
NEXT_PUBLIC_TEMPLATE_ID
NEXT_PUBLIC_PUBLIC_KEY
NEXT_PUBLIC_CAP_API_ENDPOINT
```

Spam protection uses the shared Vasilkoff CAP backend from `vasilkoff-info`. `NEXT_PUBLIC_CAP_API_ENDPOINT` is optional and defaults to `https://vasilkoff.info/cap/`.

## Current State / Known Gaps

- Portfolio items 1–5 have placeholder titles ("Portfolio 1" … "Portfolio 5") — real project names and descriptions have not been filled in yet.
- Portfolio items have no description text; clicking an image currently shows no detail view.
- The `featuredVideo` flag exists in the data model but no item currently uses it.
- Contact address says "Australia NT" — may need updating if location changes.
