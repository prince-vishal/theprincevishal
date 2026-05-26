'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const filterRules = {
  all: (note) => !note.draft,
  ai: (note) => !note.draft && note.tags.includes('ai'),
  security: (note) => !note.draft && note.tags.includes('security'),
  infrastructure: (note) => !note.draft && note.tags.includes('infrastructure'),
  opinions: (note) => !note.draft && note.tags.includes('opinions'),
  drafts: (note) => note.draft,
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

export default function NotesFilterList({ notes, filters }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleNotes = useMemo(() => {
    const rule = filterRules[activeFilter] ?? filterRules.all;
    return notes.filter(rule);
  }, [activeFilter, notes]);

  const activeLabel = filters.find((filter) => filter.key === activeFilter)?.label ?? 'all';
  const summaryLabel = activeFilter === 'all' ? 'published' : activeLabel === 'drafts' ? 'draft' : activeLabel;

  return (
    <>
      <div className="tag-bar" aria-label="Filter notes by mood">
        <span className="label">filed by mood →</span>
        {filters.map((filter) => {
          const isActive = filter.key === activeFilter;

          return (
            <button
              aria-pressed={isActive}
              className={['tag', isActive ? 'active' : ''].filter(Boolean).join(' ')}
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              type="button"
            >
              {filter.label} <span className="count">{String(filter.count).padStart(2, '0')}</span>
            </button>
          );
        })}
      </div>

      <p className="filter-summary" aria-live="polite">
        showing <b>{visibleNotes.length}</b> {summaryLabel} note{visibleNotes.length === 1 ? '' : 's'}
      </p>

      <div className="list">
        {visibleNotes.map((note) => (
          <NoteEntry key={note.slug} note={note} />
        ))}
      </div>
    </>
  );
}
