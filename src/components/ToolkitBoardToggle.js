'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const VISIBLE_MOBILE_TOOLS = 10;
const OPEN_LABEL = 'show the whole mess';
const CLOSE_LABEL = 'okay, hide the mess';

export default function ToolkitBoardToggle() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    function setupToggle() {
      if (cancelled) return;

      const boardWrap = document.querySelector('#toolkit .board-wrap');
      const board = document.querySelector('#toolkit .board');
      const notes = board ? board.querySelectorAll('.sticky') : [];

      if (!boardWrap || !board || notes.length === 0) {
        attempts += 1;
        if (attempts < 20) {
          window.setTimeout(setupToggle, 50);
        }
        return;
      }

      let button = boardWrap.querySelector('.toolkit-more');
      if (!button) {
        button = document.createElement('button');
        button.className = 'toolkit-more';
        button.type = 'button';
        button.setAttribute('aria-controls', 'board');
        boardWrap.appendChild(button);
      }

      const sync = () => {
        const expanded = boardWrap.classList.contains('tools-expanded');
        const hiddenCount = Math.max(0, notes.length - VISIBLE_MOBILE_TOOLS);

        button.textContent = expanded ? CLOSE_LABEL : `${OPEN_LABEL} (${hiddenCount} more)`;
        button.setAttribute('aria-expanded', String(expanded));
      };

      if (!button.dataset.bound) {
        button.dataset.bound = 'true';
        button.addEventListener('click', () => {
          boardWrap.classList.toggle('tools-expanded');
          sync();
        });
      }

      boardWrap.classList.remove('tools-expanded');
      sync();
    }

    setupToggle();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
