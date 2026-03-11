# Bose India -- React Website Clone

A fully responsive, modern front-end clone of the official **Bose India** e-commerce website, built with **React 19**, **Vite**, and **Tailwind CSS v4**. This project replicates the premium look and feel of Bose's product showcase, including product listings, detailed product pages, and a polished UI experience across all devices.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages Overview](#pages-overview)
- [License](#license)

---

## About the Project

This project is a front-end recreation of the Bose India website built as a practice exercise in modern React development. It demonstrates component-based architecture, client-side routing, responsive design principles, and integration of a utility-first CSS framework. The application showcases Bose audio products including speakers, earbuds, and headphones with interactive UI elements such as color selectors, image galleries, and promotional banners.

---

## Features

- **Responsive Design** -- Optimized layout for mobile, tablet, and desktop viewports.
- **Client-Side Routing** -- Seamless page navigation using React Router DOM v7.
- **Interactive Product Cards** -- Dynamic color selection with visual feedback.
- **Image Gallery** -- Carousel-style product image viewer with thumbnail navigation.
- **Hero Banner** -- Full-width promotional section with call-to-action.
- **Promotional Sections** -- Multiple full-bleed promotional banners with hover animations.
- **Feature Highlights** -- Visual trust indicators for authenticity, shipping, and support.
- **Sound is Power Gallery** -- Multi-column image grid with hover overlay effects.
- **Sticky Navigation** -- Persistent header with search bar, user account, and cart icons.
- **Professional Footer** -- Organized footer with customer care and company links.

---

## Tech Stack

| Technology        | Version  | Purpose                            |
|-------------------|----------|------------------------------------|
| React             | 19.2.0   | UI library (functional components) |
| Vite              | 7.3.1    | Build tool and dev server          |
| Tailwind CSS      | 4.2.1    | Utility-first CSS framework        |
| React Router DOM  | 7.13.1   | Client-side routing                |
| Lucide React      | 0.577.0  | Icon library                       |
| ESLint            | 9.39.1   | Code linting and quality           |

---

## Project Structure

```
BOSE/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── EarbudsPage.jsx
│   │   ├── Home.jsx
│   │   └── SpeakerPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mananjani2102/web-sites-react.git
   cd web-sites-react/BOSE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at the URL displayed in the terminal (default: `http://localhost:5173`).

---

## Available Scripts

| Command             | Description                                      |
|---------------------|--------------------------------------------------|
| `npm run dev`       | Start the Vite development server with HMR       |
| `npm run build`     | Create a production-optimized build               |
| `npm run preview`   | Preview the production build locally              |
| `npm run lint`      | Run ESLint to analyze code for potential issues   |

---

## Pages Overview

### Home Page (`/`)

The landing page features a full-width hero banner, a recommended products grid with interactive color selectors, three promotional banners with hover-zoom effects, a trust features section, and a "Sound is Power" image gallery with overlay transitions.

### Speaker Page (`/speaker`)

A dedicated product detail page for the Bose SoundLink Flex Portable Speaker (2nd Gen). Includes a multi-image gallery with thumbnail navigation, color variant selector (6 options), pricing display, add-to-cart button, and a benefits summary panel.

### Earbuds Page (`/earbuds`)

A product detail page for the Bose QuietComfort Ultra Earbuds. Features a 6-image gallery with carousel navigation, color variant selector (5 options), product description, pricing, add-to-cart functionality, and a Nexxbase benefits panel.

---

## License

This project is built for educational and practice purposes only. All product images, logos, and branding belong to **Bose Corporation**. This project is not affiliated with or endorsed by Bose Corporation.
