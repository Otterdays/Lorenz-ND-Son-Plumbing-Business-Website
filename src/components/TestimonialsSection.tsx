import React from "react";
import { testimonials } from "../data/testimonials";

export const TestimonialsSection = () => {
  const residential = testimonials.filter(
    (entry) => entry.segment === "Residential"
  );
  const commercial = testimonials.filter(
    (entry) => entry.segment === "Commercial"
  );

  const renderCard = (name: string, role: string, quote: string) => (
    <figure
      key={name}
      className="flex h-full flex-col justify-between rounded-3xl border border-gold/30 bg-white/90 p-6 text-left shadow-lg shadow-navy/10 transition-transform duration-300 hover:-translate-y-1"
    >
      <blockquote className="text-sm text-slate/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        <p className="text-base font-heading normal-case text-navy">{name}</p>
        <p className="normal-case text-slate/70">{role}</p>
      </figcaption>
    </figure>
  );

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-white via-cream to-white py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <div className="flex flex-col gap-3 text-center">
          <span className="badge mx-auto bg-navy text-cream">Testimonials</span>
          <h2 className="font-heading text-4xl text-navy">
            What homeowners and facility managers say about Lorenz & Son.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate/80">
            Six voices from the field reflecting our commitment to clarity,
            cleanliness, and compliance.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="badge inline-block bg-gold/90 text-navy">
              Residential
            </p>
            <div className="grid gap-4">{residential.map((t) => renderCard(t.name, t.role, t.quote))}</div>
          </div>
          <div className="space-y-4">
            <p className="badge inline-block bg-navy text-cream">Commercial</p>
            <div className="grid gap-4">{commercial.map((t) => renderCard(t.name, t.role, t.quote))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

