import {
  IconSearch,
  IconBuildingSkyscraper,
  IconAddressBook,
  IconMailFast,
  IconFileExport,
  IconPlayerPlay,
  IconArrowRight,
} from "@tabler/icons-react";

const STEPS = [
  { icon: <IconSearch size={15} />,            label: "Search Companies"  },
  { icon: <IconBuildingSkyscraper size={15} />, label: "Generate Leads"    },
  { icon: <IconAddressBook size={15} />,        label: "Extract Contacts"  },
  { icon: <IconMailFast size={15} />,           label: "Send Outreach"     },
  { icon: <IconFileExport size={15} />,         label: "Export Data"       },
];

export default function DemoVideo() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-[#f0faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block bg-[#006285]/8 border border-[#006285]/15 text-[#006285] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            See It Live
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] leading-tight">
            See <span className="text-[#00C48C]">OsC</span><span className="text-[#006285]">Finder</span> in action
          </h2>
          <p className="mt-4 text-[#888888] text-base leading-relaxed">
            Watch how we search companies, generate leads, extract contacts,
            and send outreach — all in one system.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-between relative">
            {/* connector line */}
            <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-[#006285] via-[#0099CC] to-[#00A86B] mx-10 hidden sm:block" />
            {STEPS.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center gap-2 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-md text-white"
                  style={{ background: `hsl(${195 + i * 15}, 70%, ${35 - i * 3}%)` }}
                >
                  {step.icon}
                </div>
                <span className="text-[11px] font-semibold text-[#1A3A5C] text-center leading-tight max-w-[64px]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#006285]/20"
            style={{ background: "linear-gradient(135deg, #003d54 0%, #006285 40%, #0099CC 70%, #00A86B 100%)" }}
          >
            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow blobs */}
            <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ background: "#00C48C" }} />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
              style={{ background: "#0099CC" }} />

            {/* Content */}
            <div className="relative aspect-video flex flex-col items-center justify-center px-8 gap-6">

              {/* Play button */}
              <a
                href="#contact-form"
                className="group flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <IconPlayerPlay size={30} className="text-white ml-1" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Book a live demo</p>
                  <p className="text-white/60 text-sm mt-0.5">We walk you through the full workflow — live</p>
                </div>
              </a>

              {/* CTA */}
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                Schedule your demo
                <IconArrowRight size={15} />
              </a>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-white/10 px-6 py-3 flex items-center justify-between bg-black/20 backdrop-blur-sm">
              <p className="text-white/50 text-xs">Free · No commitment · 30 minutes</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00C48C] animate-pulse" />
                <span className="text-white/50 text-xs">Available for booking</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
