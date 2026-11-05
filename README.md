# 💻 VS Code-Inspired Developer Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Lint-Oxlint-EC4899?style=flat-square)](https://oxc.rs/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

An interactive, responsive developer portfolio engineered to look and feel like a modern **Visual Studio Code** workspace. Built with modern web technologies including **React 19**, **TypeScript**, **Tailwind CSS v4**, **SCSS modules**, and **Vite**.

Visitors can browse your profile, inspect skills and projects, preview your resume, and transmit messages through an integrated IDE simulation.

---

## ✨ Features

- **🖥️ Pixel-Accurate IDE Workspace:**
  - Window control dots (macOS style) & workspace title bar.
  - Collapsible **Activity Bar** (Explorer, Search, Extensions, Debug).
  - Multi-level accordion **File Explorer** with custom language and file iconography.
  - Tab management system with active tab highlight, smooth tab switching, and close button behavior.
  - Code gutter with automatic line numbering and IDE-themed syntax highlighting.
  - Interactive breadcrumb navigation (`Workspace > path > file.ts`).

- **⚡ Real-Time File Search:**
  - Header-level search bar to quickly jump to any file (`README.md`, `about.ts`, `projects.ts`, `contact.ts`, `resume.pdf`) with keyboard shortcuts (`Enter` to open, `Esc` to dismiss).

- **🌓 Dynamic Light & Dark Mode:**
  - Custom color tokens crafted for authentic dark and light VS Code themes.
  - Smooth 300ms theme transition across all UI panels, gutters, tabs, and backgrounds.

- **📁 Interactive File Views:**
  - **`README.md`**: Markdown-style introduction, role tags, experience overview, and featured showcase.
  - **`about.ts` & `skills.json`**: Code-modeled biography, structured metadata, and classified technical skill chips with proficiency ratings.
  - **`projects.ts`**: Interactive project gallery with smooth animated category filter pill, tech stack badges, and live demo links.
  - **`contact.ts`**: TypeScript API interface contract coupled with an interactive contact form featuring real-time RFC validation and mailto transmission.
  - **`resume.pdf`**: Integrated PDF document previewer directly in the editor workspace.

- **📱 Fully Responsive:**
  - Designed for mobile, tablet, and desktop viewports with an adaptive drawer explorer and mobile section toggles.

---

## 🛠️ Tech Stack

| Area | Technologies |
|---|---|
| **Core** | React 19, TypeScript, Vite 8 |
| **Styling** | Tailwind CSS v4, Sass / SCSS, CSS Variables, tw-animate-css |
| **UI Components** | Base UI (`@base-ui/react`), shadcn UI primitives, Lucide React icons |
| **Typography** | Inter Variable (`@fontsource-variable/inter`) |
| **Tooling & Linting** | Oxlint (High-performance JS/TS linter), Rollup/Rolldown |

---

## 📂 Project Structure

```text
my-portfolio/
├── components/            # Reusable Base UI / Radix primitive components
│   └── ui/                # Accordion, Button, Tabs, Toggle Group
├── lib/                   # Utility helpers (cn class merging)
├── public/                # Static assets (favicons, logos, sample resume)
│   ├── favicon.svg
│   ├── icons.svg
│   ├── portfolioLogo.png
│   └── resume.pdf
├── src/
│   ├── assets/            # SVG icons (language badges, IDE tool icons, theme toggles)
│   ├── components/
│   │   ├── hooks/         # Custom React hooks (useEditorTabs.ts)
│   │   ├── about.tsx      # Profile definition & skills view
│   │   ├── contact.tsx    # Contact handshake & message dispatcher form
│   │   ├── EditorSection.tsx # Tab bar, breadcrumbs, and active file renderer
│   │   ├── ExplorerSidebar.tsx # Activity bar & file tree accordion
│   │   ├── Header.tsx     # Window header, search bar, theme toggler
│   │   ├── indexGutter.tsx# Line numbering gutter
│   │   ├── ProjectCard.tsx# Individual project card presentation
│   │   ├── Projects.tsx   # Project grid with category filter
│   │   ├── readme.tsx     # In-IDE README markdown overview
│   │   ├── themeContext.tsx # Global theme provider & explorer state
│   │   └── useScreenSize.ts # Responsive screen width listener
│   ├── data/
│   │   └── projects.ts    # Projects database (metadata, tags, links)
│   ├── App.tsx            # Main application layout & terminal footer
│   ├── index.css          # Base style resets
│   ├── tailwind.css       # Tailwind v4 configuration
│   └── main.tsx           # Application entry point
├── package.json           # Dependencies and build scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.js         # Vite configuration & plugin setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📦 Available Scripts

In the project root, you can run:

| Command | Action |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds production-ready static assets in `dist/`. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) for ultra-fast TypeScript and JSX linting. |

---

## ⚙️ Customization Guide

This template is fully decoupled from personal information. To personalize it with your own details:

### 1. Update Profile & Biography (`src/components/about.tsx` & `src/components/readme.tsx`)
- Edit the profile data object: name, role, years of experience, current company, philosophy summary, and core strengths.
- Update social links (GitHub profile, LinkedIn URL, contact email).

### 2. Update Projects (`src/data/projects.ts`)
Add or edit your featured builds in `src/data/projects.ts`:
```ts
{
  id: 1,
  filename: "my-app.tsx",
  title: "Application Name",
  category: "FRONTEND", // FRONTEND | FULLSTACK | SYSTEMS UI
  description: "Brief summary of the architecture and functionality.",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  image: "/images/preview.png",
  demoUrl: "https://your-demo-url.com",
  featured: true,
}
```

### 3. Configure Contact Email (`src/components/contact.tsx`)
Update the recipient address for the contact form:
```ts
const CONTACT_EMAIL = "your-email@example.com";
```

### 4. Replace Resume (`public/resume.pdf`)
Replace `public/resume.pdf` with your own PDF document. The editor tabs and in-app viewer automatically link to `/resume.pdf`.

### 5. Website Title & Metadata (`index.html`)
Update the `<title>` and `<meta>` tags in `index.html` to reflect your branding.

---

## 🌐 Deployment

The project builds to standard static files in the `dist/` directory and can be deployed with zero backend configuration:

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.
   *(Or connect your GitHub repository directly to Vercel with framework preset **Vite**).*

### Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'` (if not using a custom domain).
2. Build the project using `npm run build` and deploy the `dist/` folder via the `gh-pages` branch or GitHub Actions.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
