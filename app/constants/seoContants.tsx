import { Metadata } from "next";
import { BRAND_NAME, COMPANY_NAME } from ".";

export const SITE_NAME     = BRAND_NAME;
export const SITE_URL      = process.env.NEXT_PUBLIC_SITE_URL || "https://oscompanyfinder.com";
export const TWITTER_HANDLE = "@oscfinder";

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  url?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const SEODATA: Record<string, SEOConfig> = {
  default: {
    title: `${SITE_NAME} | B2B Lead Generation Platform for Nigeria`,
    description:
      `${SITE_NAME} (${COMPANY_NAME}) helps Nigerian sales teams find verified company contacts, send bulk outreach emails, and close more deals — faster.`,
    keywords: [
      "B2B lead generation Nigeria",
      "company finder Nigeria",
      "sales automation Nigeria",
      "Nigerian business database",
      "bulk email outreach Nigeria",
      "OsCFinder",
    ],
    url: SITE_URL,
    ogImage: `${SITE_URL}/og-main.png`,
  },
  home: {
    title: `${SITE_NAME} | Find Verified Nigerian Companies & Decision-Maker Contacts`,
    description:
      `Stop wasting hours on manual research. ${SITE_NAME} gives Nigerian sales teams instant access to verified company contacts, bulk email tools, and outreach automation.`,
    keywords: [
      "Nigerian company database",
      "B2B leads Nigeria",
      "lead generation SaaS Nigeria",
      "sales prospecting Nigeria",
      "verified business contacts Nigeria",
    ],
    url: SITE_URL,
  },
  terms: {
    title: `Terms of Service | ${SITE_NAME}`,
    description:
      `Read the Terms of Service for ${COMPANY_NAME}. Understand your rights, responsibilities, and the rules governing use of our B2B lead generation platform.`,
    keywords: ["OsCFinder terms", "terms of service", "platform usage policy"],
    url: `${SITE_URL}/terms`,
    noIndex: false,
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      `Learn how ${COMPANY_NAME} collects, uses, stores, and protects your information in compliance with the Nigeria Data Protection Act (NDPA) 2023.`,
    keywords: ["OsCFinder privacy", "data protection Nigeria", "NDPA 2023", "privacy policy"],
    url: `${SITE_URL}/privacy`,
    noIndex: false,
  },
  contact: {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      `Get in touch with ${SITE_NAME}. Book a demo, ask about pricing, or start a conversation about your lead generation needs.`,
    keywords: ["contact OsCFinder", "book demo Nigeria", "B2B sales consultation"],
    url: `${SITE_URL}/#contact-form`,
  },
  features: {
    title: `Platform Features | ${SITE_NAME}`,
    description:
      `Explore every feature of ${SITE_NAME} — company discovery, verified contact extraction, bulk email, saved templates, Excel export, and more.`,
    keywords: ["OsCFinder features", "B2B lead generation features Nigeria", "bulk email Nigeria", "company finder features"],
    url: `${SITE_URL}/features`,
  },
  pricingPage: {
    title: `Pricing | ${SITE_NAME}`,
    description:
      `${SITE_NAME} offers flexible pricing tailored to your business size, industry, and lead volume needs. Reach out for a custom invoice.`,
    keywords: ["OsCFinder pricing", "B2B lead generation cost Nigeria", "lead generation pricing Nigeria"],
    url: `${SITE_URL}/pricing`,
  },
  faq: {
    title: `Frequently Asked Questions | ${SITE_NAME}`,
    description:
      `Got questions about ${SITE_NAME}? Find answers about our B2B lead generation platform, data quality, pricing, features, and compliance.`,
    keywords: ["OsCFinder FAQ", "B2B leads Nigeria questions", "lead generation platform help", "company finder Nigeria FAQ"],
    url: `${SITE_URL}/faq`,
  },
};

export function constructMetadata(pageKey: keyof typeof SEODATA = "default"): Metadata {
  const config = SEODATA[pageKey] ?? SEODATA.default;

  const allKeywords = Array.from(
    new Set([...config.keywords, ...SEODATA.default.keywords])
  );

  return {
    title: config.title,
    description: config.description,
    keywords: allKeywords.join(", "),
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.url ?? SITE_URL,
      siteName: SITE_NAME,
      images: [{ url: config.ogImage ?? SEODATA.default.ogImage! }],
      type: "website",
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      creator: TWITTER_HANDLE,
      images: [config.ogImage ?? SEODATA.default.ogImage!],
    },
    robots: config.noIndex ? "noindex, nofollow" : "index, follow",
    alternates: {
      canonical: config.url ?? SITE_URL,
    },
  };
}
