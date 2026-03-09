# React Website Design Recreation

## Workflow

When the user provides a reference image (screenshot) and optionally some CSS classes or style notes:

### 1. Generate React UI

Create a React component implementation

Typical structure:

```
src/
  App.jsx
  components/
    Header.jsx
    Hero.jsx
    Features.jsx
    Footer.jsx
  main.jsx
  index.css
```

Guidelines:

- Break UI into reusable components
- Use semantic HTML
- Keep components readable
- Prefer Tailwind utility classes

---

## Screenshot Self‑Correction Loop

After generating the React UI, you MUST run a **visual verification loop**.

### Step 1 — Render

Run the React app locally.

Example:

```
npm run dev
```

### Step 2 — Screenshot

Take a screenshot of the rendered page using Puppeteer or Playwright.

Example:

```
npx puppeteer screenshot http://localhost:5173 --fullPage
```

If the page has major sections (hero, pricing, features, etc.), capture screenshots of those sections as well.

---

### Step 3 — Compare With Reference

Compare the screenshot with the provided reference image.

Look for mismatches in:

- Spacing and padding (px differences)
- Font size, weight, and line height
- Colors (exact hex values)
- Alignment
- Grid or flex layouts
- Border radius
- Shadows
- Image sizes
- Icon placement
- Section heights
- Responsive layout

Be extremely specific when identifying issues.

Example:

- "Hero heading is ~40px but reference is closer to 32px"
- "Gap between cards should be 24px but is 16px"
- "Button border radius looks 6px instead of 8px"

---

### Step 4 — Fix the Code

Update the React components and Tailwind classes to fix every issue.

Examples:

- Adjust spacing: `gap-4 → gap-6`
- Adjust font size: `text-3xl → text-2xl`
- Fix alignment: `items-start → items-center`
- Fix width/height: `w-full → max-w-5xl`

---

### Step 5 — Re‑Screenshot

Take another screenshot of the updated UI.

```
npx puppeteer screenshot http://localhost:5173 --fullPage
```

---

### Step 6 — Repeat

Repeat the cycle:

**Screenshot → Compare → Fix → Screenshot**

At least **2 full comparison rounds are required**.

Continue until:

- Visual differences are minimal
- Layout matches reference within ~2–3px

Do NOT stop after the first implementation.

---

## Styling Rules

- Use Tailwind CSS classes inside JSX
- Avoid separate CSS files unless necessary
- Mobile‑first responsive design

---

## Placeholder Assets

If images are not provided use:

```
https://placehold.co/
```

Example:

```
<img src="https://placehold.co/600x400" />
```

---

## Technical Defaults

Framework: React  
Styling: Tailwind CSS  
File format: `.jsx`

Mobile‑first responsive design.

---

## Rules

- Do NOT add sections not present in the reference image
- Do NOT redesign the UI
- Match the screenshot as closely as possible
- Use provided CSS classes verbatim
- Keep components simple and readable

---

## Example Component

```jsx
export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">Hero Title</h1>
      <p className="mt-4 text-gray-600">
        Short description here
      </p>
      <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
        Get Started
      </button>
    </section>
  )
}
```

---

## Goal

Recreate the design **pixel‑accurately** using React + Tailwind with an automated **screenshot feedback loop for self‑correction**.

