# Adam Harari — Portfolio

Personal portfolio site built with React + Vite. Dark, modern single-page layout with sections for services, featured projects (with screenshots), tools, and contact.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel

Option A — from the dashboard:
1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Accept the defaults (build command `npm run build`, output `dist`) and click **Deploy**.

Option B — from the CLI:
```bash
npm install -g vercel
vercel
```

## Customize

- All text content (bio, services, projects, tools, rate) lives in `src/data.js`.
- The contact email is in `src/data.js` (`profile.email`) — swap it if you want a different address shown publicly.
- Images are in `src/assets/`. Replace them and update the imports at the top of `src/data.js`.
- Colors and fonts are CSS variables at the top of `src/index.css`.
- To add LinkedIn/Upwork links, add buttons next to "Get in Touch" in the `Contact` component in `src/App.jsx`.
