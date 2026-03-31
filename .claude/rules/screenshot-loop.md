# Screenshot Self-Correction Loop

When recreating UI from screenshots, run a visual verification loop.

## Step 1 — Run the app

```
npm run dev
```

## Step 2 — Take screenshot

```
npx puppeteer screenshot http://localhost:5173 --fullPage
```

Capture screenshots of major sections (hero, programs, gallery, etc.) as well.

## Step 3 — Compare with reference

Check for:

- Spacing and padding
- Font sizes and weights
- Colors (exact hex values)
- Alignment
- Grid or flex layouts
- Border radius
- Shadows
- Section heights
- Responsive layout

Be extremely specific when identifying issues. Examples:

- "Hero heading is ~40px but reference is closer to 32px"
- "Gap between cards should be 24px but is 16px"
- "Button border radius looks 6px instead of 8px"

## Step 4 — Fix the code

Update the React components and Tailwind classes to fix every issue. Examples:

- Adjust spacing: `gap-4` → `gap-6`
- Adjust font size: `text-3xl` → `text-2xl`
- Fix alignment: `items-start` → `items-center`
- Fix width/height: `w-full` → `max-w-5xl`

## Step 5 — Re-screenshot and repeat

At least **2 full comparison rounds are required**.

Continue until visual differences are minimal and the layout matches the reference within ~2–3px.

Do NOT stop after the first implementation.
