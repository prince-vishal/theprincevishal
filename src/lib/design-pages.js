import { readFile } from 'node:fs/promises';
import path from 'node:path';

const designDir = path.join(process.cwd(), 'design');

export const routeByFile = {
  '404.html': '/404',
  'Colophon.html': '/colophon',
  'For Recruiters.html': '/for-recruiters',
  'Note 01 - The boundary around the model.html': '/notes/boundary-around-the-model',
  'Note 02 - Search on object storage.html': '/notes/search-on-object-storage',
  'Notes.html': '/notes',
  'Now.html': '/now',
  'Portfolio.html': '/',
  'Uses.html': '/uses',
};

function extractTitle(html) {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
}

function extractDescription(html) {
  return html
    .match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i)?.[1]
    ?.trim();
}

function extractHeadStyles(html) {
  return html.match(/<style[\s\S]*?<\/style>/gi)?.join('\n') ?? '';
}

function extractBody(html) {
  return html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
}

function extractBodyScripts(body) {
  const scripts = [];
  const bodyWithoutScripts = body.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (_match, script) => {
    scripts.push(script);
    return '';
  });

  return {
    body: bodyWithoutScripts,
    scripts,
  };
}

function rewriteHref(value) {
  if (value.startsWith('#')) return value;
  if (/^(?:[a-z]+:|mailto:|tel:|\/)/i.test(value)) return value;

  const [withoutHash, hash = ''] = value.split('#');
  const route = routeByFile[withoutHash];
  if (route) return `${route}${hash ? `#${hash}` : ''}`;

  if (withoutHash === 'resume.pdf') {
    return `/${value}`;
  }

  return value;
}

function rewriteSrc(value) {
  if (/^(?:[a-z]+:|data:|\/)/i.test(value)) return value;

  if (/\.(?:svg|png|jpe?g|gif|webp|pdf)$/i.test(value)) {
    return `/${value}`;
  }

  return value;
}

function rewriteUrls(html) {
  return html
    .replace(/\bhref=(["'])([^"']+)\1/g, (_match, quote, value) => {
      return `href=${quote}${rewriteHref(value)}${quote}`;
    })
    .replace(/\bsrc=(["'])([^"']+)\1/g, (_match, quote, value) => {
      if (value.includes('cyble.com/wp-content/uploads')) {
        return `src=${quote}/cyble-logo.png${quote}`;
      }

      return `src=${quote}${rewriteSrc(value)}${quote}`;
    });
}

export async function getDesignPage(fileName) {
  const html = await readFile(path.join(designDir, fileName), 'utf8');
  const { body, scripts } = extractBodyScripts(extractBody(html));

  return {
    title: extractTitle(html),
    description: extractDescription(html),
    styles: extractHeadStyles(html),
    body: rewriteUrls(body),
    scripts,
  };
}

export async function getDesignMetadata(fileName) {
  const page = await getDesignPage(fileName);

  return {
    title: page.title,
    description: page.description,
  };
}
