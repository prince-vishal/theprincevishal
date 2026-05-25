import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { getPublishedNotes } from '@/lib/notes';

const appDir = path.join(process.cwd(), 'src', 'app');
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theprincevishal.in').replace(/\/$/, '');

export const dynamic = 'force-static';

const routeMeta = {
  '/': { changeFrequency: 'monthly', priority: 1 },
  '/notes': { changeFrequency: 'weekly', priority: 0.9 },
  '/now': { changeFrequency: 'weekly', priority: 0.8 },
  '/uses': { changeFrequency: 'monthly', priority: 0.7 },
  '/for-recruiters': { changeFrequency: 'monthly', priority: 0.7 },
  '/colophon': { changeFrequency: 'yearly', priority: 0.4 },
};

async function findPageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findPageFiles(entryPath)));
      continue;
    }

    if (entry.isFile() && entry.name === 'page.js') {
      files.push(entryPath);
    }
  }

  return files;
}

function routeFromPageFile(filePath) {
  const routeDir = path.dirname(path.relative(appDir, filePath));

  if (routeDir === '.') return '/';

  const segments = routeDir.split(path.sep);

  if (segments.some((segment) => segment.startsWith('['))) {
    return null;
  }

  const routeSegments = segments.filter((segment) => {
    return (
      segment &&
      !segment.startsWith('(') &&
      !segment.startsWith('@') &&
      !segment.startsWith('_')
    );
  });

  return `/${routeSegments.join('/')}`;
}

function toSitemapEntry(route, lastModified) {
  const meta = routeMeta[route] ?? { changeFrequency: 'monthly', priority: 0.6 };

  return {
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: meta.changeFrequency,
    priority: meta.priority,
  };
}

export default async function sitemap() {
  const [pageFiles, notes] = await Promise.all([findPageFiles(appDir), getPublishedNotes()]);

  const staticEntries = await Promise.all(
    pageFiles.map(async (filePath) => {
      const route = routeFromPageFile(filePath);
      if (!route) return null;

      const fileStat = await stat(filePath);
      return toSitemapEntry(route, fileStat.mtime);
    }),
  );

  const noteEntries = notes.map((note) => {
    const lastModified = note.date ? new Date(note.date) : new Date();

    return {
      url: `${siteUrl}${note.href}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: note.featured ? 0.85 : 0.75,
    };
  });

  return [...staticEntries.filter(Boolean), ...noteEntries].sort((a, b) => {
    if (a.url === siteUrl) return -1;
    if (b.url === siteUrl) return 1;
    return a.url.localeCompare(b.url);
  });
}
