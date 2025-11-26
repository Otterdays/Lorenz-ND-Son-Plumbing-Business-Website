# Game Design Document (GDD) — Emergency Pipe Link

Elevator Pitch
Connect the water main to the destination by rotating pipe segments on a small grid before pressure builds and leaks occur. Quick, satisfying rounds that reinforce the brand’s 24/7 emergency expertise.

Theme & Brand Alignment
- Visuals: Navy/gold/cream palette; subtle badge motif; clean sans body with classic serif headings
- Tone: Professional, dependable, reassuring; “We fix fast”
- CTAs: “Emergency Service 24/7” (primary) and “Commercial Quote” (secondary) adjacent to score summary

Target Audience
- Residential: Homeowners facing common plumbing issues
- Commercial: Facility managers (backflow, process piping, compliance)

Core Loop
1) Tap tiles to rotate and form a continuous path from source to destination
2) Pressure meter rises over time; leaks appear on wrong pathing
3) Complete the connection to release pressure and score points

Mechanics
- Board: 5×5 or 6×6 grid of pipe tiles (straight, elbow, T, cross, cap)
- Source & Destination: Fixed positions (top-left → bottom-right by default)
- Controls: Tap/Click rotates 90° clockwise; keyboard arrows/enter for accessibility
- Timer/Pressure: 30–60 seconds; pressure meter increments per second
- Leaks: If pressure > threshold on disconnected segments, leak overlays spawn; sealing leaks requires a tap (bonus points)
- Difficulty: Easy (4×4), Normal (5×5), Hard (6×6 with trick pieces)

Objectives
- Primary: Complete a water path before pressure maxes out
- Secondary: Seal leaks quickly; optimize rotations (efficiency bonus)

Scoring
- Base: +100 for a complete path; +10 per tile in final path
- Time: +1 per second remaining
- Efficiency: +2 per unused rotation (starts at N, subtract actual rotations)
- Leaks: +5 per leak sealed
- Rank: S/A/B based on total score threshold

Win/Lose Conditions
- Win: Valid continuous path from source to destination within time
- Lose: Pressure meter maxes out or time expires without a valid path

Session Length
- Single round: ~45 seconds
- Replay: Immediate; present CTA after 2–3 plays

UI Layout (Wireframe)
```
┌──────────────────────────────────────────────┐
│  Lorenz & Son Plumbing  [24/7 Emergency CTA] │
│  Score: 000   Time: 45s   Pressure ▮▮▮▮▮    │
├──────────────────────────────────────────────┤
│  [  Pipe Grid (5×5) — tap to rotate tiles  ] │
│                                              │
│  S  .  .  ┐  .                                │
│  └  ─  ─  ┘  .                                │
│  .  ┌  ┐  .  .                                │
│  .  └  ┴  ─  D                                │
│  .  .  .  .  .                                │
├──────────────────────────────────────────────┤
│  [Rotate All] [Seal Leak] [Restart]          │
│  [Commercial Quote CTA]                      │
└──────────────────────────────────────────────┘
```

Feedback & Juice
- Sounds: soft click for rotate; hiss for leak; chime for completion
- Visual: subtle cream background; gold highlights on valid paths; navy tiles
- Haptics: gentle device vibration on leak (mobile)

Accessibility
- Keyboard control: arrow keys to move focus; space/enter to rotate; `R` to restart
- High contrast mode: darker navy tiles, brighter gold accents
- Reduced motion: disable pressure animations; keep static overlays
- Screen reader labels: grid described with tile coordinates; source/destination labeled

Difficulty Tuning
- Tile distributions adjust by mode; more T and cross pieces at higher difficulty
- Pressure ramp: easy (linear), hard (accelerated)

Monetization/CTA Strategy
- Post-round panel: “Need help now? Call 24/7 Emergency” and “Request a Commercial Quote”
- No ads; strictly brand engagement

Instrumentation
- Track events: start_round, rotate_tile, seal_leak, complete_path, lose_round, CTA_click
- Respect privacy; no personal data