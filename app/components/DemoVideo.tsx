const WORKFLOW_STEPS = [
  "Search Companies",
  "Generate Leads",
  "View Contacts",
  "Send Outreach",
  "Export Data",
];

export default function DemoVideo() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#006285] font-semibold text-sm uppercase tracking-widest">
            See It Live
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            See{" "}
            <span className="text-[#006285]">Os</span>
            <span className="text-[#0A1628]">Company</span>
            <span className="text-[#00A86B]">Finder</span>
            {" "}Technologies in Action
          </h2>
          <p className="mt-4 text-[#888888] text-lg">
            Watch how we search companies, generate leads, extract contacts, and send outreach —
            all in one system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#0A1628] rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-2xl border border-[#1A3A5C]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 70%, #006285 0%, transparent 60%), radial-gradient(circle at 70% 30%, #00C48C 0%, transparent 60%)",
              }}
            />
            <div className="relative text-center px-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 border-2 border-white/40 rounded-full mb-6">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Watch the 2-minute demo</p>
              <p className="text-white/50 text-sm mt-1">See the full lead generation workflow</p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-5 gap-2">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step} className="bg-white/10 rounded-lg px-2 py-2 text-center">
                  <p className="text-white/70 text-xs font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
