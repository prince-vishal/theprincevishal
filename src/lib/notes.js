import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const notesDir = path.join(process.cwd(), 'content', 'notes');

function normalizeNote(slug, source) {
  const { data, content } = matter(source);

  return {
    ...data,
    slug,
    href: `/notes/${slug}`,
    content,
    tags: data.tags ?? [],
    draft: Boolean(data.draft),
    featured: Boolean(data.featured),
  };
}

export async function getAllNotes({ includeDrafts = true } = {}) {
  const files = await readdir(notesDir);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));
  const notes = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const source = await readFile(path.join(notesDir, file), 'utf8');
      return normalizeNote(slug, source);
    }),
  );

  return notes
    .filter((note) => includeDrafts || !note.draft)
    .sort((a, b) => {
      if (a.draft !== b.draft) return a.draft ? 1 : -1;
      return Number(b.number ?? 0) - Number(a.number ?? 0);
    });
}

export async function getPublishedNotes() {
  return getAllNotes({ includeDrafts: false });
}

export async function getNoteBySlug(slug) {
  const source = await readFile(path.join(notesDir, `${slug}.mdx`), 'utf8');
  const note = normalizeNote(slug, source);
  return note.draft ? null : note;
}

export async function getTagCounts() {
  const notes = await getAllNotes();
  const published = notes.filter((note) => !note.draft);
  const counts = new Map();

  for (const note of published) {
    for (const tag of note.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return {
    all: published.length,
    drafts: notes.length - published.length,
    counts,
  };
}
