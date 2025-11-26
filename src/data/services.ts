export type ServiceItem = {
  title: string;
  description: string;
  response: string;
};

export const residentialServices: ServiceItem[] = [
  {
    title: "Emergency Repairs",
    description:
      "Rapid-response diagnostics, leak isolation, and fixture replacement any time of day or night.",
    response: "Arrival within 60 minutes inside the service radius."
  },
  {
    title: "Water Heater Installation",
    description:
      "Tank and tankless solutions sized for your household with smart recirculation add-ons.",
    response: "Permitting, haul-away, and startup included."
  },
  {
    title: "Drain Cleaning",
    description:
      "Hydro-jetting, auger cleaning, and enzyme treatments that keep lines free-flowing.",
    response: "Floor protection and scope video delivered to your inbox."
  },
  {
    title: "Sewer Inspection",
    description:
      "4K camera inspection mapped to property plat for accurate trenchless repair plans.",
    response: "Digital report and remediation budget in 24 hours."
  }
];

export const commercialServices: ServiceItem[] = [
  {
    title: "Maintenance Contracts",
    description:
      "Scheduled preventative service with uptime reporting across multi-site portfolios.",
    response: "On-site checklists shared through the client dashboard."
  },
  {
    title: "Backflow Prevention",
    description:
      "Certified testing, rebuilds, and annual compliance paperwork handled end-to-end.",
    response: "Certification packets submitted directly to your AHJ."
  },
  {
    title: "Process Piping",
    description:
      "Clean-in-place, steam, and chemical process lines with ASME-certified welders.",
    response: "Full P&ID documentation and pressure testing."
  },
  {
    title: "Compliance Inspections",
    description:
      "OSHA, ASME, and municipal code audits with prioritized remediation roadmaps.",
    response: "Executive-ready binder and digital evidence library."
  }
];

