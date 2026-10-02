---
name: Shivani
description: A QA and accessibility career signposted like a transit wayfinding system.
colors:
  signal: "#ffc800"
  on-signal: "#121212"
  sign: "#121212"
  sign-edge: "#121212"
  on-sign: "#ffffff"
  on-sign-muted: "#d2d2cc"
  ground: "#f1f1ee"
  surface: "#ffffff"
  ink: "#121212"
  ink-muted: "#45453f"
  hairline: "#cfcfc9"
  rule-on-sign: "#45453f"
  portrait-ground: "#2a2a28"
  signal-hover: "#ffd740"
  sign-dark: "#000000"
  sign-edge-dark: "#5a5a54"
  on-sign-muted-dark: "#c9c9c3"
  ground-dark: "#262623"
  surface-dark: "#2e2e2b"
  ink-dark: "#f1f1ee"
  ink-muted-dark: "#c8c8c1"
  hairline-dark: "#4a4a45"
typography:
  display:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 1.6rem + 5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "0"
  display-exit:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.5rem + 5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.03em"
  sign-line:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 0.95rem + 1.3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "0.03em"
  title:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Atkinson Hyperlegible Next', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "'Atkinson Hyperlegible Next', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "'Atkinson Hyperlegible Next', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  figures:
    fontFamily: "Overpass, 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  sign: "3px"
  station: "50%"
spacing:
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 3rem)"
  sign-inset: "clamp(1.25rem, 0.5rem + 3.5vw, 3.5rem)"
  stack-sm: "0.75rem"
  stack-md: "1.5rem"
  stack-lg: "2.5rem"
components:
  sign-button:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.sign}"
    padding: "0.8rem 1.25rem"
    height: "3rem"
  sign-button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.on-sign}"
    rounded: "{rounded.sign}"
    padding: "0.8rem 1.25rem"
    height: "3rem"
  sign-button-quiet-hover:
    backgroundColor: "{colors.on-sign}"
    textColor: "{colors.sign}"
  sign-button-large:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.sign}"
    padding: "1rem 1.35rem"
  sign-heading:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.on-sign}"
    typography: "{typography.headline}"
    rounded: "{rounded.sign}"
    padding: "0.55em 0.75em 0.45em"
  directory-header:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.on-sign}"
    height: "4rem"
  directory-link:
    textColor: "{colors.on-sign}"
    typography: "{typography.label}"
    padding: "0 0.9rem"
  directory-link-current:
    textColor: "{colors.signal}"
  here-marker:
    backgroundColor: "{colors.signal}"
    height: "5px"
  proof-row:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.on-sign}"
    typography: "{typography.title-sm}"
    padding: "0.7rem 2.5rem 0.8rem 0"
  plaque:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    padding: "1.25rem"
  menu-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.on-sign}"
    rounded: "{rounded.sign}"
    padding: "0.5rem 0.75rem"
    height: "2.75rem"
  menu-toggle-open:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
---

# Design System: Shivani

## Overview

**Creative North Star: "The Wayfinding System"**

The page reads like the signage of an international transit hub: black sign panels on a pale concourse ground, one wayfinding yellow that points, and reading text that stays achromatic. Every section is a destination announced by a sign band; every claim in the arrival sign points to where its evidence lives. The system is built to be read in seconds, under pressure, by anyone, which is the owner's own discipline made visible.

Density is calm and generous: wide section bands, reading measures held to 44-65ch, and a clear split between sign lettering (Overpass, heavy, lightly tracked) and reading text (Atkinson Hyperlegible Next). Depth is carried entirely by contrast between ground and sign, never by shadow. Motion is directional and brief: arrows nudge toward where they point, the You-are-here bar glides to the current destination, and nothing moves on its own.

Light and dark themes follow `prefers-color-scheme`. In dark, the ground drops to a warm charcoal, signs go to true black and gain a visible edge so panels still separate from the ground; yellow and its pairings stay fixed.

**Key Characteristics:**
- Black sign panels carry the high-contrast load; the ground stays quiet.
- Wayfinding yellow at full strength, only on signs, arrows and markers.
- Overpass for sign lettering and all figures (tabular, lining); Atkinson Hyperlegible Next for reading.
- Authored SVG arrows and pictograms in one square-capped, mitred stroke family.
- 5px sign-post rules mark arrival, current location, and exits.
- A You-are-here marker announced as `aria-current="location"`.
- No shadows, no looping motion, reduced motion honored.

## Colors

A strict three-part palette: achromatic ground and ink, black signs, and one owned yellow.

### Primary
- **Wayfinding Yellow** (signal): the only hue in the system. Fills primary sign buttons, the skip link, the open menu toggle, text selection, and route-branch station dots; strokes arrows and pictograms inside signs; colors sign text that marks the way (the arrival title line, the current directory destination, the wordmark on arrival, copy confirmation); draws every 5px sign-post rule and the You-are-here bar. Always paired with Sign Black text (on-signal) when it is a fill.

### Secondary
- **Sign Black** (sign / ink, `#121212` in light; sign becomes true black in dark): the panel color for the header, arrival sign, section sign bands, contact exit, and footer. The same black is the reading ink on the light ground.
- **Sign Edge** (sign-edge): matches the panel in light, so edges vanish; in dark it lifts to a mid grey so black panels stay distinct from the charcoal ground.

### Neutral
- **Concourse Ground** (ground): the page floor and the plaque fill.
- **Quiet Surface** (surface): white bands that alternate with the ground (the credentials band) to pace the scroll.
- **Reading Ink** (ink) and **Muted Ink** (ink-muted): body text, and provenance lines, scope lines, and places.
- **Hairline** (hairline): 1px dividers between legend rows on the ground.
- **On-Sign White** (on-sign) and **On-Sign Muted** (on-sign-muted): lettering and secondary copy inside sign panels.
- **Rule on Sign** (rule-on-sign): 1px dividers inside black panels (proof-board rows, mobile directory rows, the footer rule).
- **Portrait Ground** (portrait-ground): the fill behind the arrival portrait while it loads or letterboxes.
- **Signal Hover** (signal-hover): the lifted yellow a filled sign button takes on hover.

### Named Rules
**The Yellow Points Rule.** Yellow is for the way, not the words. It appears on signs, arrows, markers and rules; it is never reading text on the light ground. Yellow text is allowed only inside black sign panels.

**The Signs Carry Contrast Rule.** High contrast lives in the sign panels. Reading areas stay achromatic ink on ground, so the page's loudest moments are always the ones that orient.

**The No Highlight Rule.** Reading text is never highlighted. Proof is carried by plain figures set in Overpass (tabular), not by yellow marks; yellow stays on signs.

## Typography

**Display Font:** Overpass (with Atkinson Hyperlegible Next, system-ui)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, -apple-system, Segoe UI)

**Loading:** both faces are self-hosted variable woff2 files (latin subset) in `assets/fonts/`, with their SIL OFL licences beside them, and load with `font-display: swap` and no preload (measured fastest first paint on a throttled phone).

**Character:** Overpass descends from highway signage lettering and does the pointing: names, sign bands, directory labels, and every number. Atkinson Hyperlegible Next, designed for low-vision readers, does the reading. The pairing is the brief made literal.

### Hierarchy
- **Display** (900, min(clamp 3.25-6rem, 16vw), 0.92): the name on the arrival sign, poster scale, flush-left. The 16vw cap keeps enlarged text inside the sign on narrow screens. On short laptop screens it steps down to clamp(3rem, 1rem + 4vw, 4.5rem) to keep actions above the fold.
- **Display Exit** (900, clamp 2.75-5.5rem, 0.95, tracked -0.025em): the contact sign only. The one tightly tracked sign line in the system.
- **Headline** (800, min(clamp 1.75-2.75rem, 11vw), 1.1, tracked 0.03em): section sign bands; long words may break rather than overflow.
- **Sign Line** (800, clamp 1.25-2rem, 1.15, tracked 0.03em): the second line of the arrival sign, in yellow under a 5px yellow rule, capped at 24ch.
- **Title** (800, 1.75rem, 1.1): project names and route-stop roles.
- **Title Small** (800, 1.25rem, 1.3): proof-row names, plaque names, stop dates.
- **Lede** (400, 1.25rem, 1.5-1.55): branch ledes, arrival intro, exit lede; 44-60ch.
- **Body** (400, 1.0625rem, 1.6): running text; stop notes cap at 65ch.
- **Body Small** (400, 0.9375rem): provenance, scope, issuers, proof sources.
- **Label** (700-800, 0.9375rem, tracked 0.02em): directory links, legend terms, copy button, status.

### Named Rules
**The Tabular Figures Rule.** Every date, range, and number is set in Overpass with tabular, lining figures, so dates on the route and in provenance lines align and read as sign data.

**The Two Voices Rule.** Overpass signs, Atkinson reads. Sign lettering never runs as paragraphs; reading text never stands in for a sign.

## Layout

A single 80rem column (`wrap`) with a fluid gutter. Sections are full-width bands with fluid vertical padding (the section spacing token); the credentials band switches to the white surface to pace the scroll.

The arrival sign is a two-column grid (1.45fr name side, 1fr portrait) where the name, proof directory, and intro/actions stack as one continuous black panel beside a full-height portrait. Below 52rem it becomes one column in the order name, portrait (16:9), proof, actions, intro. The proof directory is a two-column board of rows split by thin dividers, one column on phones.

The fork sets the two disciplines side by side (Accessibility left, QA leadership right) with a fluid gap, stacking below 60rem, when both headings' arrows turn to point down the page. The career route is a vertical line with stations; each stop is a two-column grid (22rem meta, notes) that stacks below 60rem. Credentials use an auto-fit grid (min 17rem); the site notes use auto-fit (min 26rem). The exit is a 1.1fr / 1fr grid, stacking below 52rem.

**Breakpoints follow the reader's text size.** Width breakpoints are container queries in rem (`main` is the `page` container, the header is the `header` container), not viewport media queries, so a visitor who enlarges text in browser settings gets the stacked layouts and the menu instead of sideways scrolling. Panel insets and the route's line geometry use px floors so enlarged text keeps its measure. The only viewport media query is the short-laptop height rule.

The header is sticky with a 64px minimum; its rows grow with enlarged text and wrap if needed. `main.js` keeps the scroll padding at the header's real height plus 24px, so anchored headings are never hidden. Directory nav collapses to a disclosure below 56rem of header width.

## Elevation & Depth

The system is flat. No element carries a box-shadow. Depth comes from the figure-ground contrast of black sign panels against the pale ground, from alternating ground and surface bands, and from rules: 5px sign-post rules for orientation, 3px ink rules above projects and legends, 1px hairlines between legend rows.

### Named Rules
**The Panel Not Shadow Rule.** Separation is made by panel color and rules, never by shadow or blur. In dark mode, where black signs meet a charcoal ground, the sign edge supplies the separation.

**The Sign-Post Rule.** A 5px bar marks orientation: the yellow rule under the arrival name and under the exit heading, the You-are-here bar, the wordmark's arrival underline, the ink top rule on credential plaques, and the ink ring of a route station. Content rules are 3px; dividers are 1px.

## Shapes

Corners are nearly square: panels, sign bands, buttons, the portrait, and credential tiles share a 3px radius that reads as a manufactured sign plate, not a rounded card. Where a panel is split across grid cells (the arrival sign and its portrait), only the outer corners take the radius. Circles are reserved for the route: stations, branch stops, and the station ring. The branch line leaves the main route with one 1.25rem curve, the only large radius in the system.

## Components

### Buttons
Arrow signs: heavy Overpass lettering with an arrow that points where the link goes.
- **Shape:** sign plate corners (3px), 2px border, minimum height 3rem.
- **Primary:** yellow fill, black lettering, 0.8rem vertical and clamp(0.75rem, 4vw, 1.25rem) horizontal padding, arrow trailing; hover lifts the fill to signal-hover.
- **Quiet:** transparent with an on-sign outline, used inside black panels; hover inverts to a white fill with black lettering.
- **Large:** the email sign in the exit, fluid 1.0625-1.375rem type, wraps long addresses.
- **Hover / Focus:** no lift; the arrow nudges 4px along its own direction with the expo ease-out. Focus is a 3px outline, ink on the ground, yellow inside signs.

### Sign Heading
Section titles are sign bands: a black 3px-cornered panel with headline lettering in white and a yellow arrow or pictogram leading. The fork headings point outward (left for Accessibility, right for QA leadership) and turn down when stacked.

### Navigation
- **Directory:** a black sticky header with the wordmark left and destinations right, each in label type with a small yellow down arrow (Contact points right, as the exit).
- **Current location:** the destination crossing a reading line 40% down the viewport gets `aria-current="location"`, turns yellow, and a single 5px yellow bar glides under it. On arrival the wordmark is the current location and draws its own yellow underline.
- **Hover:** underline in yellow; the arrow nudges 3px.
- **Mobile:** below 56rem a bordered Menu toggle (yellow fill when open) discloses a stacked list of 3.25rem rows; the current row carries a small yellow "You are here" tag instead of the bar. Closes on Escape, on choice, or when focus leaves.

### Proof Directory
A directory board inside the arrival sign: each row names a claim (Title Small) with its source in muted small text and a yellow down arrow at the right, linking to the evidence further down the page. Hover underlines the name in yellow and nudges the arrow.

### Route
The career as a transit line: a 6px ink line with 1.5rem stations (ground fill, 5px ink ring). Each stop leads with tabular dates, then the role and the place. A branch line curves off the main route for the onsite years, with yellow-filled, ink-ringed stop dots for each country.

### Credential Plaques
Ground-filled plates with a 5px ink top rule, a 4.5rem credential mark, the credential name, and its issuer in muted small text. The mark is an authored pictogram in the arrow/pictogram stroke family, yellow on a black 3px-cornered sign tile (browser window with check for Trusted Tester for Web, standards document with the access figure for AODA training, magnifier with check for ISTQB). No third-party logos or government seals: issuer marks need the issuer's permission. The official ISTQB certified-tester logo, issued by her national board, may replace its pictogram unaltered.

### Legend
A definition list under each branch: a 3px ink top rule, rows of Overpass terms (8.5rem column) and reading-text values, separated by hairlines.


## Do's and Don'ts

### Do:
- **Do** keep yellow to signs, arrows, markers and rules; pair any yellow fill with Sign Black text.
- **Do** announce new destinations as sign bands with a yellow arrow or a pictogram drawn in the shared stroke family (square caps, mitred joins, 2.25-2.75 stroke on a 24 grid).
- **Do** set every date and number in Overpass with tabular, lining figures.
- **Do** switch the focus ring to yellow inside black sign panels and keep it ink on the ground.
- **Do** make motion directional and single-shot: arrows nudge 3-4px toward their target; the marker glides; use the expo ease-out.
- **Do** seam every claim to its provenance (employer, dates, issuer) in a muted line directly under it.
- **Do** keep dark mode working by tokens: signs to true black with a visible edge, ground to charcoal, yellow unchanged.

### Don't:
- **Don't** set yellow as reading text on the light ground or the white surface.
- **Don't** add shadows, blur, or translucency to separate panels; use sign color, surface bands, and rules.
- **Don't** loop, autoplay, or animate anything that does not answer a hover, focus, or scroll position.
- **Don't** lift non-link elements on hover.
- **Don't** round sign plates beyond 3px; keep circles for route stations.
- **Don't** set paragraphs in Overpass or sign lines in Atkinson.
- **Don't** add small labels above headings; the sign band is the heading.
