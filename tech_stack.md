# Mastercard Prep Bento UI WebApp — Technology Stack (`tech_stack.md`)

## 1. Overview & Architecture Selection
To ensure a ultra-fast, responsive, zero-latency experience with offline capabilities, the application is built using a modern Client-Side Web Architecture with state persistence.

---

## 2. Technology Stack Breakdown

| Layer | Technology Chosen | Rationale & Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18+ (Vite)** | Lightning-fast HMR, modular component architecture, lightweight bundle, and easy deployment. |
| **Styling & Design** | **Vanilla CSS + CSS Grid (Bento UI Tokens)** | Full control over Bento Grid layout math, custom glassmorphic properties, CSS variables for Mastercard brand theme (`#FF5F00`, `#EB001B`, `#F79E1B`), and zero library overhead. |
| **Iconography** | **Lucide Icons (`lucide-react`)** | Clean, modern vector icons for DSA topics, status badges, week timelines, and STAR stories. |
| **State & Data Store** | **React Hooks + `localStorage` API** | Instant client-side persistence of problem completion, notes, application statuses, and custom STAR stories without requiring external DB setup. Option for JSON export/import. |
| **Prototyping & Design** | **Stitch MCP** | AI design system generation & screen layout prototyping in Stitch Bento UI style. |
| **Data Visualization** | **SVG & HTML5 Custom Gauges** | Lightweight SVG progress rings, interactive heatmaps, and completion bar charts without bulky heavy chart library dependencies. |

---

## 3. Key Design Tokens & Theme Variables

```css
:root {
  /* Color Palette - Nocturnal Mastercard Theme */
  --bg-dark: #0b0f17;
  --bg-surface-low: #131924;
  --bg-surface: #1a2232;
  --bg-surface-high: #242f44;
  --bg-glass: rgba(26, 34, 50, 0.75);
  
  /* Mastercard Accents */
  --accent-primary: #ff5f00;   /* Mastercard Orange */
  --accent-secondary: #eb001b; /* Mastercard Red */
  --accent-gold: #f79e1b;      /* Mastercard Yellow/Gold */
  --accent-success: #10b981;   /* Emerald Success */
  --accent-info: #3b82f6;      /* Bright Blue Info */

  /* Text & Border */
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(255, 95, 0, 0.5);

  /* Elevation & Blur */
  --shadow-bento: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --blur-glass: blur(16px);
  --radius-bento: 16px;
  --radius-pill: 9999px;
}
```

---

## 4. Development & Deployment Settings
- **Build Tool**: Vite (`npm run build`)
- **Package Manager**: npm
- **Deployment Platform**: Vercel (Zero-config static deployment)
- **Vercel Routing**: [vercel.json](file:///c:/Users/vinit/OneDrive/Desktop/MasteCard/vercel.json) single-page app rewrite configuration (`/.*` -> `/index.html`)
- **Git Ignore**: [.gitignore](file:///c:/Users/vinit/OneDrive/Desktop/MasteCard/.gitignore) configured to exclude `node_modules` and `dist`
- **Browser Compatibility**: Modern Evergreen Browsers & Android Chrome/Edge/Firefox

