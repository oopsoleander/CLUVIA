# CLUVIA — VIP Nightlife Guest List Platform

CLUVIA is a luxury nightlife guest list platform designed to convert Instagram traffic into verified club guests.

The platform allows users to apply for guest list access to premium nightclubs in Delhi through a clean, high-trust web experience.

This project is built using **React + Vite** and deployed on **Vercel**.

---

# Project Purpose

Nightclub promoters often rely on Instagram DMs to collect guest list entries.
This process is messy, time-consuming, and hard to scale.

CLUVIA solves this problem by providing:

* A professional landing page for nightlife events
* A structured guest list application funnel
* A premium brand experience for high-quality crowd

The goal is to **convert social media traffic into verified club guests efficiently**.

---

# Key Features

* Luxury nightclub themed UI (black + gold aesthetic)
* Countdown timer for upcoming events
* Live visitor simulation
* Urgency messaging (spots left tonight)
* Animated statistics for social proof
* Event cards with venue information
* FAQ section for user trust
* Live booking notifications
* Mobile-responsive design
* Fast React + Vite architecture
* Deployable on Vercel

---

# Tech Stack

Frontend Framework:
React

Build Tool:
Vite

Language:
JavaScript

Hosting:
Vercel

Version Control:
Git + GitHub

---

# Project Structure

```
cluvia
│
├ index.html
├ package.json
├ vite.config.js
├ .gitignore
├ .env.example
│
├ public
│   └ favicon.svg
│
└ src
    │
    ├ main.jsx
    ├ App.jsx
    │
    ├ components
    │   ├ Navbar.jsx
    │   ├ Hero.jsx
    │   ├ Events.jsx
    │   ├ Countdown.jsx
    │   ├ VisitorSimulator.jsx
    │   ├ UrgencyBar.jsx
    │   ├ AnimatedStats.jsx
    │   ├ LiveBookings.jsx
    │   ├ FAQ.jsx
    │   └ Footer.jsx
    │
    ├ hooks
    │   └ useReveal.js
    │
    ├ data
    │   └ events.js
    │
    └ styles
        └ globals.css
```

---

# Local Development

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

# Deployment

This project is optimized for deployment on **Vercel**.

Steps:

1. Push the repository to GitHub
2. Go to vercel.com
3. Import the GitHub repository
4. Deploy

Vercel automatically detects the **Vite framework** and builds the project.

---

# Environment Variables

Example environment variables are defined in:

```
.env.example
```

Example:

```
VITE_API_URL=
VITE_FORM_ENDPOINT=
```

These will be used for future integrations such as APIs or form endpoints.

---

# Future Improvements

Possible future upgrades for CLUVIA:

* Admin dashboard for promoters
* Guest list database
* WhatsApp confirmation automation
* Attendance tracking
* Event management system
* Promoter payout tracking

---

# License

This project is currently private and intended for internal use.
