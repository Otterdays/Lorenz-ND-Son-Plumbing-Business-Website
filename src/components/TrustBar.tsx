import React from "react";
import { trustMarks } from "../data/trustMarks";

export const TrustBar = () => (
  <section className="bg-navy py-12">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-cream lg:px-10">
      <div className="flex flex-col gap-2 text-center">
        <span className="badge mx-auto bg-gold text-navy">Trust & Proof</span>
        <p className="font-heading text-2xl">Credentials recognized nationwide</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {trustMarks.map((mark) => (
          <div
            key={mark.label}
            className="rounded-2xl border border-gold/40 bg-slate/30 px-4 py-5 text-center shadow-lg shadow-black/20 backdrop-blur"
          >
            <p className="font-heading text-lg text-gold">{mark.label}</p>
            <p className="mt-2 text-sm text-cream/80">{mark.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

