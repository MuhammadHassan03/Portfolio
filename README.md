# Muhammad Hassan — Portfolio

Live: https://devmirzahassan.netlify.app

Next.js 14 (App Router) + Tailwind CSS. No UI kit, no animation library. One `Reveal` component for scroll fade-in, one `ChapterRail` for the numbered progress rail on wide screens. Light by default, dark follows the OS.

## Page flow

Hero → 01 What I do → 02 Case studies → 03 Experience → 04 Capabilities → 05 About → 06 Writing → 07 Hire me

The order lives in one place, `utils/chapters.js`. Nav links, the chapter rail and section numbers all read from it.

## Run locally

```bash
npm install
cp .env.example .env   # EmailJS keys for the contact form, optional GTM id
npm run dev
```

## Edit content

Everything a recruiter or client reads is in `utils/data/`:

| File | Controls |
| --- | --- |
| `personal-data.js` | Name, title, tagline, bio, links, hero proof points, services, hiring process |
| `projects-data.js` | Case studies (problem / built / result) and research items |
| `experience.js` | Timeline entries with highlights |
| `skills.js` | Capability groups; icons resolve via `utils/skill-icon.js` → `public/svg/skills` |
| `educations.js` | Education and certifications |

Replace `public/profile.png` with a 4:5 portrait (around 825×1063) to update the photo. Blog posts come from dev.to using `devUsername`, cached for an hour.

## Design tokens

Colors are CSS variables in `app/css/globals.css` (`--paper`, `--ink`, `--muted`, `--accent`, `--wash`) exposed to Tailwind as `paper`, `ink`, `muted`, `accent`, `wash`. Reusable classes (`display`, `eyebrow`, `btn-primary`, `btn-ghost`, `chip`, `field`, `rule`, `link`) live in the same file. Fonts: Fraunces for display, Inter for text, JetBrains Mono for labels.
