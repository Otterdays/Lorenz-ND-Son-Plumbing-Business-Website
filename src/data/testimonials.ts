export type Testimonial = {
  name: string;
  role: string;
  segment: "Residential" | "Commercial";
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jenna Morales",
    role: "Homeowner • Naperville, IL",
    segment: "Residential",
    quote:
      "The emergency crew tarped, repaired, and cleaned everything before sunrise. They even sent photo updates so I could rest easy."
  },
  {
    name: "David Chen",
    role: "Residential Property Manager",
    segment: "Residential",
    quote:
      "Their drain maintenance program cut service calls by 40% in one quarter. Reporting is clear and proactive."
  },
  {
    name: "Kelly Watkins",
    role: "Restaurant Owner",
    segment: "Residential",
    quote:
      "Lorenz & Son rebuilt our hot line without disrupting dinner service. The crew staged everything off-site and worked like clockwork."
  },
  {
    name: "Marcus Reed",
    role: "Facilities Director • Meridian Industrial",
    segment: "Commercial",
    quote:
      "Process piping upgrades passed ASME inspection on the first walk-through. Their documentation set the standard for our vendors."
  },
  {
    name: "Elise Granger",
    role: "Regional Operations • ClearState Labs",
    segment: "Commercial",
    quote:
      "From the kickoff gantt to the closeout binder, they ran our compliance audit like a true partner."
  },
  {
    name: "Thomas Alvarez",
    role: "General Manager • Rivertown Lofts",
    segment: "Commercial",
    quote:
      "Quarterly valve testing is now handled without reminders. Certificates hit my inbox before the city even asks."
  }
];

