# Testing Plan

Browsers
- Desktop: Chrome (latest), Firefox (latest), Edge (latest), Safari (macOS)
- Mobile: Chrome Android, Safari iOS (latest two major versions)

Devices
- iPhone SE–Pro Max; Pixel 5–8; iPad (portrait/landscape)

Functional Tests
- Rotate tiles via touch and keyboard
- Path validation; win/lose conditions
- Leak spawn and seal interactions
- Restart behavior; score resets

Performance
- Lighthouse ≥90
- JS payload ≤50KB; CSS ≤12KB; SVG ≤20KB
- First input delay ≤150ms

Accessibility
- Keyboard-only round completion
- Screen reader announces tile position/type
- High contrast and reduced motion toggles

Responsive
- Layout stays within safe thumb zones; UI scales

Analytics
- Validate event fires: start/rotate/seal/win/lose/CTA_click

Regression Suite
- Unit tests for `GridManager`, `PressureController`, `ScoreManager`
- Integration tests for round lifecycle