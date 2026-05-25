const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theprincevishal.in').replace(/\/$/, '');

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
