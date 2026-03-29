# IGSCF Website – Development Guidelines

Goal: keep the codebase **clean, modular, and easy for future student developers to maintain**.

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (`.jsx`)

## Rules

Detailed guidelines are split into focused files in `.claude/rules/`:

- [architecture.md](rules/architecture.md) — folder structure, page composition, component placement (Home, ForStudents, About, Partner, Admin, Privacy)
- [styling.md](rules/styling.md) — Tailwind usage, mobile-first design
- [content-data.md](rules/content-data.md) — where to store dynamic text content
- [screenshot-loop.md](rules/screenshot-loop.md) — visual verification process when recreating UI from screenshots
- [assets.md](rules/assets.md) — placeholder images

## Key Constraints

- Do NOT redesign the UI — match the provided reference
- Do NOT merge sections into a single component
- Follow the folder structure in `architecture.md` exactly
- Each page section must be its own component
- Keep components simple and readable
- Use provided CSS classes verbatim when given
