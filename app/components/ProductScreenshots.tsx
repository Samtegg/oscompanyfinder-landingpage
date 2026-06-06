const SCREENS = [
  { title: "Lead Dashboard", color: "#006285", icon: "📊" },
  { title: "Company Search", color: "#00A86B", icon: "🔍" },
  { title: "Leads Table", color: "#1A3A5C", icon: "📋" },
  { title: "Email Campaigns", color: "#0099CC", icon: "📧" },
  { title: "Export Screen", color: "#00C48C", icon: "📥" },
  { title: "Analytics", color: "#006285", icon: "📈" },
];

export default function ProductScreenshots() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
            A dashboard built for sales teams
          </h2>
          <p className="mt-4 text-[#888888]">
            Every tool your team needs — in one clean interface.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCREENS.map((screen) => (
            <div
              key={screen.title}
              className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-2" style={{ backgroundColor: screen.color }} />
              <div className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{screen.icon}</div>
                <div className="w-full space-y-2 mb-3">
                  <div className="h-2 bg-[#E5E7EB] rounded-full w-3/4 mx-auto" />
                  <div className="h-2 bg-[#E5E7EB] rounded-full w-1/2 mx-auto" />
                  <div className="h-2 bg-[#E5E7EB] rounded-full w-2/3 mx-auto" />
                </div>
                <p className="text-sm font-semibold text-[#1A3A5C]">{screen.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
