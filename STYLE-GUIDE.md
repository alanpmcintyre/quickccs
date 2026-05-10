# QuickCCS Style Guide

Design tokens, component patterns, and visual rules extracted from `index.html`.

---

## Colours

### Brand / Primary

| Token | Value | Usage |
|---|---|---|
| Primary | `#185FA5` | Buttons, links, progress bar, active borders, logo bg, print accents |
| Primary dark | `#0C447C` | Hover state for primary button, pill text |
| Primary light | `#E6F1FB` | Pill backgrounds, selected option/checkbox bg, tag bg |

### Text

| Token | Value | Usage |
|---|---|---|
| Text primary | `#111` | Headings, question text, option labels, most body copy |
| Text secondary | `#666` | Sub-labels, field labels, descriptions, captions |
| Text muted | `#444` | Body copy on light backgrounds, overview descriptions |
| Text faint | `#555` | Patient bar age/DOB, bullet list items |
| Text hint | `#888` | Step counter |
| Text disabled | `#999` | Version badge |

### Surfaces

| Token | Value | Usage |
|---|---|---|
| Page background | `#f5f5f5` | `<body>` background, inactive section backgrounds |
| Card / white | `white` | Cards (`.lcard`, `.qcard`, `.ocard`), option buttons, inputs |
| Header bg | `#f0f0f0` | Fixed header bar |
| Patient bar bg | `white` | Fixed patient bar |

### Borders

| Token | Value | Usage |
|---|---|---|
| Default border | `rgba(0,0,0,0.12)` | Cards, patient bar bottom |
| Input border | `rgba(0,0,0,0.2)` | Inputs, unselected options |
| Divider | `rgba(0,0,0,0.1)` | `<hr>` dividers inside cards, dropdown dividers |
| Header border | `rgba(0,0,0,0.15)` | Fixed header bottom |

### Semantic — Alert Boxes (`.abox`)

| Class | Background | Text | Border |
|---|---|---|---|
| `.adanger` | `#FCEBEB` | `#791F1F` | `#F09595` |
| `.awarn` | `#FAEEDA` | `#633806` | `#EF9F27` |
| `.aok` | `#EAF3DE` | `#27500A` | `#97C459` |

### Semantic — Inline / Misc

| Token | Value | Usage |
|---|---|---|
| Error red | `#A32D2D` | Required asterisk, input error border, exclusion list dot |
| Amber accent | `#EF9F27` | Warn border, `.ritem.warn` left-bar |
| Green | `#97C459` | Feedback button bg, `.aok` border |
| Green dark | `#83b044` | Feedback button hover |
| Dark tooltip | `#333` | Tooltip background (`abbr.ctip`) |

---

## Typography

### Typeface

- **Screen:** `system-ui, sans-serif` — all UI elements
- **Print:** `Georgia, serif` — body text on print; `system-ui, sans-serif` retained for header/footer

### Size Scale

| Size | Used for |
|---|---|
| 11px | Section labels (`.slabel`, `.oseclabel`, `.rslabel`), overview tag (`.otag`), patient bar pill, image captions (`.vizsrc`) |
| 12px | Field labels, checkbox indicator, error messages, step counter (`.scount`), image captions (`.vizcap`) |
| 13px | Sub-text (`.lsub`, `.qsub`, `.rsub`, `.odesc`), dropdown items, small body copy |
| 14px | Standard body copy, buttons, result items (`.ritem`), option text on mobile |
| 15px | Option and checkbox labels (`.opt`, `.cbopt`), overview list items, input fields |
| 16px | Question text on mobile (`≤600px`) |
| 17px | Question text on desktop (`.qtext`) |
| 20px | Card titles (`.ltitle`, `.dhtitle`, `.rtitle`) |
| 21px | Overview title (`.otitle`) |

### Font Weights

| Weight | Used for |
|---|---|
| 400 | Normal body copy, sub-text |
| 500 | Medium — user button, field labels, overview tag, section labels, nav pill |
| 600 | Semibold — headings, question text, card titles, buttons, brand name |
| 700 | Bold — print headings only |

### Section Labels

Uppercase, `letter-spacing: 0.04–0.05em`, `font-weight: 500–600`, `color: #666` or `#185FA5`.  
Used for: `.slabel` (step section header, blue), `.oseclabel`/`.rslabel`/`.otag` (grey).

### Line Heights

- Headings / buttons: `1.2–1.3`
- Question text: `1.4`
- Body / descriptions: `1.45–1.5`
- Long form prose (landing): `1.6`

---

## Spacing & Layout

### Content Max-Width

- Cards (`.qcard`, `.ocard`): `max-width: 580px`
- Dashboard grid and titles: `max-width: 620px`
- Login/landing wrap: `max-width: 360px` (login), `max-width: 520px` (landing)
- All centred with `margin-left: auto; margin-right: auto`

### Card Padding

- Default: `20px` desktop, `16px` mobile (`≤600px`)
- Login card: `28px` desktop
- Landing card: `32px`

### Border Radius

| Value | Used on |
|---|---|
| `8px` | Inputs, buttons, alert boxes, overview sections, tooltips, option labels, inline notice boxes |
| `10px` | Visual aid card (`.vizcard`) |
| `12px` | Cards (`.lcard`, `.qcard`, `.ocard`, `.ccard`), dropdown |
| `20px` | User button pill |
| `50% / 999px` | Radio dot (`.odot`), patient bar condition pill |
| `2px` | Progress bar |
| `3px` | Checkbox (`.cbbox`) |

### Gap / Grid

- Option lists: `gap: 6px` (between options)
- Navigation buttons: `gap: 6px`
- Dashboard grid: `gap: 12px` (4-col desktop, 2-col mobile)
- Overview sections: `gap: 12px` (2-col desktop, 1-col mobile)
- Patient bar: `gap: 8–12px`

### Fixed Bars

- **Header** (`.header`): `z-index: 1000`, `background: #f0f0f0`
- **Patient bar** (`.ptbar`): `z-index: 999`, `background: white`, sits directly below header
- `body.padding-top` is managed dynamically by `syncBars()` (default `164px`, `80px` without patient bar)

---

## Shadows

| Usage | Value |
|---|---|
| Dropdown menu | `0 4px 16px rgba(0,0,0,0.1)` |
| Lightbox image | `0 8px 40px rgba(0,0,0,0.5)` |
| Tooltip (`.ctip`) | `0 2px 8px rgba(0,0,0,0.25)` |

Cards use border-only (`1px solid rgba(0,0,0,0.12)`) — no box-shadow on screen.

---

## Components

### Buttons

| Class | Style |
|---|---|
| `.btnp` | Primary — `#185FA5` bg, white text, full-width, `border-radius: 8px`, `font-weight: 600`, hover `#0C447C` |
| `.btnnext` | Primary — same as `.btnp` but auto-width, `min-width: 120px` |
| `.btnback` | Ghost — transparent bg, `color: #666`, `border: 1px solid rgba(0,0,0,0.2)`, `min-width: 120px` |
| `.btnout` | Outline — `color: #185FA5`, `border: 1px solid #185FA5` |
| `.btnsave` | Solid — same as `.btnp` but auto-width |
| `.btnfeedback` | Green — `#97C459` bg, `color: #27500A`, `font-weight: 600`, hover `#83b044` |
| `.userbtn` | Pill — `background: #E6F1FB`, `color: #111`, `border-radius: 20px`, `font-size: 13px` |

All buttons: `font-family: inherit`, `cursor: pointer`, `border-radius: 8px` (except `.userbtn`).

Disabled state: `opacity: 0.4; cursor: default` (applied inline or via `:disabled`).

### Alert Boxes (`.abox`)

`border-radius: 8px`, `padding: 12px 14px`, `font-size: 14px`, `line-height: 1.5`, `margin-bottom: 16px`.  
Three variants: `.adanger` (red), `.awarn` (amber), `.aok` (green) — see Colours above.

### Option Buttons (`.opt` / `.cbopt`)

`background: white`, `border: 1px solid rgba(0,0,0,0.2)`, `border-radius: 8px`, `padding: 11px 14px`, `font-size: 15px`.  
Hover / selected: `border-color: #185FA5; background: #E6F1FB`.

Radio dot (`.odot`): 14×14px, `border-radius: 50%`, fills `#185FA5` when selected.  
Checkbox (`.cbbox`): 14×14px, `border-radius: 3px`, fills `#185FA5` when checked.

### Cards

`.qcard` / `.ocard`: `background: white`, `border: 1px solid rgba(0,0,0,0.12)`, `border-radius: 12px`, `padding: 20px`.

### Progress Bar

`.pbar` track: `height: 3px`, `background: #e0e0e0`.  
`.pfill` fill: `background: #185FA5`, `transition: width 0.3s`.

### Section Labels (`.slabel`)

`font-size: 11px`, `font-weight: 500`, `color: #185FA5`, `text-transform: uppercase`, `letter-spacing: 0.04em`.

### Result Items (`.ritem`)

`font-size: 14px`, `padding-left: 10px`, `border-left: 2px solid #185FA5`.  
Variant `.ritem.warn`: `border-left-color: #EF9F27`.

### Tags / Pills (`.otag`, `.ptbar-pill`)

`background: #E6F1FB`, `color: #0C447C`, `font-size: 11px`, `font-weight: 500`, `text-transform: uppercase`, `letter-spacing: 0.04em`, `border-radius: 8px` (tag) / `border-radius: 999px` (pill).

### Clinical Term Tooltips (`abbr.ctip`)

`text-decoration: underline dotted #666`, tooltip appears on hover/focus.  
Tooltip: `background: #333`, `color: white`, `font-size: 12px`, `border-radius: 6px`, `width: 240px`.

### Visual Aid Cards (`.vizcard`)

`border: 1px solid rgba(0,0,0,0.12)`, `border-radius: 10px`, `background: #f8f8f8`.  
Image: `max-height: 220px` (180px on mobile), `border-radius: 8px`, `cursor: zoom-in`.  
Caption: `font-size: 12px`, `color: #555`. Source note: `font-size: 11px`, `color: #777`.

### Lightbox (`#lightbox`)

`background: rgba(0,0,0,0.88)`, full-viewport overlay. Image `max-width: 92vw; max-height: 92vh`.

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤600px` | Dashboard grid → 2 columns; question text → 16px; option text → 14.5px; overview sections → 1 column; patient fields → 1 column; DOB hidden from patient bar; pharmacist menu hidden in patient bar; header padding tightened; card padding → 16px |
| `≤400px` | Patient bar age hidden |

---

## Print Styles

- Font: `Georgia, serif`, `13pt`, `color: #000`, `background: white`
- Colour coding on alert boxes is preserved (`-webkit-print-color-adjust: exact`)
- Cards: border/shadow stripped, full-width
- Result items: `border-left: 2pt solid #185FA5`
- Warn items: `border-left-color: #c47a00`
- All buttons, header, patient bar, and non-result screens hidden
- Footer injected via CSS `::after` on `#s-result`

---

## Conventions

- **No external fonts** — `system-ui` only. No Google Fonts, no icon fonts.
- **No shadows on cards** — border-only on screen; shadows only on floating elements (dropdown, lightbox, tooltip).
- **Inline styles are acceptable** for one-off layout overrides on static HTML. Reusable patterns should be in CSS classes.
- **Colour is applied semantically** — use `.adanger`/`.awarn`/`.aok` classes, not ad-hoc inline colours, for clinical alert states.
- **`accent-color: #185FA5`** on native checkboxes (disclaimer) to match the design system.
