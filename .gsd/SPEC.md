# SPEC.md — Project Specification

> **Status**: `FINALIZED`
> **Project**: CringeShield (The Professional LinkedIn Post Formatter)

## Vision
A professional-grade, browser-based web application that audits, refactors, and previews LinkedIn posts. It acts as an interactive "de-cringer," translating rough drafts or overly robotic AI ideas into engaging, human-sounding, and layout-optimized LinkedIn posts using classic copywriting formulas.

## Competitive Positioning & Edge
Unlike existing tools which fall into two extremes:
1. *Parody generators* (which make posts intentionally ridiculous for laughs), or
2. *Dry formatters* (which only convert text to Unicode fonts or count characters),
**CringeShield** occupies a unique professional niche. It is a utility for founders, developers, and product leaders to audit their writing for AI buzzwords, convert layout traps (like screen-reader-unfriendly bold fonts and hyphenated lists), apply structure, and preview the post exactly as it will look on a mobile screen.

---

## Goals
1. **Interactive Cringe Analyzer**: A real-time engine that parses input for 30+ AI/corporate buzzwords, calculates spacing/line ratios, and emoji density, displaying a visual "Cringe Meter" gauge.
2. **Copywriting Refactoring Engine**: Restructures text using selected templates (PAS, AIDA, Hook-Value-CTA, Contrarian) and tones (Pragmatic, Storyteller, Technical). Powered by Gemini API, with a rich fallback **Simulator Mode** for offline/zero-config showcases.
3. **LinkedIn Mobile-Feed Simulator**: A pixel-perfect rendering panel that simulates how the text truncates on mobile screens, helping writers place their "see more" link breaks effectively.
4. **Layout Sanitizer**: One-click utilities to strip hyphens (replacing them with clean bullet points or lists as per growth strategies), manage spacing, and copy to clipboard.

---

## Non-Goals (Out of Scope)
- Native account registration, user databases, or OAuth logins (all settings are stored client-side in `localStorage`).
- Direct posting/scheduling API integrations with LinkedIn (which require complex enterprise tokens; copying to the clipboard is sufficient and safer).
- Multi-image/video file uploading and hosting.

---

## Users
- **Product Managers & Software Engineers**: Wanting to share technical insights, launches, or learnings on LinkedIn without sounding like a robotic PR statement or an over-hyped "broetry" influencer.
- **Job Seekers & Recruiters**: Seeking a fast tool to format clean updates and review their posts before publishing.

---

## Constraints
- **Client-Side execution**: Must run locally inside the user's browser with zero backend installation required.
- **Responsive Layout**: Designed primarily for desktop builders but fully responsive for mobile screens.
- **Vanilla CSS**: Styled with raw CSS to ensure maximum custom control over modern glow/glassmorphic aesthetics.

---

## Success Criteria
- [ ] UI load time under 300ms on local server.
- [ ] Under 5% error rate on direct Gemini API calls.
- [ ] 100% functional "Simulator Mode" for key templates without requiring an API key.
- [ ] Screen-reader-friendly bullet formatter converting hyphens and asterisks cleanly.
