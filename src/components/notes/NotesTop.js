import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function NotesTop({ noteNumber }) {
  return (
    <div className="top">
      <div className="notes-top-left">
        <Link href={noteNumber ? '/notes' : '/'} className="back-link">
          <span className="arr">←</span> {noteNumber ? 'back to notes' : 'back to the portfolio'}
        </Link>
        <div className="crumbs">
          {noteNumber ? (
            <>
              <Link href="/">portfolio</Link>
              <span className="sep">/</span>
              <Link href="/notes">notes</Link>
              <span className="sep">/</span>
              <b>№.{noteNumber}</b>
            </>
          ) : (
            <>
              <span>portfolio</span>
              <span className="sep">/</span>
              <b>notes</b>
            </>
          )}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
