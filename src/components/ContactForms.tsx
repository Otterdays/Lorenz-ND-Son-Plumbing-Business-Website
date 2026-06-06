import React from "react";

type FieldConfig = {
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
};

const sharedFields: FieldConfig[] = [
  {
    label: "Preferred Contact",
    name: "contactPreference",
    type: "select",
    options: ["Phone Call", "Text Message", "Email"]
  },
  {
    label: "When do you need service?",
    name: "timeline",
    type: "select",
    options: ["Immediately", "Within 24 hours", "This week", "Planning phase"]
  }
];

type FormConfig = {
  name: string;
  headline: string;
  action: string;
  description: string;
  fields: {
    label: string;
    name: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    options?: string[];
  }[];
};

const forms: FormConfig[] = [
  {
    name: "Residential Service Request",
    headline: "Residential Service",
    action: "https://formspree.io/f/xgeblrkr",
    description:
      "Emergency-ready intake with photo uploads so we arrive with the right parts.",
    fields: [
      { label: "Full Name", name: "name", type: "text" },
      { label: "Address", name: "address", type: "text" },
      { label: "Phone", name: "phone", type: "tel" },
      { label: "Email", name: "email", type: "email" },
      { label: "Describe the issue", name: "issue", type: "textarea" },
      ...sharedFields
    ]
  },
  {
    name: "Commercial Quote Request",
    headline: "Commercial Quote",
    action: "https://formspree.io/f/xvovoayj",
    description:
      "Detailed scope intake for facility managers, with compliance-ready breakout fields.",
    fields: [
      { label: "Company / Facility", name: "company", type: "text" },
      { label: "Site Address", name: "siteAddress", type: "text" },
      { label: "Contact Name", name: "contact", type: "text" },
      { label: "Business Email", name: "email", type: "email" },
      { label: "Direct Phone", name: "phone", type: "tel" },
      {
        label: "Scope Details",
        name: "scope",
        type: "textarea"
      },
      ...sharedFields
    ]
  }
];

export const ContactForms = () => (
  <section
    id="contact"
    className="border-t border-gold/20 bg-white/90 py-20 backdrop-blur"
  >
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
      <div className="flex flex-col gap-4 text-center">
        <span className="badge mx-auto bg-gold text-navy">Dispatch & Quotes</span>
        <h2 className="font-heading text-4xl text-navy">Start your service ticket or quote.</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate/80">
          Upload photos, describe the issue, and our dispatch coordinators will
          respond with ETA or proposal timelines within 15 minutes during
          business hours.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {forms.map((form) => (
          <form
            key={form.name}
            name={form.name}
            method="post"
            action={form.action}
            encType="multipart/form-data"
            className="flex h-full flex-col gap-5 rounded-3xl border border-gold/40 bg-cream/70 p-6 shadow-xl shadow-navy/10"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value={form.name} />
            <h3 className="font-heading text-2xl text-navy">{form.headline}</h3>
            <p className="text-sm text-slate/80">{form.description}</p>
            {form.fields.map((field) => (
              <label key={field.name} className="flex flex-col gap-2 text-sm font-semibold text-slate">
                {field.label}
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    required
                    rows={4}
                    className="rounded-2xl border border-cream bg-white px-4 py-3 text-slate placeholder:text-slate/40 focus:border-gold focus:ring-gold"
                    placeholder="Share details here"
                  />
                ) : field.type === "select" && field.options ? (
                  <select
                    name={field.name}
                    required
                    className="rounded-2xl border border-cream bg-white px-4 py-3 text-slate focus:border-gold focus:ring-gold"
                  >
                    <option value="">Select</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="rounded-2xl border border-cream bg-white px-4 py-3 text-slate placeholder:text-slate/40 focus:border-gold focus:ring-gold"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                )}
              </label>
            ))}
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate">
              Upload photos or plans
              <input
                type="file"
                name="attachment"
                multiple
                className="rounded-2xl border border-dashed border-gold/60 bg-white px-4 py-4 text-slate file:mr-4 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-semibold file:text-navy hover:file:bg-gold/90"
              />
            </label>
            <button type="submit" className="btn-primary mt-2 self-start">
              Submit Request
            </button>
            <p className="text-xs text-slate/70">
              Protected by SSL, reCAPTCHA recommended for production deployment.
            </p>
          </form>
        ))}
      </div>
    </div>
  </section>
);

export default ContactForms;

