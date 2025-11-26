import React from "react";
import { Link } from "gatsby";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const navLinks = [
  { label: "Services", to: "#services" },
  { label: "About", to: "#about" },
  { label: "Testimonials", to: "#testimonials" },
  { label: "Contact", to: "#contact" }
];

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col bg-cream">
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Lorenz & Son Plumbing logo"
            className="h-12 w-12 rounded-full border-2 border-gold shadow-badge"
          />
          <div>
            <p className="font-heading text-xl text-navy">Lorenz & Son</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate">
              Plumbing • Est. 2025
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase text-slate md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="tracking-wide transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+13125550125"
            className="btn-primary text-xs shadow-lg shadow-gold/40"
          >
            Emergency Service
          </a>
        </nav>
      </div>
    </header>
    <main className="flex-1">{children}</main>
  </div>
);

export default Layout;

