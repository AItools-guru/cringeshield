# ROADMAP.md

> **Current Phase**: Phase 1: Foundation & Layout System
> **Milestone**: v1.0 (MVP Launch)

## Must-Haves
- [ ] Responsive cyberpunk-minimalist grid layout with glassmorphic styling
- [ ] Text editor input with real-time text analysis integration
- [ ] Real-time Cringe Analyzer and glowing Cringe Meter gauge
- [ ] Direct Gemini API Integration (client-side fetch) and localStorage key storage
- [ ] Pre-baked Simulator Mode for demo presets (no API key required)
- [ ] Pixel-perfect simulated LinkedIn mobile-feed card preview
- [ ] Bullet point spacing and formatting sanitizer (zero-hyphen converter)

---

## Phases

### Phase 1: Foundation & Layout System
**Status**: ⬜ Not Started
**Objective**: Scaffold Vite environment, build responsive dashboard grid layout, custom CSS styling tokens, and input elements.
**Deliverables**:
- [ ] Setup `package.json`, `vite.config.js`, and local dev server.
- [ ] Implement foundational styles, typography, cyberpunk theme, and custom scrollbars.
- [ ] Build split dashboard layout: Left control pane, Right preview/meter pane.
- [ ] Build interactive API Key Configuration drawer.

### Phase 2: Local Diagnostic & Cringe Meter Engine
**Status**: ⬜ Not Started
**Objective**: Code the JavaScript parser for real-time text analysis, compile buzzword dictionary, and build the visual Cringe Meter gauge.
**Deliverables**:
- [ ] Compile buzzword regex dictionary (30+ corporate jargon and AI filler terms).
- [ ] Build text parser computing buzzword count, broetry score, emoji density, and hyphen usage.
- [ ] Implement the glowing speed-meter or linear progress cringe gauge that shifts colors dynamically.
- [ ] Create detailed critique panels displaying flagged issues with specific suggestions.

### Phase 3: Copywriting Refactoring Engine (Gemini & Simulator)
**Status**: ⬜ Not Started
**Objective**: Connect the Gemini API client and implement local Simulator Mode fallback templates for key scenarios.
**Deliverables**:
- [ ] Implement Gemini client-side fetch wrapper.
- [ ] Create robust instructions (prompts) for refactoring based on selected formula (PAS, AIDA, Hook-Value-CTA, Contrarian) and tone (Pragmatic, Storyteller, Technical).
- [ ] Build local Simulator fallback dataset with 4 pre-baked transformations.
- [ ] Implement loading states with glow pulsing animations.

### Phase 4: Mobile Feed Preview & Formatting Polish
**Status**: ⬜ Not Started
**Objective**: Build the pixel-perfect mobile-feed simulation card, add format sanitizer tools, and perform visual QA.
**Deliverables**:
- [ ] Build simulated mobile-feed card complete with avatar, custom author details, and collapsible body ("... see more").
- [ ] Implement one-click formatting sanitizers (bullet formatter replacing hyphens/asterisks, spacing optimizer).
- [ ] Implement animated Copy to Clipboard button.
- [ ] Conduct visual audit, clean code lines, write CHANGELOG, and verify build.
