# Mastercard Prep Bento UI WebApp — Master Plan (`plan.md`)

## 1. Executive Summary & Objective
The goal is to build an interactive, high-performance, dark-mode **Bento Grid Web Application** tailored specifically to track **Vinit Mahale's 6-Week Mastercard SDE-1 / Associate Preparation Plan** as detailed in `Mastercard_Prep_Plan.md`. 

The web application will provide real-time progress tracking, LeetCode problem logging, Java/Security revision modules, STAR behavioral story builder, and job application tracking in a sleek Bento Grid dashboard.

---

## 2. Core Functional Requirements & Architecture

### A. Bento Grid Dashboard Core
1. **Master Overview Card (Bento Tile 1 - 2x2)**:
   - Dynamic overall completion score (calculated automatically based on sub-goals completed).
   - Week indicator badge (e.g., "Week 1–2: DSA Foundations").
   - Countdown timer / Target date widget.
   - Streaks counter and daily target indicator.

2. **Daily Action Focus (Bento Tile 2 - 2x1)**:
   - Today's recommended tasks based on the active week plan.
   - Quick-toggle completion checkmarks with micro-animations.
   - Direct link to daily LeetCode practice queue.

3. **6-Week Module Navigator (Bento Tile 3 - 3x1)**:
   - Interactive timeline switcher for Weeks 1 to 6.
   - Detailed topic checklist for each week:
     - **Week 1–2**: DSA (Arrays, Strings, HashMaps, Recursion, Trees, Profiles).
     - **Week 3**: Java Internals (JVM, GC, HashMap, Multithreading, Java 8+).
     - **Week 4**: System Design (REST, Indexing, Caching, Project Walkthroughs).
     - **Week 5**: Security & Payments (OAuth 2.0, JWT, Payment Tokenization).
     - **Week 6**: Mock Interviews & STAR Behavioral Stories (Decency Quotient).

4. **DSA Practice Tracker (Bento Tile 4 - 3x2)**:
   - Categorized problem list by topic (Arrays/Strings, HashMaps, Trees, etc.).
   - Difficulty tags (Easy, Medium).
   - Problem status toggles (Todo, In Progress, Solved).
   - Custom notes input for storing approach/complexity for quick revision.

5. **Flashcard & Concept Reviewer (Bento Tile 5 - 2x2)**:
   - Revision cards for Java Internals, System Design, and Mastercard Payment Security.
   - Self-assessment ratings (Needs Review, Confident, Mastered).

6. **Job Application & Pipeline Tracker (Bento Tile 6 - 2x2)**:
   - Tracker table for target applications (Company, Role, Date, Stage, Notes).
   - Visual pipeline status chips (Applied → OA → Technical R1 → Technical R2 → Final/HR).

7. **STAR Story Builder for Decency Quotient (DQ) (Bento Tile 7 - 2x2)**:
   - Structured template for STAR (Situation, Task, Action, Result) response drafting.
   - Pre-loaded prompts (Flutter/Supabase migration, team conflict, Mastercard vision).

---

## 3. Visual & Bento UI Design Specifications

- **Theme Aesthetic**: Modern Nocturnal Charcoal (`#0B0F17`) with Mastercard vibrant accents (`#FF5F00` / `#EB001B` / `#F79E1B` gold).
- **Layout Structure**: 4-column CSS Bento Grid on Desktop with smooth responsive collapse for Tablet and Mobile.
- **Glassmorphism**: Soft background blur (`backdrop-filter: blur(16px)`), sub-pixel translucent borders (`rgba(255, 255, 255, 0.08)`), and subtle tonal gradients.
- **Micro-interactions**: Hover elevation effects (`transform: translateY(-3px)`), progress fill animations, and toast notifications on check-offs.

---

## 4. Execution Strategy & Phasing

- **Phase 1**: Structure specification files (`plan.md`, `tech_stack.md`, `workflow.md`) and implementation blueprint.
- **Phase 2**: UI Design in Stitch / Component Assembly using Vite + React + Vanilla CSS Bento Grid design tokens.
- **Phase 3**: State Management & LocalStorage persistence (ensuring progress is stored locally without external backend lock-in).
- **Phase 4**: Content Population from `Mastercard_Prep_Plan.md` (pre-loading all DSA topics, Java concepts, security questions, and STAR prompts).
- **Phase 5**: Verification & Polish (responsive checks, keyboard accessibility, local storage backup export/import).
