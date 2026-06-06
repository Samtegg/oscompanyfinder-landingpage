import { COMPANY_EMAIL, COMPANY_WHATSAPP } from ".";

export const SITE_SHARE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://oscompanyfinder.com";

export interface SocialPlatform {
  name: string;
  color: string;
  getUrl: (url?: string, title?: string) => string;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    name: "Twitter / X",
    color: "#1DA1F2",
    getUrl: (url = SITE_SHARE_URL, title = "") =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: "LinkedIn",
    color: "#0077B5",
    getUrl: (url = SITE_SHARE_URL) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    getUrl: (url = SITE_SHARE_URL, title = "") =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    name: "Email",
    color: "#D44638",
    getUrl: (url = SITE_SHARE_URL, title = "") =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  },
];

export const contactLinks = {
  email: `mailto:${COMPANY_EMAIL}`,
  whatsapp: COMPANY_WHATSAPP,
};
