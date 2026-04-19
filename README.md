# myLux Glow ✨

<div align="center">
  <p><strong>A Premium E-Commerce SPA for Skincare & Beauty</strong></p>
</div>

![myLux Glow Banner](./src/assets/hero-1.jpg) <!-- Update this path if necessary or use a generic representation -->

## 📖 Overview

**myLux Glow** is a fictional, production-ready Single Page Application (SPA) designed to emulate a high-end luxury beauty and skincare brand. Focused on delivering a _soft-luxury_ and modern aesthetic, the application provides a smooth, elegant, and interactive user experience mimicking tier-one global beauty brands.

The project emphasizes front-end architecture, responsive design, complex client-side state management, and modern component-driven engineering to deliver an immersive shopping journey.

## ✨ Key Features

- **Soft Luxury Aesthetics:** A curated color palette (soft blush, charcoal, pale-blues) paired with elegant typography (Tenor Sans & Quicksand) to invoke a premium, editorial feel.
- **Fluid Animations:** High-performance, declarative animations powered by `framer-motion` for page transitions, interactive product cards, and scroll-fade effects.
- **Persistent Cart System:** Integrated global shopping cart built with **Zustand**. Data is perfectly persisted using LocalStorage to ensure items remain in the cart across browser reloads.
- **Dynamic "Collection" Shop:** Robust client-side filtering and sorting engine. Users can instantly filter luxury products by "Skin Concerns" (e.g., Acne, Dullness, Aging) and sort by Bestselling, Featured, and Pricing.
- **Seamless Checkout Flow:** End-to-end checkout interfaces heavily validated using `react-hook-form` coupled with `zod` schemas.
- **Editorial Brand Pages:** "Our Story" layout combining rich typography and AI-generated dynamic visual mockups for brand discovery.

## 🛠️ Tech Stack

This project leverages a modern React ecosystem optimized through Vite:

- **Core:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS (with arbitrary value customization and complex design tokens)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- **State Management:** Zustand
- **Routing:** React Router v6
- **Validation:** Zod & React Hook Form
- **Animation:** Framer Motion
- **Notifications:** Sonner

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and a modern package manager installed (`pnpm` is highly recommended for this repository).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devvNA/mylux-glow.git
   cd mylux-glow
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   > By default, the Vite server will run on `http://localhost:8080`.

### Building for Production

To generate an optimized production build:

```bash
pnpm run build
```

_Note: The Vite config includes code-splitting logic (`manualChunks`) to optimize vendor and UI libraries, eliminating chunk size warnings._

## 📐 Architecture & Standards

- **Absolute Imports:** Import aliases set up strictly to `@/*` referencing the `src/` directory.
- **Data Centralization:** Global data configurations (like the product list schema mappings) reside in `src/data/` for scalable data propagation.
- **UI Abstraction:** Reusable elements are encapsulated strictly inside `src/components/`, while `shadcn` boilerplate lives in `src/components/ui/` to maintain a clean workspace.

---

_Disclaimer: `myLux Glow` is a fictional conceptual portfolio project._
