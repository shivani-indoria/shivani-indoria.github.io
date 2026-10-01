# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: hiring managers and recruiters** filling QA lead or accessibility roles. They arrive from LinkedIn, a résumé link, or a referral, usually scanning quickly to decide whether to shortlist Shivani or reach out.
- **Secondary: teams looking for contract or consulting accessibility work** (audits, WCAG compliance testing, assistive-technology validation). They need to trust her depth before sending an inquiry.

Full-time roles come first; contract and consulting inquiries are welcome but secondary.

## Product Purpose

A single-page personal portfolio for Shivani Indoria, a QA Lead Engineer and Accessibility Specialist based in Bengaluru, India, with 13+ years across web and mobile. It exists to turn a quick visit into contact: a recruiter or hiring manager messaging her on LinkedIn or by email, or a team asking about an accessibility engagement.

Success means a visitor leaves convinced of two things at once, senior QA leadership and hands-on accessibility expertise, and knows how to reach her.

## Positioning

Equal weight on both halves of the title: **QA Lead Engineer & Accessibility Specialist.** Neither half is subordinate.

What a neighbouring candidate can't copy:
- 12 years at Samsung R&D Institute India leading QA on Galaxy devices and services (Samsung DeX, Samsung Cloud), including large team management and onsite work in England, Vietnam, and South Korea.
- Accessibility testing lead on shipped education and digital-media platforms at Photon (Follett Destiny Discover, Axis 360), across web, iOS, and Android.
- Formal credentials: DHS Trusted Tester for Web (Section 508), AODA compliance training, ISTQB CTFL.
- The portfolio site is itself accessible, so it works as a live sample of her standards.

## Operating Context

- Visitors usually come from LinkedIn or a résumé and give the page a short scan before deciding whether to read further.
- Some visitors, especially accessibility-minded hiring managers, will judge the site itself: keyboard navigation, screen-reader output, contrast, focus handling, reduced motion.
- Contact happens off-site: LinkedIn (`linkedin.com/in/shivaniindoria`), GitHub (`github.com/shivani-indoria`), and email (`shivani.indoria@outlook.com`). There is no form or backend.

## Capabilities and Constraints

- Static site: `index.html`, `assets/css/style.css`, `assets/js/main.js`, and `manifest.json`, deployed on GitHub Pages at `shivani-indoria.github.io`. No build step, no framework, no dependencies.
- Sections: About, Experience, Skills, Projects, Certifications, Contact.
- Contact is links only (LinkedIn, GitHub, mailto). No form handling.
- **Undecided:** current employment status and availability are not stated on the site. Don't add "currently at…" or "open to work" claims without confirmation.

## Brand Commitments

- Name as displayed: "Shivani" (full name Shivani Indoria in handles and email).
- Title: "QA Lead Engineer & Accessibility Specialist".
- Tagline in use: "Building Accessible Digital Experiences".
- Voice: first person, professional, plain, and warm ("I'm always open to discussions around accessibility, inclusive design, and quality engineering.").
- Client and employer names may be shown publicly: Photon, Samsung R&D Institute India, Follett (Destiny Discover), Axis 360, Samsung DeX, Samsung Cloud.

## Evidence on Hand

- Headshot: `assets/images/portrait.jpg` (1086 × 1448, with WebP versions), supplied 2026-10-01. The older `assets/images/profile.jpeg` (500 × 500) is no longer used by the site.
- Certification badges: none in use. The DHS seal and Trusted Tester mark need DHS permission, AODA has no official logo, and the ISTQB certified-tester logo must be the unaltered file from her national board. The site shows authored pictograms instead.
- Work history with dates: Photon (Aug 2021 to Jan 2024), Samsung R&D Institute India (Aug 2008 to Mar 2020), international onsite work (2014 to 2018).
- Three project write-ups: Follett Destiny Discover (2023 to 2024), Axis 360 (2022 to 2024), Samsung DeX (2018 to 2020).
- **Approved metrics, and the only ones:** "13+ years of experience" and "reducing test cycles by 35%" (Axis 360).
- **Absent, never fabricate:** testimonials, recommendations, client logos beyond named text, extra metrics or percentages, audit reports, case-study artifacts, publications, or speaking engagements.

## Product Principles

1. **The site is the proof.** Every change must hold or raise WCAG 2.2 AA conformance. An accessibility failure here costs more credibility than any visual gain.
2. **Two halves, one person.** Present QA leadership and accessibility expertise as equals. Neither is a footnote to the other.
3. **Fast to judge, deep on demand.** A recruiter's quick scan should land the title, experience, and a way to reach her. Project detail and tooling can reward a closer read.
4. **Only true claims.** Use the existing facts, dates, and approved metrics. Leave a gap empty rather than filling it with invention.
5. **Contact is the goal.** Every path through the page should end at an easy way to reach her.

## Accessibility & Inclusion

- Required standard: **WCAG 2.2 Level AA** for the whole site.
- Must work fully by keyboard with visible focus, a skip link, and focus not hidden under the sticky header.
- Must read correctly in NVDA, JAWS, VoiceOver, and TalkBack. These are the tools she tests with, so expect evaluators to use them too.
- Motion must honour `prefers-reduced-motion`. Contrast must meet AA for text and non-text UI in every theme the site ships.
