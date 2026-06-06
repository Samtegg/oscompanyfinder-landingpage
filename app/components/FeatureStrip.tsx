import { IconDatabase, IconUserSearch, IconSend, IconFileExport, IconMailFast, IconTemplate } from "@tabler/icons-react";

const STRIPS = [
  {
    icon: <IconDatabase size={22} color="#006285" />,
    bg: "#e0f2fa",
    title: "Verified data",
    desc: "Clean, accurate B2B records",
  },
  {
    icon: <IconUserSearch size={22} color="#00A86B" />,
    bg: "#e0f7ee",
    title: "Contact enrichment",
    desc: "Reach decision-makers fast",
  },
  {
    icon: <IconMailFast size={22} color="#0099CC" />,
    bg: "#e0f2fa",
    title: "Bulk email sending",
    desc: "Hundreds of emails in one click",
  },
  {
    icon: <IconTemplate size={22} color="#006285" />,
    bg: "#e0f2fa",
    title: "Email templates",
    desc: "Save & reuse winning messages",
  },
  {
    icon: <IconSend size={22} color="#0099CC" />,
    bg: "#e0f2fa",
    title: "Auto outreach",
    desc: "Campaigns at scale",
  },
  {
    icon: <IconFileExport size={22} color="#00C48C" />,
    bg: "#e0f7ee",
    title: "Export intelligence",
    desc: "Download ready data",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {STRIPS.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
              </div>
              <p className="text-sm font-bold text-[#1A3A5C] mb-1">{item.title}</p>
              <p className="text-xs text-[#888888] leading-[1.5]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
