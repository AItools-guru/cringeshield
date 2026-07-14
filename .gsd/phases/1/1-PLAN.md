---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Foundation & Layout System

## Objective
Establish the project development environment and construct the responsive, cyber-minimalist dark mode layout including editor inputs, settings widgets, and preview panels.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md

## Tasks

<task type="auto">
  <name>Scaffold Vite Vanilla JS Environment</name>
  <files>package.json, vite.config.js, index.html</files>
  <action>
    Configure npm package.json with Vite dependencies. 
    Create a clean vite.config.js mapping output builds.
    Scaffold the initial HTML5 skeleton in index.html with appropriate title, description, and link tags.
  </action>
  <verify>npm run build</verify>
  <done>Vite builds static files successfully without errors.</done>
</task>

<task type="auto">
  <name>Build CSS Custom Theme & Glassmorphic Variables</name>
  <files>style.css</files>
  <action>
    Establish custom CSS design tokens:
    - Background color: Dark charcoal (#0d0e15)
    - Card surfaces: Glassmorphism (#151821 with backdrop-filter and border 1px solid rgba(255,255,255,0.05))
    - Accents: Electric Neon Cyan (#00f5ff), Cyber Orange (#ff7b00), Neon Green (#39ff14) for ratings.
    - Typography: Google Font 'Inter' and monospaced codes.
    Create grid structures for the side-by-side builder layout and responsive mobile drawers.
  </action>
  <verify>grep -q "\-\-cyber" style.css</verify>
  <done>CSS file contains cyber theme design token variables and baseline layout grid classes.</done>
</task>

<task type="auto">
  <name>Assemble Editor Shell UI & Mock Bindings</name>
  <files>index.html, main.js</files>
  <action>
    Construct the HTML layout container.
    Left Panel: Textarea for post drafts, template select buttons, copywriting formula dropdown, tone configuration options, formatting constraint checkboxes, and the action button "Shield Post!".
    Right Panel: Cringe Meter circular dial outline, critique summary grid, and the simulated LinkedIn Mobile Feed preview container.
    Initialize main.js to bind UI DOM element variables.
  </action>
  <verify>test -f main.js</verify>
  <done>Main layout sections, editor inputs, and output preview container are successfully rendered in the DOM with active JS queries.</done>
</task>

## Success Criteria
- [ ] Dev server launches with zero compiler errors.
- [ ] Side-by-side dashboard structure scales down to a stacked layout on mobile viewports.
- [ ] Buttons and textareas are active and interactive in the browser.
