import React from "react";
import { commercialServices, residentialServices } from "../data/services";

const ServiceCard = ({
  title,
  description,
  response
}: {
  title: string;
  description: string;
  response: string;
}) => (
  <div className="group rounded-3xl border border-cream bg-white/90 p-6 shadow-lg shadow-navy/5 transition-transform duration-300 hover:-translate-y-2 hover:border-gold/60">
    <h3 className="font-heading text-xl text-navy">{title}</h3>
    <p className="mt-3 text-sm text-slate/90">{description}</p>
    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
      Response
    </p>
    <p className="mt-1 text-sm text-slate">{response}</p>
  </div>
);

export const ServicesSection = () => (
  <section
    id="services"
    className="border-t border-gold/30 bg-gradient-to-br from-cream via-white to-cream py-20"
  >
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
      <div className="flex flex-col gap-4 text-center">
        <span className="badge mx-auto">Services</span>
        <h2 className="font-heading text-4xl text-navy">
          Built for rapid response and long-term reliability.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate/80">
          Dedicated teams for homes, multi-family, high-rise, and industrial
          facilities ensure the right certifications and tooling arrive ready.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="flex items-center justify-between font-heading text-2xl text-navy">
              Residential
              <span className="badge bg-navy text-cream">HomeGuard™</span>
            </h3>
            <p className="mt-2 text-sm text-slate">
              Dedicated concierge scheduling, no-mess protocols, and follow-up
              wellness checks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {residentialServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="flex items-center justify-between font-heading text-2xl text-navy">
              Commercial & Industrial
              <span className="badge bg-gold text-navy">FacilityOps™</span>
            </h3>
            <p className="mt-2 text-sm text-slate">
              Asset tagging, CAFM integrations, and compliance documentation
              woven into every visit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {commercialServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;

