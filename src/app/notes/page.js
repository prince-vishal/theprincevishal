import Link from 'next/link';
import NotesTop from '@/components/notes/NotesTop';
import NotesFilterList from '@/components/notes/NotesFilterList';
import { getAllNotes, getTagCounts } from '@/lib/notes';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theprincevishal.in').replace(/\/$/, '');

export const metadata = {
  title: 'AI Security & Agentic SOC Notes  -  Prince Sinha',
  description:
    'Technical notes by Prince Sinha on AI-native cybersecurity, agentic SOC architecture, SecOps platforms, security engineering leadership, and reliable AI systems.',
  alternates: {
    canonical: `${siteUrl}/notes`,
  },
  openGraph: {
    title: 'AI Security & Agentic SOC Notes  -  Prince Sinha',
    description:
      'Technical notes on AI-native cybersecurity, agentic SOC architecture, SecOps platforms, and security engineering leadership.',
    type: 'website',
    url: `${siteUrl}/notes`,
  },
};

function stripMarkup(value = '') {
  return String(value)
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function buildNotesJsonLd(hiringPath) {
  const notesUrl = `${siteUrl}/notes`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${notesUrl}#webpage`,
      name: 'AI Security & Agentic SOC Notes',
      description:
        'Technical notes by Prince Sinha on AI-native cybersecurity, agentic SOC architecture, SecOps platforms, security engineering leadership, and reliable AI systems.',
      url: notesUrl,
      inLanguage: 'en',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Prince Sinha',
        url: siteUrl,
      },
      author: {
        '@type': 'Person',
        name: 'Prince Sinha',
        url: siteUrl,
        knowsAbout: [
          'AI security engineering',
          'Agentic SOC architecture',
          'Cybersecurity engineering leadership',
          'SecOps platforms',
          'AI-native security products',
          'Threat intelligence automation',
        ],
      },
      hasPart: {
        '@type': 'ItemList',
        '@id': `${notesUrl}#ai-security-builder-leader-track`,
        name: 'Selected AI security and engineering leadership notes',
        description:
          'A curated reading path for recruiters, founders, CISOs, and engineering leaders exploring Prince Sinha’s approach to AI-native cybersecurity.',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: hiringPath.length,
        itemListElement: hiringPath.map((note, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}${note.href}`,
          name: stripMarkup(note.title),
          description: stripMarkup(note.excerptHtml ?? note.description),
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${notesUrl}#breadcrumb`,
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
          name: 'Notes',
          item: notesUrl,
        },
      ],
    },
  ];
}

export default async function Notes() {
  const [notes, tagCounts] = await Promise.all([getAllNotes(), getTagCounts()]);
  const hiringPathSlugs = [
    'agentic-soc-product-strategy-founders',
    'founding-cto-ai-cybersecurity-startup',
    'head-of-ai-security-platform-brief',
    'ai-security-demo-to-production-checklist',
    'ai-security-leadership-interview-questions',
    'agentic-soc-architecture-scorecard',
    'hiring-ai-security-engineering-leader',
    'ai-security-engineering-90-day-plan',
    'builder-leader-cybersecurity-engineering',
  ];
  const hiringPath = hiringPathSlugs
    .map((slug) => notes.find((note) => note.slug === slug))
    .filter(Boolean);
  const structuredData = buildNotesJsonLd(hiringPath);
  const filters = [
    { key: 'all', label: 'all', count: tagCounts.all },
    { key: 'ai', label: 'ai & agents', count: tagCounts.counts.get('ai') ?? 0 },
    { key: 'security', label: 'security', count: tagCounts.counts.get('security') ?? 0 },
    { key: 'infrastructure', label: 'infrastructure', count: tagCounts.counts.get('infrastructure') ?? 0 },
    { key: 'opinions', label: 'opinions', count: tagCounts.counts.get('opinions') ?? 0 },
    { key: 'drafts', label: 'drafts', count: tagCounts.drafts },
  ];

  return (
    <main className="notes-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <NotesTop />

      <section className="notes-hero">
        <aside className="currently">
          <h4>now writing</h4>
          <p>
            <span className="live" />
            <em>&quot;the boring case for boring infrastructure.&quot;</em>  -  about <span style={{ color: 'var(--red)' }}>73% done.</span>
          </p>
        </aside>

        <span className="kicker"> -  a small writing room.</span>
        <h1>
          <em>Notes.</em>
        </h1>
        <p className="lead">
          Half essay, half <em>marginalia.</em>{' '}Mostly about AI agents, security systems, the boring details that make products actually
          work, and what I&apos;ve learned by writing it down. New entries land here when they&apos;re ready.
        </p>
      </section>

      <section className="hiring-path" id="hiring-track" aria-labelledby="hiring-path-title">
        <div className="hiring-path-head">
          <span className="scribble">start here if you&apos;re hiring -</span>
          <h2 id="hiring-path-title">a short path through my work.</h2>
          <p>
            A curated reading path for recruiters, founders, CISOs, and engineering leaders
            who would like to understand how I approach AI-native cybersecurity, agentic SOC,
            SecOps platforms, and hands-on engineering leadership.
          </p>
        </div>

        <div className="hiring-path-grid">
          {hiringPath.map((note, index) => (
            <Link className="hiring-path-card" href={note.href} key={note.slug}>
              <span className="step">{String(index + 1).padStart(2, '0')}</span>
              <strong dangerouslySetInnerHTML={{ __html: note.titleHtml }} />
              <small dangerouslySetInnerHTML={{ __html: note.excerptHtml }} />
            </Link>
          ))}
        </div>

        <div className="hiring-path-cta">
          <Link href="/for-recruiters">read the recruiter letter</Link>
          <Link href="/resume.pdf">open resume</Link>
        </div>
      </section>

      <NotesFilterList filters={filters} notes={notes} />

      <div className="ornament">
        <span>✦</span>
      </div>

      <div className="end-block">
        <em>that&apos;s everything pinned to the wall, for now.</em>
        <br />
        <span style={{ fontSize: 22 }}>
          new notes show up <span className="arr">↬</span>{' '}whenever they&apos;re ready.
        </span>
      </div>

      <footer className="bottom">
        <Link href="/" className="big-back">
          <span>←</span> back to the rest of the notebook
        </Link>
        <div>
          © 2026 · <b>Prince Sinha</b> · made by hand, mostly.
        </div>
      </footer>
    </main>
  );
}
