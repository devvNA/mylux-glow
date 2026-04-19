# myLux Glow (UI)

## Project Snapshot

SPA React application built using Vite, TypeScript, Tailwind CSS, and shadcn/ui. Focus is predominantly on UI/UX with basic client-side routing.

## Root Setup Commands

- Install packages: `pnpm install`
- Start development server: `pnpm run dev`
- Build production bundle: `pnpm run build`
- Typecheck & Lint: `pnpm run lint`

## Universal Conventions

- Focus on clean, semantic HTML structure using standard functional React components.
- Extensively use standard Shadcn UI components located in `src/components/ui/`.
- Use absolute imports via the `@/` alias (e.g., `import { Button } from "@/components/ui/button"`).
- Define reusable components inside `src/components/` and larger logical views in `src/pages/`.

## Security & Secrets

- Application is for public client usage. Do NOT embed API tokens directly inside source files.
- Safe public API configurations should be loaded gracefully prefixing environment variables with `VITE_`.

## JIT Index

### Quick Find Commands

- Search utility/function: `rg -n "functionName" src/`
- Find application components: `rg -n "export (default )?function" src/components`
- View main layouts: `cat src/App.tsx`
- Search style and CSS tokens: `rg -n "hsl" src/index.css`

## Definition of Done

Features are considered done when they pass `pnpm run build` without TypeScript/React errors, warnings are evaluated, and the app seamlessly displays UI correctly across diverse breakpoints with functional components.
