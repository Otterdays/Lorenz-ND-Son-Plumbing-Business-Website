# Version Control & Release Strategy

Repository
- Use Git; default branch `main`

Branching Model
- `main`: stable, releasable
- `feature/*`: game features (e.g., `feature/leaks`)
- `fix/*`: bug fixes
- `release/*`: release prep (version bump, changelog)

Commit Style
- Conventional Commits
  - `feat: add pressure meter`
  - `fix: correct path validation edge case`
  - `perf: lazy-load audio assets`
  - `docs: update GDD wireframe`

Releases & Tags
- Semantic Versioning: `MAJOR.MINOR.PATCH`
- Tag releases on `main` (e.g., `v0.1.0`)
- Maintain `CHANGELOG.md`

PR Guidelines
- Small, focused PRs; include tests; adhere to performance budgets
- Request review from at least one maintainer

Code Style
- Prettier; ESLint if TypeScript used; avoid frameworks beyond site baseline

Asset Management
- Keep assets small; avoid LFS unless needed; compress audio/images