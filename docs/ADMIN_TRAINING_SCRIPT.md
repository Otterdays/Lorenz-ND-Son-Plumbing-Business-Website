## 60-Second Admin Training Script

**0:00 – 0:10** – Welcome & Access  
- “Welcome to the Lorenz & Son Plumbing site dashboard. Start by opening PowerShell on Windows 11 and running `npm run develop` to load the staging site at `http://localhost:8000`.”

**0:10 – 0:25** – Updating Content  
- “Edit page content inside the `src/data` folder. Update services, testimonials, and trust marks by modifying the TypeScript arrays. Save changes to see live reload instantly.”

**0:25 – 0:40** – Managing Forms  
- “Residential and commercial forms use Formspree placeholders. Replace the `action` URLs in `ContactForms.tsx` with your WPForms or CRM endpoints. Re-run `npm run develop` if the server was closed.”

**0:40 – 0:50** – Branding & Assets  
- “Need to refresh the logo or palette? Swap `static/logo.jpg` with your new badge and adjust colors in `tailwind.config.ts`. Tailwind automatically updates throughout the site.”

**0:50 – 1:00** – Deploying Changes  
- “After updates, run `npm run build` for a production preview. Deploy the generated `public` folder to Gatsby Cloud or Netlify, confirm SSL, and you’re ready to go.”

