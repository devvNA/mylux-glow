

# Font Recommendations for myLux Skincare

## Current Setup
- **Headings:** Poppins (geometric sans-serif)
- **Body:** Inter (neutral sans-serif)

Both are solid but feel generic — they lack the feminine elegance a K-beauty skincare brand deserves.

---

## Recommended Font Pairings

### Option A: **Cormorant Garamond + DM Sans**
- **Headings:** Cormorant Garamond (SemiBold) — elegant serif with high contrast strokes, very popular in luxury beauty brands (Aesop, Glossier-adjacent aesthetics). Feels refined and timeless.
- **Body:** DM Sans (Regular/Light) — clean geometric sans-serif, softer than Inter, pairs beautifully with serif headings.
- **Vibe:** Classic luxury, editorial beauty magazine

### Option B: **Playfair Display + Nunito Sans**
- **Headings:** Playfair Display (Medium/SemiBold) — high-contrast transitional serif, bold yet feminine. Used widely in fashion and beauty.
- **Body:** Nunito Sans (Regular/Light) — rounded sans-serif that feels warm and approachable.
- **Vibe:** Bold femininity, magazine-editorial, confident beauty

### Option C: **Tenor Sans + Quicksand**
- **Headings:** Tenor Sans (Regular) — elegant sans-serif with subtle serif-like proportions, very refined and airy. Great for K-beauty minimalism.
- **Body:** Quicksand (Regular/Light) — geometric with rounded terminals, soft and friendly.
- **Vibe:** Soft minimalism, K-beauty dreaminess, closest to UNOVE

### Option D: **Marcellus + Karla**
- **Headings:** Marcellus (Regular) — classic Roman-inspired serif, understated elegance with thin strokes.
- **Body:** Karla (Regular/Light) — grotesque sans-serif, clean and modern.
- **Vibe:** Understated luxury, clean apothecary

---

## My Recommendation

**Option A (Cormorant Garamond + DM Sans)** is the strongest choice for myLux because:
1. The serif heading font instantly elevates the brand to feel premium and editorial
2. It contrasts beautifully with the soft pastel palette
3. DM Sans is more refined than Inter while remaining highly readable
4. This pairing is proven in the luxury skincare/beauty space

**Option C (Tenor Sans + Quicksand)** is the runner-up if you prefer staying sans-serif — it captures the K-beauty minimalist spirit more closely.

---

## Implementation Plan

Once you choose a pairing, I will:

1. **Update `src/index.css`** — Replace the Google Fonts import with the chosen fonts
2. **Update `tailwind.config.ts`** — Change `fontFamily.heading` and `fontFamily.body`
3. **Fine-tune font weights and letter-spacing** across Header, Hero, Bestsellers, and Footer components to match the new typeface proportions

All existing `font-heading` and `font-body` utility classes will automatically pick up the new fonts — no component-level changes needed beyond minor spacing tweaks.

