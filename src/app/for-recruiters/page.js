import DesignPage from '@/components/DesignPage';

const fileName = 'For Recruiters.html';
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theprincevishal.in').replace(/\/$/, '');
const pageUrl = `${siteUrl}/for-recruiters`;

export function generateMetadata() {
  return {
    title: 'For Recruiters  -  Prince Sinha',
    description:
      'A practical note for recruiters and founders considering Prince Sinha for AI security engineering, agentic SOC, SecOps platform, principal, or leadership roles.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'For Recruiters  -  Prince Sinha',
      description:
        'A practical introduction to Prince Sinha’s work, experience, and potential fit across AI security, agentic SOC, SecOps platforms, and engineering leadership.',
      type: 'profile',
      url: pageUrl,
    },
  };
}

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function buildRecruiterJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${pageUrl}#webpage`,
      name: 'For Recruiters - Prince Sinha',
      description:
        'A recruiter-facing introduction to Prince Sinha’s work in AI-native cybersecurity, agentic SOC, SecOps platforms, and engineering leadership.',
      url: pageUrl,
      inLanguage: 'en',
      about: {
        '@type': 'Person',
        '@id': `${siteUrl}#prince-sinha`,
        name: 'Prince Sinha',
        url: siteUrl,
        email: 'mailto:vishal.prince30@gmail.com',
        sameAs: ['https://www.linkedin.com/in/princevishal/'],
        jobTitle: [
          'AI Security Engineering Leader',
          'Cybersecurity Engineering Leader',
          'SecOps Platform Builder',
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
          'Platform architecture',
          'Reliable AI systems',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'recruiting',
          email: 'vishal.prince30@gmail.com',
          availableLanguage: ['en'],
          areaServed: ['IN', 'US', 'GB', 'SG'],
        },
      },
      mainEntity: {
        '@id': `${siteUrl}#prince-sinha`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
      },
      potentialAction: {
        '@type': 'ContactAction',
        name: 'Book a 15 minute recruiter call',
        target: 'https://cal.com/prince-vishal-30/15min',
      },
      hasPart: [
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
          name: 'AI security leadership interview questions I would actually ask',
          url: `${siteUrl}/notes/ai-security-leadership-interview-questions`,
        },
        {
          '@type': 'WebPage',
          name: 'The agentic SOC architecture scorecard',
          url: `${siteUrl}/notes/agentic-soc-architecture-scorecard`,
        },
        {
          '@type': 'WebPage',
          name: 'How I would evaluate an AI security engineering leader',
          url: `${siteUrl}/notes/hiring-ai-security-engineering-leader`,
        },
        {
          '@type': 'WebPage',
          name: 'My 90-day plan for leading an AI security engineering team',
          url: `${siteUrl}/notes/ai-security-engineering-90-day-plan`,
        },
        {
          '@type': 'WebPage',
          name: 'What I mean by builder-leader in cybersecurity engineering',
          url: `${siteUrl}/notes/builder-leader-cybersecurity-engineering`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What roles should recruiters contact Prince Sinha for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Engineering leadership, Head of Engineering, VP Engineering, Principal-level IC, CTO or founding CTO roles at funded early-stage startups, and advisory roles in AI-native cybersecurity, SecOps, infrastructure, or security platform companies.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you still hands-on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Prince aims to stay close enough to architecture, product judgment, security risk, and delivery to contribute directly, while helping teams make good decisions without depending on one person.',
          },
        },
        {
          '@type': 'Question',
          name: 'What domains are the strongest fit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'The strongest fit is AI-native cybersecurity, agentic SOC, SecOps platforms, threat intelligence automation, AI security engineering, cloud infrastructure, internal developer platforms, and reliable AI systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'What roles are less likely to fit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Generic full-stack roles, pure people-management roles with no technical ownership, AI work without a clear user problem, unfunded ideas presented as established roles, and web3 or crypto pivots are less likely to fit his experience and interests.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I include in the first message?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Include the role, company stage, location model, compensation range, and a little context on why the work maps to AI security, SecOps, infrastructure, or engineering leadership. Email or the 15-minute recruiter call link both work.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'For Recruiters',
          item: pageUrl,
        },
      ],
    },
  ];
}

export default function ForRecruiters() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(buildRecruiterJsonLd()) }}
      />
      <DesignPage fileName={fileName} />
    </>
  );
}
