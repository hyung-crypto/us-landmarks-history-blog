# US Landmarks History — Blog Starter Site

A cinematic history-travel blog covering America's 30 most honored landmarks,
monetized via Amazon Associates affiliate links. Companion project to the
"US Landmarks History" YouTube Shorts channel.

## Structure

```
index.html                 → Home page (Top 30 landmark grid)
about.html                 → About / correspondent bios
disclosure.html            → Amazon Associates affiliate disclosure (required)
privacy-policy.html        → Privacy policy (required for Associates approval)
posts/                     → Individual landmark articles
assets/css/style.css       → Design system (Navy / Gold / Ivory palette)
assets/js/main.js          → Nav toggle + sticky CTA scroll behavior
assets/img/                → Hero images
```

## Adding a new post

1. Duplicate `posts/statue-of-liberty.html` as a template.
2. Follow the 12-part post structure defined in the master prompt
   (`마스터프롬프트_미국건축물역사_블로그_Amazon수익화_v1.md`).
3. Add a card entry to `index.html`'s landmark grid linking to the new post.
4. Replace `{{AMAZON_LINK_n}}` placeholders with real SiteStripe links before
   removing draft status.
5. Commit and push — Netlify auto-deploys on every push to `main`.

## Deployment

This site is deployed via **Netlify**, connected to this GitHub repository.
Every push to the `main` branch triggers an automatic rebuild and deploy.

## Monetization Notice

Do not hardcode Amazon prices or scrape product data automatically —
this violates Amazon Associates policy. Use SiteStripe manually for every
product link. See the master prompt for full monetization guardrails.
