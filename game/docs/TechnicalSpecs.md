# Technical Specifications

Goals
- Ultra-light footprint, fast load, mobile-first
- Easy embed within Gatsby site without heavy dependencies

Architecture Overview
- Rendering: DOM with CSS grid + inline SVG for tiles (no Canvas required)
- State: Vanilla JS/TS module managing grid, timer, pressure, scoring
- Input: Pointer/touch/keyboard events mapped to rotate/seal/restart actions
- Audio: Optional small WAVs (2–4KB each) with user-muted option

File Structure
```
game/
  index.html            # Standalone embed page or Gatsby route container
  styles.css            # Minimal CSS, brand-aligned
  game.ts               # Core logic (compiled to game.js)
  tiles.svg             # Inline SVG sprite for pipe tiles
  assets/
    sfx-click.wav
    sfx-leak.wav
    sfx-complete.wav
  docs/                 # This folder
```

Integration Options
- Standalone: host `game/index.html` under `/game/` and link from site nav/CTA
- Gatsby: create `src/pages/game.tsx` that imports `game.js` and `styles.css`; ensure Tailwind styles remain scoped

Dependencies
- Required: none
- Optional: `tslib` if using TS helpers; small audio lib if desired (avoid if >10KB)

Performance Budgets
- JS: ≤50KB gzipped total for game
- CSS: ≤12KB
- Images/SVG: ≤20KB
- First interaction: ≤150ms after load

Data Structures
- Grid: 2D array of tile objects `{type, rotation, connects}`
- Pressure: number 0..100; increments every second or on misconnect
- Timer: countdown; `setInterval` with drift guard

Core Modules
- `GridManager`: initialize, rotate, validate path
- `PressureController`: tick, spawn leaks, lose condition
- `ScoreManager`: compute score, rank
- `UIController`: render grid, HUD, overlays, CTAs

Pseudocode (Path Validation)
```
function hasPath(grid, source, dest) {
  const visited = new Set();
  const stack = [source];
  while (stack.length) {
    const cell = stack.pop();
    if (cell === dest) return true;
    for (const next of neighbors(cell)) {
      if (connects(cell, next) && !visited.has(next)) {
        visited.add(next);
        stack.push(next);
      }
    }
  }
  return false;
}
```

Brand Elements
- Colors from Tailwind config; consider inlining for isolation
- Fonts via `@fontsource` packages or system fallback

Analytics Hook
- Use `window.dataLayer` or Gatsby `onRouteUpdate` to push simple event payloads