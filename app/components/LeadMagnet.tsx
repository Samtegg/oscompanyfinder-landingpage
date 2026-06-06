export default function LeadMagnet() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white border border-[#E5E7EB] rounded-2xl p-10 text-center shadow-sm">
          <div className="w-14 h-14 bg-[#00C48C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🎁
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628]">
            Get a free sample list of companies in your industry
          </h2>
          <p className="mt-3 text-[#888888]">
            See exactly what OsCompanyFinder Technologies can deliver before you commit.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your business email"
              className="flex-1 border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent"
            />
            <button
              type="button"
              className="bg-[#00C48C] hover:bg-[#00A86B] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Free Sample
            </button>
          </div>
          <p className="mt-3 text-xs text-[#888888]">
            No spam. We send your sample list within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
