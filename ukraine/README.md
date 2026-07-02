# Saving Astronomy in Ukraine

Static one-page site for the "Saving Astronomy in Ukraine" initiative (SS43 at
EAS 2026). Lives at **https://plotkopavlo.com/ukraine/**.

It is plain HTML/CSS/JS with no build step. It sits inside the Jekyll
personal-website repo, but because these files have no front matter, Jekyll
copies them verbatim. To publish a change: edit, commit, push to `master`.
GitHub Pages redeploys automatically.

## Files

```
ukraine/
  index.html        English content (source of truth); markup + text
  styles.css        all styling; design tokens are the CSS variables at the top
  main.js           the 3 editable links, the EN/UK toggle, and the animations
  fonts.css         @font-face rules for the self-hosted fonts
  favicon.svg       the star mark
  assets/fonts/     self-hosted woff2 (Latin identity fonts + Cyrillic fallbacks)
  assets/og-image.jpg   social-share image  (ADD THIS — see below)
```

## Editing the three links

Open `main.js` and edit the `LINKS` object at the very top:

```js
const LINKS = {
  email: "REPLACE@example.org", // contact email for the team
  plan:  "#REPLACE-plan-pdf",   // URL of the full recovery plan (PDF)
  form:  "#REPLACE-feedback",   // URL of the feedback form (Google Form)
};
```

The two SS43 session links are already real and live in `index.html`.

## Editing text

- **English** is written directly in `index.html`.
- **Ukrainian** lives in the `UK` object in `main.js`, keyed by the same
  `data-i18n` names used in the HTML. The Ukrainian copy is a first-pass draft;
  edit those strings to correct it.
- If you add a new translatable element, give it `data-i18n="some.key"` in the
  HTML and add `"some.key": "..."` to the `UK` object.

## Fonts

Latin uses Fraunces (display), Instrument Sans (body), Space Mono (labels).
Ukrainian (Cyrillic) falls through automatically to Playfair Display, Manrope,
and JetBrains Mono; those are scoped to the Cyrillic `unicode-range`, so English
visitors never download them. All fonts are self-hosted in `assets/fonts/`, so
the page has no third-party dependency at load.

## Social-share image

`index.html` references `assets/og-image.jpg` for link previews. Drop the SS43
poster there at roughly 1200x630 px. Until then, link previews show no image.

## Accessibility / motion

Keyboard focus is visible, and all animation (starfield, constellation draw-in,
scroll reveals) is disabled under `prefers-reduced-motion: reduce`.
