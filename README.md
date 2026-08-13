# service-site

Astro + React + Tailwind starter for a service promotional website.

## Stack

- [Astro](https://astro.build) — pages and static content
- [React](https://react.dev) — interactive islands (`client:*` directives)
- [Tailwind CSS v4](https://tailwindcss.com) — styling via `@tailwindcss/vite`

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local server at `localhost:4321`      |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |

## Project structure

```
src/
  components/   # Astro + React components (ContactCTA is a React island)
  layouts/      # Shared page shell
  pages/        # File-based routes
  styles/       # global.css (Tailwind + theme tokens)
public/         # Static assets
```

Commit to trigger GitHub Pages build at https://tidtee345.github.io/panchalee-connect/
