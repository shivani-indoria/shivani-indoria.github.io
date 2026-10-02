# Shivani: Portfolio

Portfolio of Shivani, QA Lead Engineer and Accessibility Specialist with 14 years across web and mobile.

## Live website

**[shivani-indoria.github.io](https://shivani-indoria.github.io/)**

## Design

The page is laid out like a transit wayfinding system: black sign panels carry the contrast, wayfinding yellow marks the way (signs, arrows, the "You are here" marker), and reading text stays achromatic. The full design system is recorded in [DESIGN.md](DESIGN.md); product context is in [PRODUCT.md](PRODUCT.md).

## Accessibility

The site itself is part of the portfolio, so it is held to the standard it describes:

- Built to **WCAG 2.2 Level AA**
- Works fully by keyboard: skip link, visible focus on every control, headings never hidden under the sticky header
- Reflows without sideways scrolling from 320px wide, including with text enlarged to 200% in browser settings
- Nothing moves on its own; the reduced-motion setting is respected
- Light and dark themes follow the system setting

## Tech stack

- Static HTML, CSS and vanilla JavaScript; no build step or dependencies
- Layout breakpoints are CSS container queries in `rem`, so layouts follow the reader's text size
- Self-hosted variable fonts: [Overpass](https://github.com/RedHatOfficial/Overpass) and [Atkinson Hyperlegible Next](https://github.com/googlefonts/atkinson-hyperlegible-next)
- Deployed with GitHub Pages

## Licence

- **Code** (HTML markup, CSS, JavaScript): MIT, see [LICENSE](LICENSE).
- **Personal content** (text about Shivani and her work, her name, likeness and photographs, and site artwork made from them): © 2026 Shivani, all rights reserved. Not covered by the MIT licence.
- **Fonts**: SIL Open Font License 1.1, see `assets/fonts/`.
