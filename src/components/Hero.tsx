import React from "react";
import { Link } from "gatsby";

export const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-gold/10">
    <div className="pointer-events-none absolute -bottom-32 -left-10 h-80 w-80 rounded-full border-4 border-gold/40 opacity-50"></div>
    <div className="pointer-events-none absolute -right-14 -top-20 h-96 w-96 rounded-full border-8 border-navy/20 opacity-30"></div>
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:px-10 lg:py-24">
      <div className="relative z-10 max-w-xl space-y-6">
        <span className="badge">Serving Chicagoland Since 2025</span>
        <h1 className="font-heading text-4xl text-navy sm:text-5xl lg:text-6xl">
          Plumbing guardians for homes and mission-critical facilities.
        </h1>
        <p className="text-lg text-slate/90">
          Lorenz & Son Plumbing combines master-level craftsmanship with
          industrial rigor, delivering 24/7 coverage, compliance-ready
          reporting, and zero-surprise billing across residential and commercial
          portfolios.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="tel:+13125550125" className="btn-primary">
            Emergency Service 24/7
          </a>
          <Link to="#contact" className="btn-secondary">
            Commercial Quote
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-4 text-sm text-slate/80 sm:grid-cols-3">
          <li>
            <span className="font-heading text-2xl text-navy">60 min</span>
            <p>Average dispatch time</p>
          </li>
          <li>
            <span className="font-heading text-2xl text-navy">98.6%</span>
            <p>First visit resolution</p>
          </li>
          <li>
            <span className="font-heading text-2xl text-navy">Certs</span>
            <p>Master Plumber • ASME IX • Backflow</p>
          </li>
        </ul>
      </div>
      <div className="relative z-10 flex w-full max-w-lg flex-col gap-6 rounded-3xl border border-gold/30 bg-white/90 p-6 shadow-2xl shadow-navy/10 backdrop-blur">
        <div className="flex items-center justify-between">
          <p className="font-heading text-lg text-navy">Rapid Response Map</p>
          <span className="badge bg-gold text-navy">Live 24/7 Dispatch</span>
        </div>
        <iframe
          title="Service Area"
          className="h-64 w-full rounded-2xl border border-cream shadow-inner shadow-navy/10"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29669.108013748918!2d-88.3132033!3d41.760584299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef938adf52d65%3A0x1b7eb8832ea0b282!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="grid gap-3 text-sm text-slate/90">
          <p className="flex items-center justify-between">
            <span>Residential zones:</span>
            <span className="font-semibold text-navy">Aurora • Naperville • Lisle</span>
          </p>
          <p className="flex items-center justify-between">
            <span>Industrial coverage:</span>
            <span className="font-semibold text-navy">
              I-88 Corridor • Chicagoland
            </span>
          </p>
          <p className="rounded-2xl bg-cream px-4 py-3 text-xs text-slate">
            Dispatchers monitor GPS-enabled fleet and send text updates at
            arrival, completion, and QA follow-up.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

