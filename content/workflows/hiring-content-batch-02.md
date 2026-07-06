# Hiring content batch 02

Goal: make Prince easier to evaluate for senior AI security, SecOps platform,
principal engineering, Head of Engineering, and early-stage CTO roles.

## Publishing workflow

1. Start with a question a recruiter, founder, CISO, or engineering leader might
   genuinely ask during evaluation.
2. Assign one primary search phrase and one concrete hiring signal to the post.
3. Research primary sources before drafting. Prefer standards bodies, official
   documentation, and maintainers over commentary.
4. Write from engineering judgment, not borrowed certainty. Separate sourced
   facts from recommendations and first-person opinion.
5. Include an operating model, architecture, scorecard, or checklist that a
   reader can use.
6. Link to two or more relevant notes already on the site.
7. End with source notes and a restrained recruiter path.
8. Run `npm run lint`, `npm run build`, and `git diff --check`.
9. Confirm future-dated posts are absent from `out/sitemap.xml`.
10. The daily GitHub Actions build publishes a completed post when its `date`
    arrives.

## Editorial batch

| No. | Publish | Primary phrase | Hiring signal | Article |
| --- | --- | --- | --- | --- |
| 034 | 2026-07-07 | AI SOC metrics | product and operating judgment | Measuring whether an AI SOC is actually working |
| 035 | 2026-07-09 | AI security reference architecture | platform architecture | A reference architecture for an AI-native security platform |
| 036 | 2026-07-11 | AI agent red teaming | security engineering | Red teaming autonomous security agents |
| 037 | 2026-07-13 | multi-tenant AI security SaaS | SaaS and isolation architecture | Multi-tenant architecture for AI security platforms |
| 038 | 2026-07-15 | AI SOC evaluation dataset | evaluation discipline | Building an evaluation dataset for AI SOC agents |
| 039 | 2026-07-17 | build vs buy agentic SOC | executive product judgment | Build versus buy for agentic SOC capabilities |
| 040 | 2026-07-19 | SOC platform migration | transformation leadership | Migrating a SOC without breaking the analysts |
| 041 | 2026-07-21 | AI cybersecurity governance | governance and delivery | An operating model for AI governance in cybersecurity |
| 042 | 2026-07-23 | AI agent cost engineering | platform economics | Cost engineering for AI security agents |
| 043 | 2026-07-25 | secure RAG threat intelligence | retrieval and data security | Secure RAG for threat intelligence systems |

## Quality gate

- No unsupported performance, market, or personal achievement claims.
- No invented case study, customer, benchmark, or search-volume number.
- At least three primary sources per article.
- The title, description, first paragraph, and one heading naturally support the
  primary phrase.
- Every article answers what to build, how it fails, how to measure it, and what
  a technical leader should decide.
- Scheduled content remains unavailable by URL and absent from the sitemap until
  its publication date.
