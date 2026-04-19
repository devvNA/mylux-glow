# Technical Overview

## Core Components
- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui.
- **Routing**: `react-router-dom` (v6), currently defining main route (`/`) mapped to `Index` page and a catch-all mapping to `NotFound`.
- **State & Data Fetching**: `@tanstack/react-query` used for data fetching/caching capabilities. `react-hook-form` + `zod` for forms.
- **UI Library**: `shadcn/ui` components combining `@radix-ui` primitives, `framer-motion` for animations, and `lucide-react` for icons.

## Component Interactions
- **Architecture**: Classic single-page application (SPA) architecture focusing on modular components in `src/components/` structured by sections on the page (e.g., `HeroSection`, `Bestsellers`, `ShopByConcern`).
- **Initialization**: Entry point is `src/main.tsx` utilizing `createRoot`. The `<App/>` wrapper (`src/App.tsx`) initializes top-level providers (`QueryClientProvider`, `TooltipProvider`, `BrowserRouter`, and UI Toasters).

## Deployment Architecture
- **Build System**: Managed by Vite with React SWC plugin. Run `npm run build` or `npm run build:dev` to emit assets to `dist/`.
- **Styling**: Processed through PostCSS and Tailwind.

## Runtime Behavior
- **Request Handling**: Client-side routing managed wholly by `react-router-dom`. Unknown routes fallback to the `NotFound` page component.
- **Background Tasks / APIs**: Placeholder setup; `@tanstack/react-query`'s `queryClient` is initialized but waits for explicit use in hooks.
