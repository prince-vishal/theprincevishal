'use client';

export default function ThemeToggle() {
  function toggleTheme(event) {
    const button = event.currentTarget;
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';

    button.classList.remove('flipping');
    void button.offsetWidth;
    button.classList.add('flipping');

    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  }

  return (
    <button className="theme-toggle" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
      <svg className="icon-moon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9.7a5 5 0 0 1-6.7-6.7A5.5 5.5 0 1 0 13.5 9.7z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <circle cx="8" cy="8" r="2.8" fill="currentColor" />
        <path d="M8 1.2v1.8M8 13v1.8M1.2 8H3M13 8h1.8M3.1 3.1l1.3 1.3M11.6 11.6l1.3 1.3M3.1 12.9l1.3-1.3M11.6 4.4l1.3-1.3" />
      </svg>
      <span className="lab-light">working late?</span>
      <span className="lab-dark">good morning?</span>
      <span className="splat" aria-hidden="true" />
    </button>
  );
}
