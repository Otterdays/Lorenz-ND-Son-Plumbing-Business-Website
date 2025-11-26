## System Overview

- **Framework:** Gatsby 5 with React 18 and TypeScript for static site generation, optimized for fast builds and CMS flexibility.
- **Styling:** Tailwind CSS with custom theme tokens (navy, antique gold, cream) to align with Lorenz & Son brand identity.
- **Structure:** Component-driven layout:
  - `Hero` for logo, CTAs, and embedded service-area map.
  - `ServicesSection`, `AboutSection`, `TrustBar`, `TestimonialsSection`, `ContactForms`, `Footer`.
  - `StickyEmergencyWidget` rendered globally for 24/7 CTA visibility.
- **Data Layer:** Static TypeScript data modules (`src/data`) for services, testimonials, trust marks, and company stats to enable future CMS integration.
- **Assets:** Logo stored in `static/logo.jpg`, accessible via Gatsby static folder for build-time optimization.
- **Accessibility:** Semantic headings, accessible forms, high contrast palette, focus states handled via Tailwind utilities.

## Performance & SEO

- Lighthouse-ready setup with responsive design, preloaded typography via `@fontsource`.
- `gatsby-plugin-image` and `gatsby-plugin-sharp` prepared for future media optimization.
- `SEO` component centralizes meta tags; update for analytics and structured data as the site evolves.

## Deployment Notes

- Recommended to host staging on Gatsby Cloud or Netlify for <2s load-time target.
- Environment should enforce HTTPS, integrate RankMath equivalent for Gatsby (e.g., `gatsby-plugin-sitemap`, `gatsby-plugin-robots-txt` when production-ready).
- Connect WPForms endpoints or alternate API gateway before production launch.

