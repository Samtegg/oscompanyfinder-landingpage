import Image from "next/image";
import {
  IconFolderOff,
  IconClock,
  IconTrendingDown,
  IconLayoutOff,
  IconCircleOff,
  IconAlertTriangle,
} from "@tabler/icons-react";

const PAIN_POINTS = [
  {
    icon: <IconFolderOff size={20} />,
    title: "No structured company database",
    desc: "Prospecting is scattered across Google searches, LinkedIn, and guesswork — with no single source of truth.",
  },
  {
    icon: <IconClock size={20} />,
    title: "Manual prospecting eats your day",
    desc: "Your sales team spends hours tracking down company names, contacts, and numbers that should take minutes.",
  },
  {
    icon: <IconTrendingDown size={20} />,
    title: "Low-quality, unverified leads",
    desc: "Wrong numbers, dead emails, and irrelevant contacts kill deal momentum before a conversation even starts.",
  },
  {
    icon: <IconLayoutOff size={20} />,
    title: "No centralized system",
    desc: "Leads live in spreadsheets, WhatsApp chats, and email inboxes — making follow-up inconsistent and messy.",
  },
  {
    icon: <IconCircleOff size={20} />,
    title: "Zero automation in the pipeline",
    desc: "Every step — discovery, enrichment, outreach, follow-up — is done manually, one contact at a time.",
  },
];

const STATS = [
  { value: "15+", label: "hours wasted weekly on manual prospecting" },
  { value: "60%", label: "of leads never followed up due to disorganization" },
  { value: "3×", label: "longer sales cycles without an outreach system" },
];

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — 2-col on desktop */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          {/* Left: copy */}
          <div>
            <span className="text-[#EF4444] font-semibold text-xs uppercase tracking-widest">
              The Problem
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628] leading-snug">
              Sales teams in Nigeria spend more time{" "}
              <span className="text-[#EF4444]">searching for leads</span>{" "}
              than closing them
            </h2>
            <p className="mt-4 text-[#888888] text-base leading-relaxed">
              Sound familiar? You&apos;re not alone — most B2B sales teams in Nigeria are still running a 2005 pipeline in 2025.
            </p>
          </div>

          {/* Right: photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-72">
            <Image
              src="https://images.pexels.com/photos/5717780/pexels-photo-5717780.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sales professional frustrated by manual lead prospecting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md">
              <p className="text-[#EF4444] font-bold text-sm leading-none">15+ hrs/week</p>
              <p className="text-[#888888] text-xs mt-0.5">wasted on manual prospecting</p>
            </div>
          </div>
        </div>

        {/* Stat callout */}
        <div className="grid sm:grid-cols-3 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden mb-12 max-w-4xl mx-auto shadow-sm">
          {STATS.map((stat) => (
            <div key={stat.value} className="bg-[#F8FAFC] px-6 py-5 text-center">
              <p className="text-3xl font-bold text-[#0A1628] mb-1">{stat.value}</p>
              <p className="text-[#888888] text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pain point cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-6">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex gap-4 hover:border-[#EF4444]/30 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#1A3A5C] text-sm mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Competitor warning — full width */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#F59E0B]/30">
          <div className="bg-[#0A1628] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center flex-shrink-0">
              <IconAlertTriangle size={20} />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm mb-0.5">
                Your competitors are already automating lead generation
              </p>
              <p className="text-white/50 text-sm">
                While you manually prospect, companies using automation are generating 5× more qualified leads every week.
              </p>
            </div>
            <a
              href="#features"
              className="flex-shrink-0 bg-[#00C48C] hover:bg-[#00A86B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              See the solution →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
