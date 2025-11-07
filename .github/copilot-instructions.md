# Copilot Instructions for om-portfolio (React + Vite)

## Project Overview
- This is a personal portfolio built with React, Vite, and TailwindCSS. It features animated transitions, a custom loading screen, and modular sections for Hero, About, Skills, Education, Projects, Experience, Certifications, Contact, and Footer.
- The architecture is component-driven. Each major section is a React component in `src/components/`. Data and UI logic are separated for maintainability.
- Animations use `framer-motion`. Mouse movement is tracked via a custom hook (`src/hooks/useMousePosition.js`) to drive background effects.

## Key Files & Structure
- `src/main.jsx`: Entry point, renders `<App />`.
- `src/App.jsx`: Orchestrates loading, background, navigation, and all main sections.
- `src/components/`: Contains all UI sections and shared components (e.g., Navbar, LoadingScreen, Background).
- `src/hooks/`: Custom React hooks (e.g., `useMousePosition`).
- `src/assets/`: Images and static assets.
- `tailwind.config.js`: Custom color palette and font settings for a creative theme.
- `eslint.config.js`: Enforces strict linting, including custom rules for unused variables and React refresh.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (uses Vite, hot module reload)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (strict, errors on unused vars except those matching `motion|[A-Z_]`)
- **Important Directory:** Run commands from project root (`c:\Users\Admin\dev-projects\my-portfolio-vite`)

## Patterns & Conventions
- **Section Navigation:** Navbar scroll logic uses section IDs (`hero`, `about`, etc.) and highlights the active section based on scroll position.
- **Loading Screen:** App starts with a custom animated loading screen (`LoadingScreen`), which fades out before main content renders.
- **Animations:** Use `framer-motion` for all transitions and interactive effects. AnimatePresence is used for mounting/unmounting components.
- **Theme:** TailwindCSS is extended with custom color groups (`primary`, `secondary`, `accent`, `creative`, `vibrant`). Fonts are set for display and mono styles.
- **Project Data:** Projects are defined in `Projects.jsx` as a JS array, with images imported from `assets/projects/`.
- **Component Exports:** Only export React components; avoid default exports for utility functions unless necessary.

## Integration Points
- **External Libraries:**
  - UI/Animation: `framer-motion`, `lucide-react`, `react-icons`, `three`
  - Styling: `tailwindcss`, `postcss`, `autoprefixer`
- **No backend integration** in this repo; all data is static or imported from local files.

## Example: Adding a New Section
1. Create a new component in `src/components/` (e.g., `Achievements.jsx`).
2. Import and add it to `App.jsx` in the main render flow.
3. Add its ID to the Navbar's `navItems` array for scroll navigation.

## Troubleshooting
- If HMR fails, restart with `npm run dev`.
- Lint errors are strict; check `eslint.config.js` for custom ignore patterns.
- For style issues, verify Tailwind config and custom color usage.

---

If any section is unclear or missing, please provide feedback for further refinement.