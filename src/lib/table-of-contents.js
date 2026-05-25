const headingPattern = /^(#{2,3})\s+(.+?)\s*#*\s*$/;

function stripMarkdown(value) {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function slugify(value) {
  return stripMarkdown(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function uniqueSlug(baseSlug, counts) {
  const slug = baseSlug || 'section';
  const count = counts.get(slug) ?? 0;
  counts.set(slug, count + 1);

  return count === 0 ? slug : `${slug}-${count + 1}`;
}

export function buildTableOfContents(source) {
  const counts = new Map();
  const headings = [];
  let inCodeFence = false;

  for (const line of source.split('\n')) {
    if (line.trim().startsWith('```')) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence) continue;

    const match = line.match(headingPattern);
    if (!match) continue;

    const depth = match[1].length;
    const text = stripMarkdown(match[2]);
    const id = uniqueSlug(slugify(text), counts);

    headings.push({ id, text, depth });
  }

  return headings;
}

export function addHeadingIds(source, tableOfContents) {
  if (tableOfContents.length === 0) return source;

  let inCodeFence = false;
  let headingIndex = 0;

  return source
    .split('\n')
    .map((line) => {
      if (line.trim().startsWith('```')) {
        inCodeFence = !inCodeFence;
        return line;
      }

      if (inCodeFence) return line;

      const match = line.match(headingPattern);
      if (!match) return line;

      const heading = tableOfContents[headingIndex];
      headingIndex += 1;

      if (!heading) return line;

      return `<h${heading.depth} id="${heading.id}">${escapeHtml(heading.text)}</h${heading.depth}>`;
    })
    .join('\n');
}
