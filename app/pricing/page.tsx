import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import ROI from "../components/ROI";
import { constructMetadata } from "../constants/seoContants";

export const metadata = constructMetadata("pricingPage");

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">

        {/* Hero */}
        <div className="bg-[#0A1628] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00C48C] text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Flexible pricing built around your business
            </h1>
            <p className="text-white/55 text-base max-w-2xl leading-relaxed">
              No fixed prices — we negotiate directly with each client based on your
              industry, lead volume needs, and team size. Every quote is tailored.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <Pricing />

        {/* ROI section */}
        <ROI />

        {/* FAQ teaser */}
        <section className="py-14 bg-[#F8FAFC] border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
              Questions about pricing?
            </h2>
            <p className="text-[#888888] mb-6 leading-relaxed">
              We&apos;re transparent about how we price. Book a free strategy call and we&apos;ll walk
              you through a quote based on your exact needs — no pressure, no hard sell.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/#contact-form"
                className="inline-flex items-center gap-2 bg-[#006285] hover:bg-[#004a66] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
              >
                Get a Custom Quote
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 border-2 border-[#006285] text-[#006285] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#006285] hover:text-white transition-all"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
