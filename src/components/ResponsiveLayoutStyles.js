const responsiveLayoutStyles = `
.mobile-nav {
  display: none;
}

.toolkit-more {
  display: none;
}

@media (max-width: 1024px) {
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
    width: 100%;
  }

  .page,
  .notes-page {
    width: 100%;
  }

  .col,
  .col.wide,
  .chap-body {
    max-width: 100%;
    width: 100%;
  }

  .scr.left,
  .scr.right,
  .scr.tilt-l,
  .scr.tilt-r {
    translate: 0 calc((1 - var(--p)) * 48px) !important;
    rotate: 0deg !important;
  }

  .scr.big-up {
    translate: 0 calc((1 - var(--p)) * 72px) !important;
  }

  .hero h1[style] {
    font-size: clamp(44px, 8vw, 72px) !important;
    max-width: 100% !important;
  }

  .cyble-card,
  .featured,
  .recruiter-cta,
  .system-card,
  .copy-block,
  .survivors,
  .currently,
  .now {
    max-width: 100%;
  }

  .cyble-card .brand-mark {
    left: 18px;
    top: -18px;
  }
}

@media (max-width: 840px) {
  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    padding-bottom: calc(74px + env(safe-area-inset-bottom));
  }

  .page,
  .notes-page {
    max-width: none;
    padding-left: max(16px, env(safe-area-inset-left));
    padding-right: max(16px, env(safe-area-inset-right));
  }

  .scr,
  .scr.up,
  .scr.down,
  .scr.left,
  .scr.right,
  .scr.zoom,
  .scr.tilt-l,
  .scr.tilt-r,
  .scr.big-up {
    opacity: 1 !important;
    rotate: 0deg !important;
    scale: 1 !important;
    translate: 0 0 !important;
  }

  .page-progress,
  .chapter-indicator {
    display: none !important;
  }

  .top {
    position: sticky;
    top: 0;
    z-index: 50;
    margin: 0 calc(max(16px, env(safe-area-inset-right)) * -1) 32px calc(max(16px, env(safe-area-inset-left)) * -1);
    padding: max(12px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) 12px max(16px, env(safe-area-inset-left));
    background: color-mix(in oklab, var(--paper) 88%, transparent);
    border-bottom: 1px solid color-mix(in oklab, var(--rule) 86%, transparent);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .top .monogram span {
    max-width: min(62vw, 32ch);
  }

  .top > div:first-child,
  .notes-top-left {
    flex: 1 1 auto;
    gap: 12px !important;
    justify-content: space-between;
    min-width: 0;
  }

  .monogram {
    min-width: 0;
  }

  .monogram span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .back-link,
  .theme-toggle,
  .big-back,
  .contacts a,
  .contact-strip a {
    min-height: 44px;
  }

  .back-link {
    align-items: center;
    font-size: 11.5px;
    padding: 0 2px;
  }

  .crumbs {
    max-width: 100%;
    overflow-x: auto;
    padding: 4px 0;
    scrollbar-width: none;
    white-space: nowrap;
  }

  .crumbs::-webkit-scrollbar {
    display: none;
  }

  .theme-toggle {
    margin-left: auto;
    padding: 9px 14px 9px 12px;
    transform: rotate(-0.8deg);
  }

  nav.top-nav {
    display: none !important;
  }

  .mobile-nav {
    align-items: center;
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--paper) 94%, transparent), color-mix(in oklab, var(--paper-2) 92%, transparent));
    border: 1px solid color-mix(in oklab, var(--rule) 88%, transparent);
    border-radius: 999px;
    bottom: max(10px, env(safe-area-inset-bottom));
    box-shadow: 0 14px 38px rgba(60, 40, 20, 0.16);
    display: flex;
    gap: 4px;
    left: max(10px, env(safe-area-inset-left));
    overflow-x: auto;
    padding: 7px;
    position: fixed;
    right: max(10px, env(safe-area-inset-right));
    scrollbar-width: none;
    z-index: 1000;
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
  }

  [data-theme="dark"] .mobile-nav {
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.46);
  }

  .mobile-nav::-webkit-scrollbar {
    display: none;
  }

  .mobile-nav a {
    align-items: center;
    border-radius: 999px;
    color: var(--ink-soft);
    display: inline-flex;
    flex: 1 0 auto;
    font-family: var(--mono);
    font-size: 11px;
    justify-content: center;
    letter-spacing: 0.03em;
    min-height: 42px;
    min-width: 52px;
    padding: 0 10px;
    text-decoration: none;
    transition: background-color 0.16s ease, color 0.16s ease, transform 0.16s ease;
    white-space: nowrap;
  }

  .mobile-nav a:active {
    transform: scale(0.96);
  }

  .mobile-nav a.is-active {
    background: var(--ink);
    color: var(--paper);
  }

  .hero,
  .notes-hero {
    margin-bottom: 32px;
    padding-top: 0;
    padding-bottom: 32px;
  }

  .hero {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .hero > .col {
    order: 1;
  }

  .hero > .now {
    order: 2;
  }

  .hero > .currently {
    order: 2;
  }

  .hero .hello {
    display: inline-block;
    font-size: clamp(24px, 8vw, 34px);
    line-height: 1;
    margin-bottom: 12px;
  }

  .hero h1,
  .notes-hero h1 {
    font-size: clamp(52px, 16vw, 88px);
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }

  .hero h1[style] {
    font-size: clamp(42px, 14vw, 64px) !important;
  }

  .hero .col > h1:first-of-type[style] {
    font-size: clamp(58px, 18vw, 78px) !important;
    line-height: 0.92;
    margin-bottom: 18px;
  }

  .hero .col > h1:nth-of-type(2)[style] {
    font-size: clamp(42px, 12.5vw, 56px) !important;
    line-height: 0.98;
  }

  .hero .lead,
  .hero-lead,
  .notes-hero .lead {
    font-size: 20px;
    line-height: 1.38;
  }

  .now,
  .currently {
    max-width: none;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
  }

  .section {
    padding-bottom: 34px;
  }

  .chapter {
    align-items: flex-start;
    display: block;
    gap: 12px;
    margin-bottom: 24px;
  }

  .chapter::before,
  .chapter::after {
    display: none;
  }

  .chapter h2 {
    font-size: clamp(34px, 12vw, 58px);
    line-height: 0.96;
    overflow-wrap: anywhere;
  }

  .row,
  .work-entry,
  .exp-row,
  .pillar,
  .cyble-head,
  .contact-grid,
  .category {
    grid-template-columns: 1fr;
  }

  .featured,
  .cyble-card,
  .recruiter-cta,
  .system-card,
  .survivors,
  .copy-block,
  .aside,
  .quibble,
  .currently,
  .now {
    margin-left: 0;
    margin-right: 0;
  }

  .featured,
  .cyble-card {
    padding: 28px 18px;
  }

  .cyble-card h2,
  .featured h3 {
    font-size: clamp(32px, 11vw, 48px);
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .cyble-card .brand-mark {
    left: auto;
    right: 14px;
    top: -16px;
  }

  .career-timeline {
    margin: 18px 0 30px;
  }

  .career-timeline .lab {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .rail-wrap {
    display: grid;
    gap: 10px;
    margin: 0;
    padding-left: 0;
    position: relative;
  }

  .rail-wrap .rail {
    display: none !important;
  }

  .career-node,
  .career-node.current {
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--paper) 18%, transparent), transparent),
      color-mix(in oklab, var(--paper-2) 82%, transparent) !important;
    border: 1px solid color-mix(in oklab, var(--rule) 88%, transparent) !important;
    border-radius: 14px !important;
    box-shadow: none !important;
    display: block !important;
    height: auto !important;
    left: auto !important;
    padding: 13px 76px 13px 44px !important;
    position: relative !important;
    top: auto !important;
    transform: none !important;
    width: 100% !important;
  }

  .career-node:hover,
  .career-node:hover.current {
    transform: none !important;
  }

  .career-node.current {
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--red) 10%, transparent), transparent),
      color-mix(in oklab, var(--paper-2) 88%, transparent) !important;
    border-color: color-mix(in oklab, var(--red) 62%, var(--rule)) !important;
  }

  .career-node .stem {
    display: none !important;
  }

  .career-node::before,
  .career-node.current::before {
    background: var(--paper-2) !important;
    border: 2px solid var(--ink-mute) !important;
    border-radius: 999px !important;
    content: "" !important;
    height: 12px !important;
    left: 17px !important;
    position: absolute !important;
    top: 20px !important;
    width: 12px !important;
  }

  .career-node.current::before {
    background: var(--red) !important;
    border-color: var(--red) !important;
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--red) 14%, transparent);
  }

  .career-node .role-label {
    display: flex !important;
    flex-direction: column !important;
    gap: 5px !important;
    left: auto !important;
    max-width: none !important;
    position: static !important;
    text-align: left !important;
    transform: none !important;
    width: auto !important;
  }

  .career-node.above .role-label,
  .career-node.below .role-label {
    bottom: auto !important;
    top: auto !important;
  }

  .career-node .role {
    font-size: 19px !important;
    line-height: 1.15 !important;
  }

  .career-node .date {
    font-size: 10.5px !important;
  }

  .career-node.current::after {
    background: var(--red);
    border-radius: 999px;
    color: var(--paper);
    content: "now" !important;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    line-height: 1;
    padding: 6px 9px;
    position: absolute !important;
    right: 12px !important;
    text-transform: uppercase;
    top: 13px !important;
    transform: none !important;
    white-space: nowrap;
  }

  .impact-strip {
    grid-template-columns: 1fr 1fr;
  }

  .credo-item {
    grid-template-columns: 42px 1fr;
    gap: 12px;
  }

  .credo-item p {
    font-size: 20px;
  }

  .category {
    background:
      radial-gradient(ellipse at 28% 18%, rgba(255, 250, 232, 0.45) 0%, transparent 55%),
      radial-gradient(ellipse at 78% 82%, rgba(180, 145, 90, 0.05) 0%, transparent 60%),
      linear-gradient(135deg,
        color-mix(in oklab, var(--paper-2) 94%, #fff8e6 6%) 0%,
        var(--paper-2) 56%,
        color-mix(in oklab, var(--paper-2) 92%, #c9a560 8%) 100%);
    border: 0;
    border-radius: 4px;
    box-shadow:
      0 1px 0 rgba(60, 40, 20, 0.05),
      2px 4px 10px rgba(60, 40, 20, 0.08),
      8px 22px 44px rgba(60, 40, 20, 0.12),
      0 1px 0 rgba(255, 250, 232, 0.55) inset;
    clip-path: polygon(
      0.8% 0.5%,
      18% 0,
      37% 0.4%,
      58% 0.1%,
      82% 0.55%,
      99.2% 0.2%,
      99.7% 19%,
      99.2% 42%,
      99.8% 68%,
      99.1% 99.1%,
      77% 99.7%,
      51% 99.25%,
      28% 99.9%,
      0.9% 99.35%,
      0.2% 74%,
      0.75% 47%,
      0.15% 22%
    );
    display: block;
    margin: 0 0 30px;
    overflow: hidden;
    padding: 28px 0 0;
    position: relative;
    transform: rotate(-0.25deg);
  }

  [data-theme="dark"] .category {
    background:
      radial-gradient(ellipse at 28% 18%, rgba(255, 230, 180, 0.04) 0%, transparent 55%),
      radial-gradient(ellipse at 78% 82%, rgba(60, 40, 20, 0.30) 0%, transparent 60%),
      linear-gradient(135deg,
        color-mix(in oklab, var(--paper-2) 94%, #6e5a30 6%) 0%,
        var(--paper-2) 56%,
        color-mix(in oklab, var(--paper-2) 88%, #2b1f12 12%) 100%);
    box-shadow:
      0 1px 0 rgba(0, 0, 0, 0.4),
      2px 4px 10px rgba(0, 0, 0, 0.4),
      8px 22px 44px rgba(0, 0, 0, 0.55),
      0 1px 0 rgba(255, 230, 180, 0.05) inset;
  }

  .category:nth-of-type(even) {
    clip-path: polygon(
      0.4% 0.15%,
      22% 0.55%,
      44% 0.05%,
      66% 0.45%,
      87% 0.1%,
      99.4% 0.65%,
      99.15% 24%,
      99.75% 52%,
      99.25% 80%,
      99.65% 99.4%,
      72% 99.05%,
      49% 99.75%,
      21% 99.25%,
      0.55% 99.6%,
      0.85% 78%,
      0.25% 55%,
      0.7% 31%
    );
    transform: rotate(0.22deg);
  }

  .category:nth-of-type(3n) {
    transform: rotate(-0.12deg) translateX(1px);
  }

  .category::before {
    background:
      repeating-linear-gradient(90deg,
        transparent 0,
        transparent 5px,
        rgba(255, 255, 255, 0.06) 5px,
        rgba(255, 255, 255, 0.06) 6px),
      linear-gradient(180deg,
        rgba(245, 220, 130, 0.42) 0%,
        rgba(232, 207, 115, 0.68) 50%,
        rgba(245, 220, 130, 0.42) 100%);
    box-shadow:
      0 2px 3px rgba(60, 40, 20, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
    content: "";
    height: 24px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: -12px;
    transform: translateX(-50%) rotate(-2deg);
    width: 96px;
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%);
  }

  .category:nth-of-type(even)::before {
    transform: translateX(-50%) rotate(2.5deg);
  }

  [data-theme="dark"] .category::before {
    background:
      repeating-linear-gradient(90deg,
        transparent 0,
        transparent 5px,
        rgba(255, 255, 255, 0.025) 5px,
        rgba(255, 255, 255, 0.025) 6px),
      linear-gradient(180deg,
        rgba(190, 150, 70, 0.35) 0%,
        rgba(170, 130, 55, 0.55) 50%,
        rgba(190, 150, 70, 0.35) 100%);
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 220, 150, 0.12);
  }

  .category::after {
    background: linear-gradient(135deg,
      color-mix(in oklab, var(--paper-2) 60%, #fff8e6 40%) 0%,
      color-mix(in oklab, var(--paper-2) 80%, #c9a560 20%) 70%,
      color-mix(in oklab, var(--paper-2) 88%, #8b6a3d 12%) 100%);
    bottom: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    content: "";
    filter: drop-shadow(-1px -1px 2px rgba(60, 40, 20, 0.18));
    height: 24px;
    pointer-events: none;
    position: absolute;
    right: 0;
    width: 24px;
  }

  [data-theme="dark"] .category::after {
    background: linear-gradient(135deg,
      color-mix(in oklab, var(--paper-2) 55%, #5e4a2e 45%) 0%,
      color-mix(in oklab, var(--paper-2) 78%, #2b1f12 22%) 70%,
      color-mix(in oklab, var(--paper-2) 88%, #0a0805 12%) 100%);
    filter: drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.45));
  }

  .category .head {
    border-bottom: 1px dashed color-mix(in oklab, var(--rule) 82%, transparent);
    padding: 0 18px 12px;
  }

  .category .head h2 {
    font-size: 30px;
    margin-bottom: 4px;
  }

  .category .items,
  .items {
    background: transparent;
    width: 100%;
  }

  .item,
  .contacts a,
  .contact-strip a {
    grid-template-columns: 1fr;
    gap: 5px;
    overflow-wrap: anywhere;
    padding: 14px 16px;
    text-align: left;
  }

  .item + .item {
    border-top-color: color-mix(in oklab, var(--rule) 82%, transparent);
  }

  .item .name {
    font-size: 20px;
    line-height: 1.22;
  }

  .item .why,
  .contacts a,
  .contact-strip a {
    max-width: none;
    text-align: left;
  }

  .field,
  .contrib-list,
  .notes,
  .contacts,
  .contact-strip,
  .skills-grid,
  .strengths,
  .contributions {
    grid-template-columns: 1fr;
  }

  .board-wrap {
    overflow: visible;
  }

  .toolkit-more {
    align-items: center;
    background:
      radial-gradient(ellipse at 20% 0%, rgba(255, 250, 232, 0.62) 0%, transparent 56%),
      linear-gradient(135deg,
        color-mix(in oklab, var(--paper-2) 88%, #fff8e6 12%) 0%,
        color-mix(in oklab, var(--paper-2) 82%, #c9a560 18%) 100%);
    border: 1px dashed color-mix(in oklab, var(--red) 58%, var(--rule));
    border-radius: 6px;
    box-shadow:
      1px 2px 0 rgba(60, 40, 20, 0.05),
      4px 10px 22px rgba(60, 40, 20, 0.14),
      inset 0 -2px 0 color-mix(in oklab, var(--red) 7%, transparent);
    color: var(--red);
    display: inline-flex;
    font-family: var(--hand);
    font-size: 24px;
    justify-content: center;
    letter-spacing: 0.01em;
    line-height: 1;
    margin: 16px auto 0;
    min-height: 54px;
    padding: 9px 18px 11px;
    position: relative;
    text-transform: none;
    transform: rotate(-1.5deg);
    width: max-content;
    max-width: 100%;
  }

  .toolkit-more::before {
    background:
      repeating-linear-gradient(90deg,
        transparent 0,
        transparent 5px,
        rgba(255, 255, 255, 0.08) 5px,
        rgba(255, 255, 255, 0.08) 6px),
      linear-gradient(90deg,
        color-mix(in oklab, var(--tape) calc(var(--tape-a) * 90%), transparent),
        color-mix(in oklab, var(--tape-2) calc(var(--tape-b) * 100%), transparent),
        color-mix(in oklab, var(--tape) calc(var(--tape-a) * 90%), transparent));
    box-shadow: 0 1px 2px rgba(60, 40, 20, 0.12);
    content: "";
    height: 13px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: -8px;
    transform: translateX(-50%) rotate(2deg);
    width: 54px;
  }

  [data-theme="dark"] .toolkit-more {
    background:
      radial-gradient(ellipse at 20% 0%, rgba(255, 230, 180, 0.06) 0%, transparent 56%),
      linear-gradient(135deg,
        color-mix(in oklab, var(--paper-2) 88%, #6e5a30 12%) 0%,
        color-mix(in oklab, var(--paper-2) 82%, #2b1f12 18%) 100%);
    box-shadow:
      1px 2px 0 rgba(0, 0, 0, 0.32),
      4px 12px 24px rgba(0, 0, 0, 0.44),
      inset 0 -2px 0 color-mix(in oklab, var(--red) 9%, transparent);
  }

  .toolkit-more:active {
    transform: rotate(-1.5deg) scale(0.98);
  }

  .board-legend {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 18px;
    margin-left: calc(max(16px, env(safe-area-inset-left)) * -1);
    margin-right: calc(max(16px, env(safe-area-inset-right)) * -1);
    overflow-x: auto;
    padding: 2px max(16px, env(safe-area-inset-right)) 8px max(16px, env(safe-area-inset-left));
    scrollbar-width: none;
    white-space: nowrap;
  }

  .board-legend::-webkit-scrollbar {
    display: none;
  }

  .board-legend .leg {
    align-items: center;
    border: 1px solid color-mix(in oklab, var(--rule) 82%, transparent);
    border-radius: 999px;
    color: var(--ink-soft);
    flex: 0 0 auto;
    gap: 7px;
    min-height: 34px;
    padding: 0 11px;
  }

  .board-legend .sw {
    height: 10px !important;
    width: 10px !important;
  }

  .board {
    background:
      radial-gradient(circle at 22% 18%, rgba(120, 90, 50, 0.05), transparent 55%),
      radial-gradient(circle at 78% 72%, rgba(120, 90, 50, 0.04), transparent 55%),
      linear-gradient(180deg, rgba(120, 90, 50, 0.02), transparent 30%);
    border-bottom: 1px dashed var(--rule);
    border-top: 1px dashed var(--rule);
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-left: 0;
    margin-right: 0;
    min-width: 0;
    overflow: hidden;
    padding: 22px 10px 96px;
  }

  .board-wrap:not(.tools-expanded) .board {
    padding-bottom: 24px;
  }

  .board-wrap:not(.tools-expanded) .sticky:nth-child(n + 11) {
    display: none !important;
  }

  .sticky,
  .sticky.lg,
  .sticky.sm {
    align-items: center;
    border: 0;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    max-width: none;
    min-height: 96px;
    min-width: 0;
    padding: 13px 8px 12px;
    width: 100%;
  }

  .sticky:hover {
    transform: none !important;
  }

  .sticky::after {
    display: block !important;
    height: 22px;
    width: 22px;
  }

  .sticky.tape::before {
    display: block !important;
    height: 12px;
    top: -6px;
    width: 38px;
  }

  .sticky.pin::before {
    display: block !important;
    height: 11px;
    top: -5px;
    width: 11px;
  }

  .sticky .logo,
  .sticky.lg .logo,
  .sticky.sm .logo,
  .sticky .logo img,
  .sticky.lg .logo img,
  .sticky.sm .logo img,
  .sticky .logo svg,
  .sticky.lg .logo svg,
  .sticky.sm .logo svg {
    height: 28px;
    width: 28px;
  }

  .sticky .logo .fallback {
    font-size: 14px;
    height: 28px;
    width: 28px;
  }

  .sticky .name {
    font-size: 11px !important;
    line-height: 1.2;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .featured,
  .cyble-card,
  .note,
  .recruiter-cta,
  .system-card,
  .survivors,
  .copy-block,
  .aside,
  .quibble,
  .currently,
  .now {
    border-radius: 14px;
    transform: none;
  }

  .note:hover,
  .recruiter-cta:hover {
    transform: translateY(-2px);
  }

  .margin-note {
    display: none;
  }

  .four-oh-four {
    font-size: clamp(132px, 42vw, 220px);
  }

  .stamp {
    position: relative;
    right: auto;
    top: auto;
    width: max-content;
    max-width: 100%;
  }

  .signature {
    font-size: clamp(44px, 14vw, 64px) !important;
    max-width: 100%;
  }

  footer.bottom,
  footer.colophon,
  footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding-bottom: max(28px, env(safe-area-inset-bottom));
  }
}

@media (max-width: 420px) {
  .page,
  .notes-page {
    padding-left: max(14px, env(safe-area-inset-left));
    padding-right: max(14px, env(safe-area-inset-right));
  }

  .top {
    margin-left: calc(max(14px, env(safe-area-inset-left)) * -1);
    margin-right: calc(max(14px, env(safe-area-inset-right)) * -1);
    padding-left: max(14px, env(safe-area-inset-left));
    padding-right: max(14px, env(safe-area-inset-right));
  }

  .hero h1,
  .notes-hero h1 {
    font-size: clamp(48px, 17vw, 76px);
  }

  .hero h1[style] {
    font-size: clamp(38px, 13vw, 58px) !important;
  }

  .hero .col > h1:first-of-type[style] {
    font-size: clamp(52px, 17vw, 68px) !important;
  }

  .hero .col > h1:nth-of-type(2)[style] {
    font-size: clamp(38px, 11.5vw, 48px) !important;
  }

  .career-node,
  .career-node.current {
    padding-right: 64px !important;
  }

  .mobile-nav {
    gap: 2px;
    padding: 6px;
  }

  .mobile-nav a {
    font-size: 10.5px;
    min-width: 48px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .hero .lead,
  .hero-lead,
  .notes-hero .lead {
    font-size: 19px;
  }

  .sticky,
  .sticky.lg,
  .sticky.sm {
    max-width: 100%;
    min-width: 100%;
  }
}
`;

export default function ResponsiveLayoutStyles() {
  return <style dangerouslySetInnerHTML={{ __html: responsiveLayoutStyles }} />;
}
