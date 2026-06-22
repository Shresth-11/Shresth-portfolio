# Shresth Jaiswal — Neo-Brutalist Retro Portfolio v1.0

A professional, high-fidelity portfolio website built with a light cream **Neo-Brutalist Retro Desktop OS** design aesthetic. It incorporates clean semantic structures, custom responsive layouts, interactive widget panels, and custom vector cursors.

---

## 🚀 Live Demo & Repository
- **Repository**: [github.com/Shresth-11/Shresth-portfolio](https://github.com/Shresth-11/Shresth-portfolio)
- **Deployment Target**: Vercel Edge Networks

---

## 🛠️ Technology Stack
1. **Core**: HTML5 (Semantic Structure) & ES6+ JavaScript (Logic & Widgets)
2. **Styling**: Vanilla CSS3 (Custom Variables, Grid/Flexbox layouts, hover-press transformations, and Keyframe animations)
3. **Configurations**: Vercel configuration for clean routing (`vercel.json`)
4. **Assets**: Custom vectors (SVGs) and local image frames (`profile.jpg`)

---

## ✨ Outstanding Features

### 1. Retro OS Diagnostics Boot Loader
A simulated full-screen console window overlay (`SYSTEM_BOOT.BAT`) that prints system logs, memory mounts, stylesheets verification, and credential checks line-by-line before sliding out to reveal the main screen.

### 2. Interactive Terminal Console Shell
An embedded command shell simulator (`guest@shresth-os:~`) supporting terminal inputs and quick dial shortcuts:
- `help` — Prints the system help menu.
- `about` — Prints biography and background credentials.
- `projects` — Lists your primary product ledger.
- `skills` — Outputs core stack competencies.
- `resume` — Confirms logs and launches your PDF resume in a new tab.
- `clear` — Resets console history.

### 3. Graph-Paper Doodle Canvas (Sketchpad)
A custom graphics drawing widget (`sketchpad.exe`) mapped with touch and mouse events. Features custom brush size controls, color swatch toggles (primary red, black, mint, blue), erasers, canvas flushes, and background grid-line filters.

### 4. Custom Vector Cursor Pointers
- **Default Pointer**: Custom retro arrow cursor (solid pink fill with a bold black border outline) that tracks across neutral page elements.
- **Hover Pointer**: Swaps cursor fill to warm yellow when hovering over nav links, buttons, swatches, and accordion triggers. Enforced with `!important` to prevent class-specific cursor overrides.

### 5. Unified Directory Project Cards
Showcases your primary project portfolio (*Typemate Editor*, *BlogSphere*, *Wanderlust*) structured as retro window directory blocks containing title frames, square GitHub icon links, live project badges, descriptions, stack tags, and full-width "LIVE DEMO" launch buttons.

### 6. Timeline Chronicle & Telemetry Footer
- **Timeline**: Outlines work history and academic logs in styled brutalist cards carrying custom tags.
- **Telemetry**: Footer tracking GMT time clocks, timezone zones, and active session uptimes in seconds since loading the page.

---

## 💻 Local Setup & Development

To run the portfolio locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/Shresth-11/Shresth-portfolio.git
   cd Shresth-portfolio
   ```
2. Launch a local HTTP server (such as Python's built-in module):
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your web browser.

---

## 📦 Vercel Deployment

Deploying this portfolio on Vercel is extremely fast and requires zero build overhead:

### Option 1: Import via Vercel Dashboard
1. Push your local repository commits to GitHub.
2. Sign in to your [Vercel Dashboard](https://vercel.com/dashboard).
3. Select **Add New** > **Project** and import your portfolio repository.
4. Leave the default configurations (no build step or command needed) and click **Deploy**.

### Option 2: Deploy using Vercel CLI
Ensure you have the Vercel CLI installed, then open your terminal inside the portfolio workspace directory and run:
```bash
vercel --prod
```
