import Link from 'next/link';
import NotesTop from '@/components/notes/NotesTop';
import NotesFilterList from '@/components/notes/NotesFilterList';
import { getAllNotes, getTagCounts } from '@/lib/notes';

export const metadata = {
  title: 'Notes  -  Prince Sinha',
  description:
    "Half essay, half marginalia. Notes by Prince Sinha on AI, security, infrastructure, and what I've learned by writing it down.",
  openGraph: {
    title: 'Notes  -  Prince Sinha',
    description: 'Notes on AI, security, and the boring details that make products actually work.',
    type: 'website',
  },
};

export default async function Notes() {
  const [notes, tagCounts] = await Promise.all([getAllNotes(), getTagCounts()]);
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
