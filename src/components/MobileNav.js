'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home', path: '/', hash: '' },
  {
    href: '/#work',
    label: 'Work',
    path: '/',
    hashes: ['#build', '#work', '#cyble', '#postman', '#credo', '#toolkit'],
  },
  { href: '/notes', label: 'Notes', path: '/notes', match: (pathname) => pathname.startsWith('/notes') },
  { href: '/now', label: 'Now', path: '/now' },
  { href: '/uses', label: 'Uses', path: '/uses' },
  { href: '/#say-hi', label: 'Hi', path: '/', hash: '#say-hi' },
];

function normalizePath(pathname) {
  if (pathname === '/') return '/';
  return pathname.replace(/\/$/, '');
}

function isLinkActive(link, pathname, hash) {
  const path = normalizePath(pathname);

  if (link.match) {
    return link.match(path);
  }

  if (link.hashes) {
    return path === link.path && link.hashes.includes(hash);
  }

  if (link.hash) {
    return path === link.path && hash === link.hash;
  }

  if (link.path === '/') {
    return path === '/' && !hash;
  }

  return path === link.path;
}

export default function MobileNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, [pathname]);

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {links.map((link) => {
        const isActive = isLinkActive(link, pathname, hash);

        return (
          <a
            key={link.href}
            href={link.href}
            className={isActive ? 'is-active' : undefined}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => {
              const url = new URL(link.href, window.location.origin);
              setHash(url.hash);
            }}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
