const COMPANIES = ["Zenith Bank", "GTBank", "Access Bank", "MTN", "Dangote Group", "Flutterwave"];

export default function TrustStrip() {
  return (
    <section className="bg-[#F8FAFC] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888888] text-xs whitespace-nowrap">
            Trusted by enterprise companies across Nigeria &amp; West Africa
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            {COMPANIES.map((name) => (
              <span key={name} className="text-sm font-bold text-[#C8D4DC]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
