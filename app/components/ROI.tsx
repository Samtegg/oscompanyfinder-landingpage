const TIERS = [
  { clients: "10 clients", revenue: "₦15M" },
  { clients: "50 clients", revenue: "₦75M" },
  { clients: "100 clients", revenue: "₦150M" },
];

export default function ROI() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#006285] to-[#004a66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#00C48C] font-semibold text-sm uppercase tracking-widest">
          ROI Justification
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto">
          One new client from the platform pays for the whole thing
        </h2>
        <p className="mt-4 text-white/75 text-lg max-w-2xl mx-auto">
          Whatever price we agree on, closing just 1–2 deals from your new leads puts you in
          profit. The system pays for itself.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {TIERS.map((tier) => (
            <div
              key={tier.clients}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center"
            >
              <p className="text-white/60 text-sm mb-2">{tier.clients}</p>
              <p className="text-4xl font-bold text-[#00C48C]">{tier.revenue}</p>
              <p className="text-white/60 text-sm mt-1">Revenue</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/10 border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-white text-base leading-relaxed">
            You only need{" "}
            <strong className="text-[#00C48C]">70–80 enterprise clients</strong> to reach ₦100M+
            ARR. Fewer customers, higher revenue per client.
          </p>
        </div>
      </div>
    </section>
  );
}
