import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-xs">
            <Image
              src="/images/oscompanyfinder.png"
              alt="OsCompanyFinder Technologies"
              width={220}
              height={54}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-white/40 text-sm leading-relaxed">
              Nigeria&apos;s B2B intelligence and lead generation platform. Helping companies find,
              enrich, and contact their ideal clients.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="text-white/60 font-semibold mb-3">Product</p>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/40 hover:text-white/70 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-white/40 hover:text-white/70 transition-colors">Pricing</a></li>
                <li><a href="#demo" className="text-white/40 hover:text-white/70 transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/60 font-semibold mb-3">Industries</p>
              <ul className="space-y-2">
                {["Insurance", "Real Estate", "Fintech", "Logistics"].map((industry) => (
                  <li key={industry}><span className="text-white/40">{industry}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/60 font-semibold mb-3">Contact</p>
              <ul className="space-y-2">
                <li><a href="mailto:oscompanyfinder@gmail.com" className="text-white/40 hover:text-white/70 transition-colors">Get in touch</a></li>
                <li><a href="#contact-form" className="text-white/40 hover:text-white/70 transition-colors">Book a demo</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/60 font-semibold mb-3">Legal</p>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} OsCompanyFinder Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-white/30 hover:text-white/50 text-xs transition-colors">Terms of Service</Link>
            <span className="text-white/20">·</span>
            <Link href="/privacy" className="text-white/30 hover:text-white/50 text-xs transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
