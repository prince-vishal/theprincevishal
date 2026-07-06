import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import NotesTop from '@/components/notes/NotesTop';
import { mdxComponents } from '@/components/notes/MdxComponents';
import { getNoteBySlug, getPublishedNotes } from '@/lib/notes';
import { addHeadingIds, buildTableOfContents } from '@/lib/table-of-contents';

export const dynamicParams = false;

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theprincevishal.in').replace(/\/$/, '');

export async function generateStaticParams() {
  const notes = await getPublishedNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug).catch(() => null);

  if (!note) return {};

  return {
    title: `${note.title}  -  Notes · Prince Sinha`,
    description: note.description,
    alternates: {
      canonical: `${siteUrl}${note.href}`,
    },
    openGraph: {
      title: note.title,
      description: note.ogDescription ?? note.description,
      type: 'article',
      url: `${siteUrl}${note.href}`,
      publishedTime: note.date,
      authors: ['Prince Sinha'],
      tags: note.tags,
    },
  };
}

function stripMarkup(value = '') {
  return String(value)
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function readTimeToMinutes(readTime) {
  const match = String(readTime ?? '').match(/\d+/);
  return match ? Number(match[0]) : undefined;
}

function buildNoteJsonLd(note) {
  const url = `${siteUrl}${note.href}`;
  const datePublished = note.date ? new Date(note.date).toISOString() : undefined;
  const dateModified = note.updatedAt
    ? new Date(note.updatedAt).toISOString()
    : datePublished;
  const wordCount = stripMarkup(note.content).split(/\s+/).filter(Boolean).length;
  const timeRequired = readTimeToMinutes(note.readTime);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      headline: note.title,
      description: note.ogDescription ?? note.description,
      url,
      datePublished,
      dateModified,
      inLanguage: 'en',
      isAccessibleForFree: true,
      wordCount,
      timeRequired: timeRequired ? `PT${timeRequired}M` : undefined,
      articleSection: note.tags?.[0] ?? 'Notes',
      keywords: note.tags?.join(', '),
      author: {
        '@type': 'Person',
        name: 'Prince Sinha',
        url: siteUrl,
      },
      publisher: {
        '@type': 'Person',
        name: 'Prince Sinha',
        url: siteUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
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
          item: `${siteUrl}/notes`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: note.title,
          item: url,
        },
      ],
    },
  ];
}

function DecoBand() {
  return (
    <div className="deco-band" aria-hidden="true">
      <svg viewBox="0 0 1200 28" preserveAspectRatio="none">
        <g fill="currentColor">
          <circle cx="20" cy="14" r="2" />
          <circle cx="56" cy="14" r="2" />
          <rect x="84" y="13" width="14" height="2" />
          <circle cx="116" cy="14" r="2" />
          <rect x="138" y="11" width="2" height="6" />
          <circle cx="166" cy="14" r="2" />
          <rect x="190" y="13" width="22" height="2" />
          <circle cx="234" cy="14" r="2" />
          <circle cx="266" cy="14" r="2" />
          <rect x="290" y="11" width="2" height="6" />
          <circle cx="316" cy="14" r="2" />
          <rect x="340" y="13" width="14" height="2" />
          <circle cx="376" cy="14" r="2" />
        </g>
        <g fill="currentColor" className="accent">
          <rect x="408" y="9" width="3" height="10" />
          <circle cx="430" cy="14" r="3" />
          <rect x="448" y="11" width="18" height="6" rx="1" />
          <circle cx="480" cy="14" r="3" />
          <rect x="498" y="9" width="3" height="10" />
        </g>
        <g fill="currentColor">
          <circle cx="528" cy="14" r="2" />
          <rect x="552" y="13" width="14" height="2" />
          <circle cx="584" cy="14" r="2" />
          <rect x="606" y="11" width="2" height="6" />
          <circle cx="634" cy="14" r="2" />
          <rect x="658" y="13" width="22" height="2" />
          <circle cx="700" cy="14" r="2" />
          <circle cx="732" cy="14" r="2" />
          <rect x="756" y="11" width="2" height="6" />
          <circle cx="784" cy="14" r="2" />
          <rect x="808" y="13" width="14" height="2" />
          <circle cx="846" cy="14" r="2" />
          <rect x="868" y="13" width="22" height="2" />
          <circle cx="912" cy="14" r="2" />
          <rect x="932" y="11" width="2" height="6" />
          <circle cx="958" cy="14" r="2" />
          <rect x="982" y="13" width="14" height="2" />
          <circle cx="1018" cy="14" r="2" />
          <circle cx="1046" cy="14" r="2" />
          <rect x="1070" y="13" width="22" height="2" />
          <circle cx="1114" cy="14" r="2" />
          <rect x="1136" y="11" width="2" height="6" />
          <circle cx="1162" cy="14" r="2" />
          <rect x="1182" y="13" width="14" height="2" />
        </g>
      </svg>
    </div>
  );
}

function ReadNext({ note }) {
  if (!note) return null;

  return (
    <Link className="read-next" href={note.href}>
      <span className="kicker">↬ read next:</span>
      <h4 dangerouslySetInnerHTML={{ __html: note.titleHtml }} />
      <p dangerouslySetInnerHTML={{ __html: note.excerptHtml }} />
      <span className="arrow">continue →</span>
    </Link>
  );
}

function TableOfContents({ items }) {
  if (items.length === 0) return null;

  return (
    <aside className="toc-card" aria-labelledby="toc-title">
      <div className="toc-kicker">field map</div>
      <h2 id="toc-title">Table of contents</h2>
      <ol>
        {items.map((item) => (
          <li className={item.depth === 3 ? 'is-child' : undefined} key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function RecruiterNote({ note }) {
  const recruiterTags = new Set([
    'ai',
    'security',
    'secops',
    'agents',
    'building',
    'leadership',
    'career',
    'platform',
  ]);
  const shouldShow = note.tags.some((tag) => recruiterTags.has(tag));

  if (!shouldShow) return null;

  return (
    <aside className="recruiter-note" aria-labelledby="recruiter-note-title">
      <div>
        <span className="eyebrow">hiring note</span>
        <h2 id="recruiter-note-title">Could this experience be useful to your team?</h2>
        <p>
          My work sits across AI-native security, SecOps, threat intelligence, platform
          engineering, and the teams that bring those systems into production.
        </p>
      </div>
      <div className="actions">
        <Link href="/for-recruiters">for recruiters</Link>
        <Link href="/resume.pdf">resume</Link>
      </div>
    </aside>
  );
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  const [note, notes] = await Promise.all([getNoteBySlug(slug).catch(() => null), getPublishedNotes()]);

  if (!note) notFound();

  const nextNote = note.nextSlug ? notes.find((item) => item.slug === note.nextSlug) : null;
  const tocEnabled = Boolean(note.tableOfContents ?? note.toc);
  const tableOfContents = tocEnabled ? buildTableOfContents(note.content) : [];
  const mdxSource = tocEnabled ? addHeadingIds(note.content, tableOfContents) : note.content;
  const { content } = await compileMDX({
    source: mdxSource,
    components: mdxComponents(),
    options: { parseFrontmatter: false },
  });
  const structuredData = buildNoteJsonLd(note);

  return (
    <main className="notes-page notes-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <NotesTop noteNumber={note.number} />
      <DecoBand />

      <header className="post-head">
        <div className="upper">
          <span>
            note <b>№.{note.number}</b> · {note.displayDate}
          </span>
          <span className="right">
            <span>
              ≈ <b>{note.readTime}</b>
            </span>
            <span className="quirk">{note.quirk}</span>
          </span>
        </div>

        <h1 dangerouslySetInnerHTML={{ __html: note.headingHtml ?? note.titleHtml }} />
        <p className="dek" dangerouslySetInnerHTML={{ __html: note.dekHtml ?? note.description }} />

        <div className="byline">
          <span className="who">Prince Sinha</span>
        </div>
      </header>

      <div className={tableOfContents.length > 0 ? 'post-body has-toc' : 'post-body'}>
        <TableOfContents items={tableOfContents} />
        <article className="article">{content}</article>
      </div>

      <RecruiterNote note={note} />

      <div className="filed">
        <span className="lab">filed under →</span>
        {note.tags.map((tag) => (
          <Link className="tag" href="/notes" key={tag}>
            {tag}
          </Link>
        ))}
      </div>

      <ReadNext note={nextNote} />

      <footer className="bottom">
        <Link href="/notes" className="big-back">
          <span>←</span> all notes
        </Link>
        <div>
          © 2026 · <b>Prince Sinha</b> · note №.{note.number}
        </div>
      </footer>
    </main>
  );
}
