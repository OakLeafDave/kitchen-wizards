# The Kitchen Wizards — Website

A fast, responsive marketing site for **The Kitchen Wizards** (custom kitchens, baths & full renovations · Lawrence Township, NJ).

## Run locally
```bash
cd kitchen-wizards
python3 -m http.server 8425
# open http://localhost:8425
```
It's a static site — any web host (Netlify, Vercel, GitHub Pages, S3, etc.) works with no build step.

## Structure
```
kitchen-wizards/
├── index.html      # single-page site (hero, services, gallery, process, about, reviews, contact)
├── styles.css      # brand system: navy + brass/gold, Playfair Display + Inter
├── script.js       # sticky nav, mobile menu, scroll reveal, gallery lightbox, demo form
└── images/         # optimized Builders 22 kitchen photos (web + -sm thumbnails)
```

## Design
Warm, editorial aesthetic inspired by **Casa (getcasa.com)**: a dark near-black hero alternating with warm cream sections, large **Fraunces** serif display headlines ("Kitchens, taken care of."), clean **Inter** body, pill buttons and uppercase pill labels, amber accent badges, big rounded image cards, an arch logo mark, and a large dark footer. Gallery is organized by residence with a full-screen lightbox; a scroll-reactive serif image band echoes Casa's list treatment.

## Content sources
- **Copy, services, phone (609-647-2201), address (1177 Brunswick Pike, Lawrence Township, NJ 08648), reviews** — adapted from thekitchenwizards.com.
- **Photography** — real Kitchen Wizards kitchens from three **Builders 22** homes (Google Drive), resized/optimized for web (~6 MB total):
  - *The Morton Residence* — 156 Morton, Beach Haven (navy-island white kitchen)
  - *The Gregg Residence* — 35 Gregg, Beach Haven West (greige shaker island)
  - *The Beach Boulevard Residence* — 1706 Beach Blvd, Forked River (coastal, natural-stone waterfall islands)
  - Images were pulled at ~1600px via Google Drive's public thumbnail endpoint (`drive.google.com/thumbnail?id=…&sz=w1600`).

## To finish before launch
1. **Contact form** is a front-end demo (`kwSubmit` in `script.js`). Wire it to Formspree/Netlify Forms/your CRM, or replace with a mailto.
2. **Social links** in the footer are placeholders (`#`) — drop in the real Facebook/Instagram/YouTube URLs.
3. Optional: add more project galleries (each Builders 22 address folder has a full photo set).
4. Add a real favicon/logo file if you have the official Kitchen Wizards logo (currently a lightweight SVG wizard-hat mark).
