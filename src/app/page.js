import DesignPage from '@/components/DesignPage';

const fileName = 'Portfolio.html';
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theprincevishal.in').replace(/\/$/, '');

export function generateMetadata() {
  return {
    title: 'Prince Sinha  -  AI-native cybersecurity & SecOps platform architect',
    description:
      'Engineering leader and builder working on AI-native cybersecurity, agentic SOC architecture, SecOps platforms, threat intelligence, automation, and infrastructure.',
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: 'Prince Sinha  -  AI-native cybersecurity & SecOps platform architect',
      description:
        'Engineering leader building AI-native systems for security operations, threat intelligence, automation, and trust.',
      type: 'profile',
      url: siteUrl,
    },
  };
}

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function buildHomeJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${siteUrl}#webpage`,
      name: 'Prince Sinha',
      description:
        'Portfolio and hiring profile for Prince Sinha, an AI-native cybersecurity and SecOps platform engineering leader.',
      url: siteUrl,
      inLanguage: 'en',
      mainEntity: {
        '@type': 'Person',
        '@id': `${siteUrl}#prince-sinha`,
        name: 'Prince Sinha',
        url: siteUrl,
        email: 'mailto:vishal.prince30@gmail.com',
        sameAs: [
          'https://www.linkedin.com/in/princevishal/',
          'https://github.com/prince-vishal',
        ],
        jobTitle: [
          'AI Security Engineering Leader',
          'Cybersecurity Engineering Leader',
          'SecOps Platform Architect',
          'Builder-Leader',
        ],
        workLocation: {
          '@type': 'Place',
          name: 'Bengaluru, India',
        },
        knowsAbout: [
          'AI-native cybersecurity',
          'Agentic SOC architecture',
          'SecOps platforms',
          'Threat intelligence automation',
          'AI security engineering',
          'Cybersecurity product engineering',
          'Engineering leadership',
          'Infrastructure reliability',
          'Reliable AI systems',
        ],
      },
      hasPart: [
        {
          '@type': 'WebPage',
          name: 'For Recruiters',
          url: `${siteUrl}/for-recruiters`,
        },
        {
          '@type': 'CollectionPage',
          name: 'AI Security & Agentic SOC Notes',
          url: `${siteUrl}/notes`,
        },
        {
          '@type': 'WebPage',
          name: 'Selected AI security and engineering leadership notes',
          url: `${siteUrl}/notes#hiring-track`,
        },
        {
          '@type': 'WebPage',
          name: 'AI security leadership interview questions I would actually ask',
          url: `${siteUrl}/notes/ai-security-leadership-interview-questions`,
        },
        {
          '@type': 'WebPage',
          name: 'What I would build as Head of AI Security Platform',
          url: `${siteUrl}/notes/head-of-ai-security-platform-brief`,
        },
        {
          '@type': 'WebPage',
          name: 'From AI security demo to production: the checklist I use',
          url: `${siteUrl}/notes/ai-security-demo-to-production-checklist`,
        },
        {
          '@type': 'WebPage',
          name: 'Agentic SOC product strategy for founders who need the real version',
          url: `${siteUrl}/notes/agentic-soc-product-strategy-founders`,
        },
        {
          '@type': 'WebPage',
          name: 'The AI cybersecurity founding CTO memo I would want to read',
          url: `${siteUrl}/notes/founding-cto-ai-cybersecurity-startup`,
        },
      ],
      potentialAction: {
        '@type': 'ContactAction',
        name: 'Book a 15 minute call',
        target: 'https://cal.com/prince-vishal-30/15min',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: 'Prince Sinha',
      url: siteUrl,
      author: {
        '@id': `${siteUrl}#prince-sinha`,
      },
      inLanguage: 'en',
    },
  ];
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(buildHomeJsonLd()) }}
      />
      <DesignPage fileName={fileName} />
    </>
  );
}
