# The Rescue Boat & Other Counter-Narratives

**The Rescue Boat & Other Counter-Narratives** is a trauma education and counter-narrative manuscript site. It serves as a survival doctrine and translation tool for those navigating the complexities of trauma, addiction, and the nervous system.

## 🌐 Live Site
The manuscript is live and accessible at:
**[https://mave9055.github.io/ebook-manuscript/](https://mave9055.github.io/ebook-manuscript/)**

## 📖 Project Overview
This site hosts a collection of 19 peer-written articles, protocols, and resources designed to replace shame-based narratives with biological understanding. It is organized into four main sections:

- **Part I: The Counter-Narratives** – Twelve articles challenging traditional narratives about addiction and survival.
- **Part II: Technical Appendix** – Citations, neurobiology, and the research foundation.
- **Part III: The Seven Missing Pieces** – Tools and reframes overlooked by traditional systems.
- **Additional Resources** – Practical protocols (e.g., Freeze Response Protocol for Courtrooms), laws of survival, and practical tools.

## 🏗️ Content Structure
- `client/public/content/`: Contains the canonical Markdown files for all articles.
- `client/src/lib/articles.ts`: The source of truth for article metadata, slugs, and organization.
- `client/src/pages/`: React components for the Home and Article views.

## 🛠️ Build & Deployment
This project is built with **React**, **Vite**, and **Tailwind CSS**. It is designed to be hosted on **GitHub Pages**.

### Local Development
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm run dev
   ```

### Build for Production
To generate the static files for deployment:
```bash
pnpm run build
```
The build process automatically:
1. Compiles the React application into `dist/public`.
2. Bundles the server-side logic (if applicable).
3. Copies `index.html` to `404.html` to support client-side routing on GitHub Pages.

### Deployment
The site is automatically deployed to GitHub Pages from the `main` branch (or via a GitHub Action if configured).

## ⚠️ Disclaimer
This is a trauma education resource. It is intended for educational purposes and peer support. It is not a substitute for professional therapy or medical advice.

---
*© Capitol Contracts LLC*
