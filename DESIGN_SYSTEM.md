# Design System

## Colors & Typography

**Colors:**

- Background: `hsl(var(--background))`
- Foreground/Primary: `hsl(var(--foreground))` / `hsl(var(--primary))`
- Secondary/Muted: `hsl(var(--secondary))` (340 60% 97%)
- Destructive: `hsl(var(--destructive))`
- **Custom Tokens**:
  - Blush: `hsl(var(--blush))` (340 60% 97%)
  - Peach: `hsl(var(--peach))` (0 100% 93%)
  - Pale Blue: `hsl(var(--pale-blue))` (207 60% 95%)
  - Charcoal: `hsl(var(--charcoal))` (0 0% 13%)
  - Charcoal Hover: `hsl(var(--charcoal-hover))` (340 30% 40%)

**Typography:**

- Heading Font: 'Tenor Sans', sans-serif
- Body Font: 'Quicksand', sans-serif (wght@300;400;500;600)

## Component Library

- **UI Primitives**: Located at `src/components/ui/`. Implemented via `shadcn/ui` using `radix-ui`. Used to compose larger structures.
- **Application Components**: Located at `src/components/`. Features major layout pieces like `Header.tsx`, `Footer.tsx`, `HeroSection.tsx`, and `ShopByConcern.tsx`.

## Spacing & Layout

- Container: Centered max-width configuration (`center: true`, `padding: "2rem"`, `2xl: "1400px"`).
- Global Radius Variables: Base `0.25rem`.

## Patterns & Conventions

- **Theming**: Uses `lucide-react` for icons. Configured with standard `hsl` variables for `tailwindcss` via `index.css`. Includes specific CSS utilities like `.gradient-hero` and `.glass-header` in `index.css`.
- **Animations**: Basic animations defined in `tailwind.config.ts`, including `accordion-down`, `accordion-up`, and standard `fade-in-up`.
- Tailwind is used via `@apply` and standard class mappings. NextThemes support exists via dependencies.
