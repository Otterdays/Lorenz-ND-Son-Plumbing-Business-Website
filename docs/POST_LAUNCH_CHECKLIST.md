## Post-Launch Checklist

### Preflight
- [ ] Configure production form endpoints (WPForms, Supabase, or CRM webhook).
- [ ] Enable Google reCAPTCHA v3 on both residential and commercial forms.
- [ ] Verify SSL certificate and enforce HTTPS redirects.
- [ ] Populate favicon and app icons via `gatsby-plugin-manifest`.
- [ ] Update SEO metadata (title, description, Open Graph image).

### Performance & QA
- [ ] Run `npm run build` and audit Lighthouse (90+ performance, accessibility, SEO, best practices).
- [ ] Validate sticky emergency widget on mobile and tablet breakpoints.
- [ ] Confirm map embed loads and complies with Google Maps usage policy.
- [ ] Test file uploads for various formats (jpg, png, pdf) under 10 MB.

### Analytics & Tracking
- [ ] Install analytics (GA4/Matomo) and set up events for Emergency CTA, form start, and submission.
- [ ] Monitor Emergency CTA CTR (target >15%), form completion (>8%), mobile bounce rate (<40%).

### Content & Governance
- [ ] Publish six testimonials with signed approvals on file.
- [ ] Review trust marks and certifications for current-year validity.
- [ ] Add RankMath equivalent (e.g., `gatsby-plugin-sitemap`, `gatsby-plugin-robots-txt`) before indexing.
- [ ] Schedule quarterly content audit reminders in project management tool.

