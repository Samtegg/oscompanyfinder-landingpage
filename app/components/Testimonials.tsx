import Image from "next/image";
import { IconStar, IconQuote } from "@tabler/icons-react";

// ─── To swap photos ──────────────────────────────────────────────────────────
// All photos use the Unsplash CDN — free, no attribution required.
// To replace: find a photo on unsplash.com, copy the photo ID from the URL
// e.g. unsplash.com/photos/abc123xyz → use "abc123xyz" as the photo ID
// Format: https://images.unsplash.com/photo-{ID}?w=200&h=200&fit=crop&crop=face&auto=format
// ─────────────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Adebayo Okafor",
    title: "Head of Sales",
    company: "Zenith Insurance Group",
    avatar: "AO",
    gradient: "from-[#006285] to-[#0099CC]",
    // African business man — smiling professional
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
    stars: 5,
    quote:
      "We used to spend 3 weeks manually compiling a list of 200 companies. OsCompanyFinder gives us 500 verified leads in under an hour. Our pipeline has never looked healthier.",
    tag: "Insurance",
  },
  {
    name: "Ngozi Adeyemi",
    title: "CEO",
    company: "PropReach Lagos",
    avatar: "NA",
    gradient: "from-[#00A86B] to-[#00C48C]",
    // African professional woman — confident executive
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face&auto=format",
    stars: 5,
    quote:
      "As a real estate firm trying to reach corporate clients, finding decision-maker contacts was our biggest bottleneck. This platform solved it completely. ROI was clear within the first month.",
    tag: "Real Estate",
    featured: true,
  },
  {
    name: "Chukwuemeka Nwosu",
    title: "Business Development Manager",
    company: "SwiftMove Logistics",
    avatar: "CN",
    gradient: "from-[#1A3A5C] to-[#006285]",
    // African business man — professional portrait
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format",
    stars: 5,
    quote:
      "The bulk email feature alone is worth it. We sent 800 personalised outreach emails in one afternoon and booked 14 demos that week. Nothing else comes close in Nigeria.",
    tag: "Logistics",
  },
  {
    name: "Fatima Aliyu",
    title: "Founder",
    company: "NorthReach Consulting",
    avatar: "FA",
    gradient: "from-[#0099CC] to-[#00C48C]",
    // Professional woman — business portrait
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format",
    stars: 5,
    quote:
      "I was skeptical at first — I'd tried three other tools that promised Nigerian data and delivered garbage. OsCompanyFinder's contacts are actually verified. That changes everything.",
    tag: "Consulting",
  },
];

// ─── Avatar: shows photo if provided, otherwise gradient initials ─────────
function Avatar({
  photo,
  avatar,
  gradient,
  size,
}: {
  photo?: string;
  avatar: string;
  gradient: string;
  size: "sm" | "lg";
}) {
  const dim    = size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const text   = size === "lg" ? "text-xl"   : "text-base";
  const radius = size === "lg" ? "rounded-2xl" : "rounded-xl";

  if (photo) {
    return (
      <div className={`${dim} ${radius} overflow-hidden flex-shrink-0 shadow-lg`}>
        <Image
          src={photo}
          alt={avatar}
          width={size === "lg" ? 64 : 48}
          height={size === "lg" ? 64 : 48}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-br ${gradient} ${dim} ${radius} flex items-center justify-center text-white font-black ${text} flex-shrink-0 shadow-lg`}
    >
      {avatar}
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const featuredItem = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[1];
  const others       = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block bg-[#006285]/8 border border-[#006285]/15 text-[#006285] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] leading-tight">
            Nigerian businesses are already winning with OsCompanyFinder
          </h2>
          <p className="mt-4 text-[#888888] text-base leading-relaxed">
            From insurance to logistics to real estate — see how sales teams across Nigeria are closing more deals.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-8 rounded-2xl bg-[#0A1628] p-8 sm:p-10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #00C48C, transparent)" }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
            <Avatar
              photo={featuredItem.photo}
              avatar={featuredItem.avatar}
              gradient={featuredItem.gradient}
              size="lg"
            />
            <div className="flex-1">
              <IconQuote size={32} className="text-[#00C48C] mb-3 opacity-60" />
              <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-5">
                &ldquo;{featuredItem.quote}&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-white font-bold">{featuredItem.name}</p>
                  <p className="text-white/50 text-sm">
                    {featuredItem.title} · {featuredItem.company}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Stars count={featuredItem.stars} />
                  <span className="text-xs font-semibold text-[#00C48C] bg-[#00C48C]/10 border border-[#00C48C]/20 px-2.5 py-1 rounded-full">
                    {featuredItem.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other testimonials */}
        <div className="grid sm:grid-cols-3 gap-6">
          {others.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 hover:border-[#006285]/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <Avatar
                  photo={t.photo}
                  avatar={t.avatar}
                  gradient={t.gradient}
                  size="sm"
                />
                <span className="text-xs font-semibold text-[#006285] bg-[#006285]/8 border border-[#006285]/15 px-2 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>

              <IconQuote size={20} className="text-[#006285] mb-2 opacity-40" />
              <p className="text-[#1A3A5C] text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-[#E5E7EB] pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[#0A1628] font-bold text-sm">{t.name}</p>
                  <p className="text-[#888888] text-xs mt-0.5">
                    {t.title} · {t.company}
                  </p>
                </div>
                <Stars count={t.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-7 px-8 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
          {[
            { value: "50+",   label: "Companies served"    },
            { value: "4.9/5", label: "Average rating"      },
            { value: "98%",   label: "Client retention"    },
            { value: "3×",    label: "Avg. pipeline growth" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-[#006285]">{stat.value}</p>
              <p className="text-[#888888] text-xs mt-0.5 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
