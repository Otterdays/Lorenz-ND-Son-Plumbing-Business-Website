import React from "react";
import { companyStats } from "../data/stats";

const credentials = [
  "Master Plumber License #IL-34728",
  "ASME IX Certified Welders",
  "Backflow Prevention Certified",
  "OSHA 30 & Confined Space",
  "NFPA 13/25 Fire Suppression",
  "EPA Lead-Safe Renovator"
];

export const AboutSection = () => (
  <section
    id="about"
    className="border-y border-gold/20 bg-cream/70 py-20 backdrop-blur"
  >
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:px-10">
      <div className="flex-1 space-y-6">
        <span className="badge">About Lorenz & Son</span>
        <h2 className="font-heading text-4xl text-navy">
          Three generations of plumbers, one mission: zero unscheduled downtime.
        </h2>
        <p className="text-lg text-slate/80">
          Founded by master plumber Otto Lorenz and his son Mason, Lorenz & Son
          Plumbing blends family-owned accountability with enterprise-grade
          systems. Whether we are rebuilding a residential stack or calibrating
          valves in a clean room, we document every step and keep stakeholders
          informed in real time.
        </p>
        <p className="text-sm text-slate">
          Our teams operate out of a 12,000 sq ft dispatch center featuring
          parts staging, training rigs, and a QA lab. Every technician passes
          quarterly skills audits and carries digital inspection checklists
          synced to your project portal.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-gold/30 bg-white/80 px-4 py-3 text-sm text-slate shadow-sm"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold"></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 rounded-3xl border border-gold/20 bg-white/90 p-6 shadow-xl shadow-navy/10">
        <h3 className="font-heading text-2xl text-navy">
          Performance at a glance
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {companyStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cream bg-cream/80 px-5 py-6 text-center shadow-inner shadow-navy/10"
            >
              <p className="font-heading text-3xl text-navy">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-gold/40 bg-navy/95 p-6 text-cream">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Certifications on File
          </p>
          <p className="mt-3 text-sm text-cream/85">
            Documentation stored in your secure client portal with compliance
            reminders, test reports, and QA videos.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            Request credential packet
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

