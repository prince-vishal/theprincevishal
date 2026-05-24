import Link from 'next/link';
import NotesTop from '@/components/notes/NotesTop';
import { getAllNotes, getTagCounts } from '@/lib/notes';

export const metadata = {
  title: 'Notes — Prince Sinha',
  description:
    "Half essay, half marginalia. Notes by Prince Sinha on AI, security, infrastructure, and what I've learned by writing it down.",
  openGraph: {
    title: 'Notes — Prince Sinha',
    description: 'Notes on AI, security, and the boring details that make products actually work.',
    type: 'website',
  },
};

function NoteTitle({ note }) {
  if (note.draft) {
    return <span className="title" dangerouslySetInnerHTML={{ __html: note.titleHtml }} />;
  }

  return <Link className="title" href={note.href} dangerouslySetInnerHTML={{ __html: note.titleHtml }} />;
}

function NoteEntry({ note }) {
  return (
    <article className={['entry', note.featured ? 'featured' : '', note.draft ? 'draft' : ''].filter(Boolean).join(' ')}>
      <div className="gutter">
        <b>{note.draft ? 'Draft' : `Note №.${note.number}`}</b>
        <span className="date">{note.displayDate}</span>
        {note.draftLabel ? <span className="stamp">{note.draftLabel}</span> : null}
      </div>
      <div className="body">
        <NoteTitle note={note} />
        <p className="lede" dangerouslySetInnerHTML={{ __html: note.excerptHtml }} />
        <div className="meta">
          <span className="read-time">{note.draft ? 'draft' : `≈ ${note.readTime}`}</span>
          <span className="quirk">{note.quirk}</span>
          <span className="tags">
            {note.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </div>
      </div>
    </article>
  );
}

export default async function Notes() {
  const [notes, tagCounts] = await Promise.all([getAllNotes(), getTagCounts()]);
  const tags = [
    ['all', tagCounts.all],
    ['ai & agents', tagCounts.counts.get('ai') ?? 0],
    ['security', tagCounts.counts.get('security') ?? 0],
    ['infrastructure', tagCounts.counts.get('infrastructure') ?? 0],
    ['opinions', tagCounts.counts.get('opinions') ?? 0],
    ['drafts', tagCounts.drafts],
  ];

  return (
    <main className="notes-page">
      <NotesTop />

      <section className="notes-hero">
        <aside className="currently">
          <h4>now writing</h4>
          <p>
            <span className="live" />
            <em>&quot;the boring case for boring infrastructure.&quot;</em> — about <span style={{ color: 'var(--red)' }}>73% done.</span>
          </p>
        </aside>

        <span className="kicker">— a small writing room.</span>
        <h1>
          <em>Notes.</em>
        </h1>
        <p className="lead">
          Half essay, half <em>marginalia.</em>{' '}Mostly about AI agents, security systems, the boring details that make products actually
          work, and what I&apos;ve learned by writing it down. New entries land here when they&apos;re ready.
        </p>
      </section>

      <div className="tag-bar">
        <span className="label">filed by mood →</span>
        {tags.map(([label, count], index) => (
          <button className={['tag', index === 0 ? 'active' : ''].filter(Boolean).join(' ')} key={label} type="button">
            {label} <span className="count">{String(count).padStart(2, '0')}</span>
          </button>
        ))}
      </div>

      <div className="list">
        {notes.map((note) => (
          <NoteEntry key={note.slug} note={note} />
        ))}
      </div>

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
