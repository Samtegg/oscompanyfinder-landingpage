const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Company Discovery Engine",
    desc: "Search and discover real companies by industry and location across Nigeria instantly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email + Phone Extraction",
    desc: "Automatically extract verified emails and phone numbers from decision-makers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
    ),
    title: "Lead Filtering System",
    desc: "Filter leads by location, industry, company size, and contact status.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Outreach Automation",
    desc: "Send personalized email campaigns to verified leads directly from the platform.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Export to Excel",
    desc: "Download your entire lead list as Excel files ready for your CRM or team.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Usage Tracking Dashboard",
    desc: "Monitor leads generated, emails sent, and conversion rates in real time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6M9 16h4" />
      </svg>
    ),
    title: "Bulk Email Sending",
    desc: "Send hundreds of personalised outreach emails to verified leads in one click — no manual effort required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Saved Email Templates",
    desc: "Build and save reusable outreach templates for different industries, so your team never writes the same email twice.",
  },
];

import Link from "next/link";

export default function Features({ preview = false }: { preview?: boolean }) {
  const items = preview ? FEATURES.slice(0, 4) : FEATURES;

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-[#00A86B] font-semibold text-sm uppercase tracking-widest">
            The Solution
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            A complete system for finding, enriching, and contacting companies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:shadow-md hover:border-[#006285]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#006285]/10 text-[#006285] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#006285] group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-[#1A3A5C] mb-2">{feature.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 border-2 border-[#006285] text-[#006285] font-semibold px-6 py-3 rounded-xl hover:bg-[#006285] hover:text-white transition-all text-sm"
            >
              See all {FEATURES.length} features →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
