'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

/* ──────────────────────────────────────────────
   Scroll animation fallback for browsers
   without CSS scroll-driven animation support
   ────────────────────────────────────────────── */
function useScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Skip if browser supports native scroll-driven animations
    if (
      typeof CSS !== 'undefined' &&
      CSS.supports &&
      CSS.supports('(animation-timeline: view()) and (animation-range: entry)')
    ) {
      return;
    }

    const els = document.querySelectorAll('.animate-on-scroll');

    els.forEach((el) => el.classList.add('animate-on-scroll--hidden'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-on-scroll--hidden');
            entry.target.classList.add('animate-on-scroll--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ──────────────────────────────────────────────
   HERO
   ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-shapes">
        <div className="hero__bg-shape hero__bg-shape--1" />
        <div className="hero__bg-shape hero__bg-shape--2" />
        <div className="hero__bg-shape hero__bg-shape--3" />
      </div>

      <div className="hero__content">
        <div className="hero__avatar-wrapper">
          <Image
            src="/avatar.png"
            alt="Prince Sinha — illustrated avatar"
            width={180}
            height={180}
            className="hero__avatar"
            priority
          />
          <span className="hero__avatar-doodle hero__avatar-doodle--1">✦</span>
          <span className="hero__avatar-doodle hero__avatar-doodle--2">⚡</span>
        </div>

        <h1 className="hero__name">
          Prince <span className="hero__name-accent">Sinha</span>
        </h1>

        <p className="hero__tagline">
          builds things that work, thinks about things that don't,
          and writes about both.
        </p>

        <div className="hero__chips">
          <span className="chip chip--coral">🤖 AI Architect</span>
          <span className="chip chip--blue">🔒 Cybersecurity</span>
          <span className="chip chip--yellow">⚡ Full Stack</span>
          <span className="chip chip--dark">🚀 Engineering Leader</span>
          <span className="chip">🏗️ Startup Founder</span>
        </div>

        <div className="hero__cta">
          welcome to my corner of the internet
          <span className="hero__cta-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   ME / ABOUT
   ────────────────────────────────────────────── */
function Me() {
  const cards = [
    {
      emoji: '🏢',
      title: 'Building the future of cybersecurity',
      text: 'Senior Director of Innovations & AI at Cyble — leading the charge on autonomous cybersecurity agents and agentic AI systems.',
      color: 'card--coral',
      tilt: 'card--tilt-1',
    },
    {
      emoji: '🧪',
      title: 'From monoliths to microservices',
      text: '8+ years breaking apart monoliths, building data pipelines that process 7TB daily, and making things that handle 50K requests/min without breaking a sweat.',
      color: 'card--blue',
      tilt: 'card--tilt-2',
    },
    {
      emoji: '📮',
      title: 'Postman alumni',
      text: 'Built features for Mock Servers, API design editors, and real-time events at one of the dev tools companies that actually matters.',
      color: 'card--yellow',
      tilt: 'card--tilt-3',
    },
    {
      emoji: '🛠️',
      title: 'Started from the garage',
      text: 'Co-founded UrbanHands — a service marketplace for tier 2/3 cities in India. Built the PWA, did the SEO, talked to users. The whole founder thing.',
      color: 'card--cream',
      tilt: 'card--tilt-4',
    },
  ];

  return (
    <section className="section me" id="me">
      <div className="section-label">me</div>

      <p className="me__intro animate-on-scroll">
        I&apos;m a <strong>builder</strong> who accidentally ended up leading teams.
        Somewhere between writing my first PHP script and managing 140+ dockerized
        applications on Kubernetes, I realized I care equally about{' '}
        <strong>elegant code</strong> and <strong>the humans writing it</strong>.
        <br /><br />
        Currently in Bengaluru, building AI-powered cybersecurity systems at Cyble.
        Previously shipped features at Postman, scaled solar energy platforms,
        and ran a startup that taught me everything a CS degree didn&apos;t.
      </p>

      <div className="me__cards stagger-children">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`card ${card.color} ${card.tilt} animate-on-scroll`}
          >
            <span className="me__card-emoji">{card.emoji}</span>
            <h3 className="me__card-title">{card.title}</h3>
            <p className="me__card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   WRITINGS
   ────────────────────────────────────────────── */
function Writings() {
  const posts = [
    {
      title: 'Good prompts get you 90% there. Good evals are what really matter.',
      excerpt:
        'Everyone\'s obsessed with prompt engineering. Almost nobody talks about what happens after the LLM responds. That\'s where the real work begins.',
      date: 'Coming soon',
      tags: ['AI', 'Engineering'],
      color: 'card--yellow',
      tilt: 'card--tilt-1',
    },
    {
      title: 'What breaking a monolith actually feels like',
      excerpt:
        'Spoiler: it\'s less "clean architecture" and more "controlled demolition while the building is occupied."',
      date: 'Coming soon',
      tags: ['Backend', 'Architecture'],
      color: 'card--blue',
      tilt: 'card--tilt-2',
    },
    {
      title: 'The uncomfortable truth about engineering management',
      excerpt:
        'You stop writing code. You start writing docs nobody reads. And somehow, this is supposed to be a promotion.',
      date: 'Coming soon',
      tags: ['Leadership', 'Observations'],
      color: 'card--coral',
      tilt: 'card--tilt-3',
    },
  ];

  return (
    <section className="section writings" id="writings">
      <div className="section-label">writings</div>

      <div className="writings__grid stagger-children">
        {posts.map((post, i) => (
          <div
            key={i}
            className={`card writing-card ${post.color} ${post.tilt} animate-on-scroll`}
          >
            <div className="writing-card__meta">
              <span className="writing-card__date">{post.date}</span>
              <span className="chip" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                ☕ 5 min read
              </span>
            </div>
            <h3 className="writing-card__title">{post.title}</h3>
            <p className="writing-card__excerpt">{post.excerpt}</p>
            <div className="writing-card__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="writing-card__tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="writings__coming-soon animate-on-scroll">
        <p className="writings__coming-soon-text">
          ✍️ more words incoming... stay tuned
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CASUAL FINDINGS (DARK SECTION)
   ────────────────────────────────────────────── */
function Findings() {
  const findings = [
    {
      text: 'The best engineers I\'ve worked with all share one trait: they ask "why" before "how." The mediocre ones jump straight to implementation. The great ones sit with the problem until it reveals itself.',
      source: 'observation, 3am debugging session',
    },
    {
      text: 'Every startup has two origin stories — the one on the pitch deck and the one involving a broken laptop, an argument with a co-founder, and a chai stall at 2am.',
      source: 'lived experience, UrbanHands era',
    },
    {
      text: 'AI won\'t replace engineers. But <em>engineers who understand AI</em> will replace engineers who don\'t. This isn\'t a hot take — it\'s just thermodynamics.',
      source: 'thought, while building agentic systems',
    },
    {
      text: 'Dockerizing 140 applications sounds impressive on a resume. Living through it sounds like a horror movie with very specific YAML-based villains.',
      source: 'war story, Cyble',
    },
  ];

  return (
    <section className="findings" id="findings">
      <div className="findings__inner">
        <div className="section-label">case files</div>

        <div className="findings__grid stagger-children">
          {findings.map((f, i) => (
            <div key={i} className="finding-card animate-on-scroll">
              <span className="finding-card__pin">📌</span>
              <p
                className="finding-card__text"
                dangerouslySetInnerHTML={{ __html: f.text }}
              />
              <p className="finding-card__source">— {f.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   WORK
   ────────────────────────────────────────────── */
function Work() {
  const roles = [
    {
      title: 'Senior Director of Innovations & AI',
      company: 'Cyble Inc.',
      period: 'Jun 2025 – Present',
      current: true,
      highlights: [
        'Leading innovation strategy at the intersection of AI, cybersecurity, and automation',
        'Building next-gen ecosystem of intelligent, autonomous cybersecurity agents',
      ],
    },
    {
      title: 'Director of Engineering',
      company: 'Cyble Inc.',
      period: 'Apr 2024 – Jul 2025',
      highlights: [
        'Built a data pipeline processing 7TB daily using Spark, GCS, Pub/Sub, and Elasticsearch',
        'Created an internal developer platform with CI/CD, auto-deployment, and debugging tools',
      ],
    },
    {
      title: 'Engineering Manager',
      company: 'Cyble Inc.',
      period: 'May 2022 – Apr 2024',
      highlights: [
        'Built vulnerability notification system — 5M messages/hour, 10K notifications/sec at peak',
        'IAM service handling 50K requests/min for central auth',
        'Dockerized 140+ applications and deployed on Kubernetes',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Postman',
      period: 'May 2020 – Jul 2021',
      highlights: [
        'Built features for Mock Servers on Artemis (Postman on the web)',
        'Added real-time events support and workspace migration features',
        'Decreased latency for API schema sync to GitHub by 100ms',
      ],
    },
    {
      title: 'Full-stack Developer',
      company: 'Solar.com / Pick My Solar',
      period: 'Nov 2018 – Apr 2020',
      highlights: [
        'Designed architecture reducing API response time from 5000ms to 250ms',
        'Built incentive calculation microservice — response time from 2s to 200ms with Redis caching',
      ],
    },
    {
      title: 'Co-Founder & Developer',
      company: 'UrbanHands',
      period: 'Jan 2016 – Nov 2018',
      highlights: [
        'Built PWA for service marketplace targeting tier 2/3 Indian cities',
        'Grew to 2,500 organic monthly visitors through hands-on SEO',
      ],
    },
  ];

  const achievements = [
    {
      number: '5M+',
      label: 'messages/hour',
      desc: 'Vulnerability notification system built with Kafka, Cassandra & TimescaleDB',
      color: 'card--coral',
      tilt: 'card--tilt-1',
    },
    {
      number: '7TB',
      label: 'data processed daily',
      desc: 'Pipeline using Spark, GCS, Pub/Sub, and Elasticsearch',
      color: 'card--blue',
      tilt: 'card--tilt-2',
    },
    {
      number: '140+',
      label: 'apps dockerized',
      desc: 'Containerized and deployed on Kubernetes with Devtron',
      color: 'card--yellow',
      tilt: 'card--tilt-3',
    },
    {
      number: '50K',
      label: 'requests/min',
      desc: 'IAM service for centralized authentication & authorization',
      color: 'card--cream',
      tilt: 'card--tilt-4',
    },
  ];

  return (
    <section className="section work" id="work">
      <div className="section-label">work</div>

      <div className="work__timeline">
        {roles.map((role, i) => (
          <div
            key={i}
            className={`work__role ${role.current ? 'work__role--current' : ''} animate-on-scroll`}
          >
            <div className="work__role-header">
              <span className="work__role-title">{role.title}</span>
              <span className="work__role-company">@ {role.company}</span>
            </div>
            <div className="work__role-period">{role.period}</div>
            {role.highlights && (
              <ul className="work__role-highlights">
                {role.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="section-label" style={{ marginTop: 0 }}>numbers that stuck</div>
      <div className="work__achievements stagger-children">
        {achievements.map((a, i) => (
          <div
            key={i}
            className={`card achievement-card ${a.color} ${a.tilt} animate-on-scroll`}
          >
            <div className="achievement-card__number">{a.number}</div>
            <div className="achievement-card__label">{a.label}</div>
            <p className="achievement-card__desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CONTACT
   ────────────────────────────────────────────── */
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-label">say hello</div>

      <div className="contact__card animate-on-scroll">
        <h2 className="contact__heading">Let&apos;s talk 👋</h2>
        <p className="contact__text">
          Whether it&apos;s about AI, engineering leadership, startup war stories,
          or you just want to argue about the best way to structure a Kafka topic —
          I&apos;m here for it.
        </p>

        <div className="contact__links">
          <a
            href="mailto:vishal.prince30@gmail.com"
            className="btn"
          >
            ✉️ Email me
          </a>
          <a
            href="https://www.linkedin.com/in/princevishal/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/prince-vishal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            🐙 GitHub
          </a>
        </div>

        <p className="contact__closing">
          no recruiters were harmed in the making of this website ✌️
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE
   ────────────────────────────────────────────── */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Me />
      <Writings />
      <Findings />
      <Work />
      <Contact />

      <footer className="footer">
        <p>
          built with questionable amounts of chai & Next.js •{' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
