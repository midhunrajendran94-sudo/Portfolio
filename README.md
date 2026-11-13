# Midhun Rajendran — QA Engineer & Portfolio Website

A fast, responsive, and accessible single-page portfolio built with **React 19**, **Vite**, **Framer Motion**, and **vanilla CSS**. Designed specifically for **Midhun Rajendran**, an aspiring QA Engineer focusing on Software Testing, Quality Assurance, and Automation.

---

## Quick Start (Run Locally)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your web browser.

For production build & preview:

```bash
npm run build
npm run preview
```

---

## Key Features & Highlights

1. **Core QA & Testing Showcase**:
   - **Featured Projects**: Includes an E-Commerce Web & API Automation Test Suite (Playwright, TypeScript, Page Object Model, CI/CD), along with academic projects (AI-based Alzheimer's Prediction and Online Voting Platform).
   - **Bento Skills Grid**: Dedicated Software Testing & QA primary track (Manual Testing, Playwright, API Testing, STLC, Bug Life Cycle, Regression) + Programming, Web, Databases, and Tools.
   - **Continuous Learning Track**: Advanced Playwright architecture, CI/CD pipelines, and automated API assertions.
2. **Resume Download Ready**:
   - Pre-loaded with `public/resume/Midhun_Rajendran_Resume.pdf` containing verified academic and testing credentials. The "Download Resume" button works out of the box.
3. **Smart Portrait System**:
   - Shows an aesthetic serif "MR" monogram placeholder inside a dark gradient frame.
   - To show your personal photo, simply drop your picture as `public/images/profile.jpg` (automatically displayed with instant fallback if missing).
4. **Interactive Contact Form**:
   - Includes real-time email draft preparation and confirmation feedback banner.
5. **SEO & PWA Ready**:
   - Web App Manifest (`public/manifest.webmanifest`), `robots.txt`, OpenGraph meta tags, and accessibility features (skip-link, `prefers-reduced-motion` compliance).

---

## Customizing Links & Details

All information is centrally managed in `src/data/portfolioData.js`:

- **LinkedIn**: Set in `profile.linkedin`.
- **GitHub**: Put your URL in `profile.github` (e.g. `https://github.com/<username>`). When set, GitHub chips appear in the Contact section and Footer.
- **Projects**: Set `repo` or `demo` URLs for any project to surface direct links. Leave empty to hide buttons.
- **Contact Details**: Email (`profile.email`), phone, and location are configurable in the same file.
