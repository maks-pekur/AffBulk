🧩 Test Assignment
📋 Overview

Test 1 — Form Specification Parser
Parses semicolon-separated text (row;col;label;type;[extra]) into a dynamic form with instant live preview.

Test 2 — Responsive Headings (No Overflow)
Fits long headings inside 320 px containers without breaking words or using JS effects.

⚙️ Stack

React · TypeScript · Vite · Zustand · React Router · TailwindCSS

🚀 Run Locally
npm install
npm run dev

# open http://localhost:5173

🧭 Routes
Path Description
/element-drawer Form parser (main task)
/fit-heading Heading fit task


🧪 Test 1 — Form Builder

Input format: row;col;label;type;[placeholder/options]

Supported types: TEXT_INPUT, SELECT

One element → full row; multiple → equal columns

Live preview, validation, demo data and clear actions


🧩 Test 2 — Heading Fit (No Overflow)

Goal: keep max 42 px font size, no scroll, no word breaks, no useEffect.

Pure render logic:

fontSize = min(42, floor(320 / (longestWordLength \* 0.55)))

→ The longest unbreakable word always fits within 320 px.
No DOM measurements or listeners used.
