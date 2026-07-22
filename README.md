# 🛡️ CringeShield — LinkedIn Post Formatter & De-Cringer

> Audit, de-cringe, format, and transform your LinkedIn posts into high-converting copy and PDF carousels without typical corporate AI hallucinations.

[![Live Demo](https://img.shields.io/badge/Live_Demo-🚀_Click_Here-00f5ff?style=for-the-badge&logo=linkedin)](https://aitools-guru.github.io/cringeshield/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-cringeshield-181717?style=for-the-badge&logo=github)](https://github.com/AItools-guru/cringeshield)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Stack](https://img.shields.io/badge/Stack-Vite_|_Vanilla_JS_|_CSS3_|_Gemini_API-blueviolet?style=for-the-badge)](https://vitejs.dev/)

---

## ⚡ Live Interactive App
👉 **[Launch CringeShield Live Demo](https://aitools-guru.github.io/cringeshield/)**

---

## 🌟 What is CringeShield?

Most AI writing tools generate robotic corporate fluff full of overused buzzwords (*"delve"*, *"testament"*, *"synergy"*, *"game-changer"*), scattered hashtags, and screen-reader-breaking Unicode font hacks.

**CringeShield** is a 100% private, client-side web application designed for Product Managers, Developers, and Creators. It audits your draft against real-world engagement patterns, purges corporate jargon, calculates readability scores, provides real-time mobile feed previews, and generates downloadable **PDF Carousel Slides** ready for LinkedIn uploads.

---

## 🏆 Competitor Benchmarking Matrix

| Feature | AuthoredUp | Taplio | Typegrow | aiCarousels | **CringeShield (Our Tool)** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cringe & Buzzword Detection** | ❌ No | ❌ No | ❌ No | ❌ No | ✅ **Dynamic Cringe Score (0-100%)** + Buzzword Radar |
| **Accessibility (A11y) Guard** | ❌ Promotes Unicode hacks | ❌ | ❌ | N/A | ✅ **Flags screen-reader breaking unicode fonts** & mid-text hashtags |
| **De-Cringifier AI Engine** | ❌ | ⚠️ Generic | ⚠️ Generic | ⚠️ Slide AI | ✅ **Gemini 2.5 Flash** + 4 Copywriting Frameworks (PAS, AIDA, Hook-CTA, Contrarian) |
| **Before vs After Diff View** | ❌ | ❌ | ❌ | ❌ | ✅ **Side-by-Side Visual Diff** highlighting deleted buzzwords in red & additions in green |
| **Viral Hook & CTA Vault** | ✅ (Paid) | ✅ (Paid) | ✅ | ❌ | ✅ **35+ Built-in Hooks & CTAs** with 1-click insertion |
| **PDF Carousel Generator** | ❌ | ❌ | ❌ | ✅ (Paid) | ✅ **4:5 Carousel Slide Creator** with 5 themes & PDF export |
| **Flesch-Kincaid Readability** | ⚠️ Basic | ❌ | ⚠️ Basic | ❌ | ✅ **Flesch Reading Ease Grade** score + sentence complexity telemetry |
| **Privacy & Security** | ⚠️ Cloud | ⚠️ Cloud | ⚠️ Cloud | ⚠️ Cloud | ✅ **100% Client-Side**, Zero Server Storage, Encrypted Local API Key |

---

## 🔥 Key Features

### 📊 1. Real-Time Cringe Meter & Telemetry Radar
- **Dynamic Speedometer Gauge**: Circular SVG gauge measuring overall post "cringe" (0% to 100%).
- **Telemetry Category Progress Bars**:
  - *AI Buzzword Level* (Detects 30+ corporate filler words)
  - *Broetry Spacing Score* (Flags single-sentence line spam)
  - *Emoji & Clutter Density*
  - *Accessibility & Spacing* (Checks for screen-reader accessibility issues)

### ⇄ 2. Visual "Before & After" Diff Engine
- Compare your raw original draft side-by-side with the de-cringed AI output.
- **Red Strikethrough Tags (`🔴`)**: Highlights removed corporate jargon and filler words.
- **Green Highlight Tags (`🟢`)**: Highlights added high-impact value statements and structured phrases.

### 🎠 3. 1-Click PDF Carousel Slide Creator
- Automatically splits your post into mobile-optimized **4:5 ratio carousel slides**.
- **5 Aesthetic Themes**: Cyberpunk Dark (Neon), Minimalist Light, Electric Blue, Emerald Tech, Warm Sunset.
- **Custom Branding**: Configurable brand title and handle watermark (`@saurabhshidhore`).
- **PDF Export**: Generates a multi-page PDF document in 1 click ready for LinkedIn Document uploads!

### ⚡ 4. Viral Hook & High-Converting CTA Vault
- Built-in library of 35+ proven hook openers and call-to-actions across 5 categories:
  - *🔥 Curiosity Openers*
  - *📊 Data-Driven Insights*
  - *⚡ Contrarian PM Takes*
  - *🚀 Story Starters*
  - *🎯 High-Converting CTAs*
- Smart placement engine: Prepends hooks to top; appends CTAs to bottom.

### 📖 5. Flesch-Kincaid Readability Telemetry
- Computes Flesch Reading Ease grade level live as you type.
- Ensures your post targets the optimal reading complexity for maximum mobile engagement (6th–9th Grade).

### 📁 6. Local Workspace Drafts Manager
- Auto-saves drafts every 3 seconds to browser `localStorage`.
- Includes draft history drawer to save, load, delete, or export all drafts as JSON.

---

## 🔒 Security & Privacy Guarantees

1. **100% Client-Side Processing**: Zero user data or post drafts are sent to external servers or analytics databases.
2. **Local Key Storage**: Your Gemini API Key is saved strictly in your browser's private `localStorage`.
3. **Strict XSS Sanitization**: Dynamic HTML markup is filtered through escaping utilities to prevent XSS vulnerabilities.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: Vanilla HTML5, Modern CSS3 (Glassmorphism & HSL CSS Design Tokens), JavaScript (ESNext).
- **Build Engine**: [Vite 8.1](https://vitejs.dev/)
- **PDF Engine**: `jsPDF` & `html2canvas`
- **AI Integration**: Direct client-side fetch to `google-gemini-2.5-flash`.

---

## 🚀 Quick Start (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/AItools-guru/cringeshield.git
cd cringeshield
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run local dev server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Deployment to GitHub Pages

To deploy CringeShield to GitHub Pages:
1. Run `npm run build`
2. Push the contents of the `dist/` directory to the `gh-pages` branch on GitHub repository.

Live URL: **[https://aitools-guru.github.io/cringeshield/](https://aitools-guru.github.io/cringeshield/)**

---

## 📝 License
This project is licensed under the [MIT License](LICENSE). Created with ❤️ by **[AItools-guru](https://github.com/AItools-guru)**.
