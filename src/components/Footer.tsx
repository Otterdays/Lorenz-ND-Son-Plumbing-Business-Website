import React from "react";

export const Footer = () => (
  <footer className="border-t border-gold/20 bg-navy py-10 text-cream">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div className="space-y-2">
        <p className="font-heading text-xl">Lorenz & Son Plumbing</p>
        <p className="text-cream/80">
          415 Oak Street, Aurora, IL 60502 • dispatch@lorenzandson.com
        </p>
        <p className="text-cream/80">Licensed • Bonded • Insured in Illinois</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-cream/70">
        <a href="tel:+13125550125" className="hover:text-gold">
          (312) 555-0125
        </a>
        <span className="hidden h-3 w-px bg-cream/30 md:inline-block"></span>
        <a href="https://facebook.com/lorenzandsonplumbing" className="hover:text-gold">
          Facebook
        </a>
        <a href="https://linkedin.com/company/lorenzandsonplumbing" className="hover:text-gold">
          LinkedIn
        </a>
        <a href="#contact" className="hover:text-gold">
          Client Portal Login
        </a>
      </div>
      <p className="text-xs text-cream/60">
        © {new Date().getFullYear()} Lorenz & Son Plumbing. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

