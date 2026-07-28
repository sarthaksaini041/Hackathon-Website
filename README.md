# Horizon — Hackathon Registration Website

A production-grade, fully responsive **Horizon Hackathon Registration Website** for **VIT Bhopal** built with React 19, Vite, and Tailwind CSS v4. Features a soft neumorphism design system, dark mode, interactive animations, robust form validation, and optimized local media assets.

## Features

- **Modern Soft Neumorphism** — Elegant UI with subtle depth and soft shadows
- **Dark Mode** — Complete dark theme with localStorage persistence and no flash on refresh
- **Countdown Timer** — Live countdown to the hackathon start date
- **Animated Statistics** — Scroll-triggered animated counters
- **Interactive Timeline** — Vertical schedule timeline with current event highlighting
- **Local Media Gallery** — Self-contained WebP photography grid with keyboard-navigable lightbox
- **Official Brand Sponsors** — Featured sponsors including Google Cloud, GitHub, Vercel, Cloudflare, Stripe, Supabase, MongoDB, Postman, and Figma
- **Stable Registration Form** — 12-field validation using React Hook Form with reserved error slots to prevent layout shifting
- **Custom UI Controls** — Anchored dropdown select inputs and high-visibility blue tick checkbox controls
- **Clean Entrance Screen** — Minimalist initial brand logo animation
- **Scroll Progress & Navigation** — Top progress bar, active section scrollspy, floating CTA, and smooth back-to-top button
- **Vercel Ready** — Configured with `vercel.json` SPA routing rewrites for instant zero-config deployment

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite 8 | Build Tool |
| Tailwind CSS v4 | Utility-First Styling |
| Framer Motion | Smooth Animations |
| React Hook Form | Form Validation |
| React Icons & Lucide | Brand & Interface Icons |
| React Router DOM | Client-Side Routing |

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel will automatically detect `vercel.json` and deploy using Vite.

## License

MIT
