import React from "react";

const responseGuarantee = "Technician dispatched in 60 minutes or less.";

export const StickyEmergencyWidget = () => (
  <aside className="fixed bottom-5 right-5 z-50 w-full max-w-xs rounded-3xl border border-gold/40 bg-navy/95 p-4 text-cream shadow-2xl shadow-navy/40 backdrop-blur">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
      24/7 Emergency Line
    </p>
    <a
      href="tel:+13125550125"
      className="mt-3 flex items-center justify-between rounded-2xl bg-gold px-4 py-3 text-lg font-heading text-navy shadow-inner shadow-cream/20 transition-transform duration-150 hover:-translate-y-0.5"
    >
      <span>(312) 555-0125</span>
      <span className="text-sm font-semibold uppercase">Tap to Call</span>
    </a>
    <p className="mt-3 text-xs text-cream/80">{responseGuarantee}</p>
  </aside>
);

export default StickyEmergencyWidget;

