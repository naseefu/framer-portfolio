# Naseef Rahman — Portfolio Website

A lofi-aesthetic portfolio built with Vite + React + Framer Motion.

## Stack
- **Vite** — build tool
- **React 18** — UI framework
- **Framer Motion** — animations
- **DM Serif Display + DM Sans** — typography (Google Fonts)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Customisation

| File | What to change |
|------|---------------|
| `src/components/Hero.jsx` | Title, description, email |
| `src/components/Work.jsx` | Projects array |
| `src/components/About.jsx` | Bio, experience timeline, skills |
| `src/components/Footer.jsx` | Social links, email |
| `src/index.css` | Colors (CSS variables at top), fonts |

## Color Variables (index.css)

```css
--bg:          #111110   /* page background */
--accent:      #c9a96e   /* warm gold accent */
--text:        #e8e4dc   /* primary text */
--text-muted:  #7a7570   /* secondary text */
```

## Deploying

Works with Vercel, Netlify, or GitHub Pages out of the box:

```bash
# Vercel
npx vercel

# Netlify
npm run build && netlify deploy --dir=dist
```