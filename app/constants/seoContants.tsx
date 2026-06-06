import { Metadata } from "next";
import { COMPANY_NAME } from ".";

export const SITE_NAME     = COMPANY_NAME;
export const SITE_URL      = process.env.NEXT_PUBLIC_SITE_URL || "https://oscompanyfinder.com";
export const TWITTER_HANDLE = "@oscompanyfinder";

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
      "OsCompanyFinder Technologies helps Nigerian sales teams find verified company contacts, send bulk outreach emails, and close more deals — faster.",
    keywords: [
      "B2B lead generation Nigeria",
      "company finder Nigeria",
      "sales automation Nigeria",
      "Nigerian business database",
      "bulk email outreach Nigeria",
      "OsCompanyFinder Technologies",
    ],
    url: SITE_URL,
    ogImage: `${SITE_URL}/og-main.png`,
  },
  home: {
    title: `${SITE_NAME} | Find Verified Nigerian Companies & Decision-Maker Contacts`,
    description:
      "Stop wasting hours on manual research. OsCompanyFinder gives Nigerian sales teams instant access to verified company contacts, bulk email tools, and outreach automation.",
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
      "Read the Terms of Service for OsCompanyFinder Technologies. Understand your rights, responsibilities, and the rules governing use of our B2B lead generation platform.",
    keywords: ["OsCompanyFinder terms", "terms of service", "platform usage policy"],
    url: `${SITE_URL}/terms`,
    noIndex: false,
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "Learn how OsCompanyFinder Technologies collects, uses, stores, and protects your information in compliance with the Nigeria Data Protection Act (NDPA) 2023.",
    keywords: ["OsCompanyFinder privacy", "data protection Nigeria", "NDPA 2023", "privacy policy"],
    url: `${SITE_URL}/privacy`,
    noIndex: false,
  },
  contact: {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      "Get in touch with OsCompanyFinder Technologies. Book a demo, ask about pricing, or start a conversation about your lead generation needs.",
    keywords: ["contact OsCompanyFinder", "book demo Nigeria", "B2B sales consultation"],
    url: `${SITE_URL}/#contact-form`,
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
