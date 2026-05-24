import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import NotesTop from '@/components/notes/NotesTop';
import { mdxComponents } from '@/components/notes/MdxComponents';
import { getNoteBySlug, getPublishedNotes } from '@/lib/notes';

export const dynamicParams = false;

export async function generateStaticParams() {
  const notes = await getPublishedNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug).catch(() => null);

  if (!note) return {};

  return {
    title: `${note.title} — Notes · Prince Sinha`,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.ogDescription ?? note.description,
      type: 'article',
    },
  };
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

export default async function NotePage({ params }) {
  const { slug } = await params;
  const [note, notes] = await Promise.all([getNoteBySlug(slug).catch(() => null), getPublishedNotes()]);

  if (!note) notFound();

  const nextNote = note.nextSlug ? notes.find((item) => item.slug === note.nextSlug) : null;
  const { content } = await compileMDX({
    source: note.content,
    components: mdxComponents(),
    options: { parseFrontmatter: false },
  });

  return (
    <main className="notes-page notes-post-page">
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

      <article className="article">{content}</article>

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
