# P-MAN TECH — Demo E-commerce Static Site

This repository contains a static, client-side demo of a minimalist e-commerce site for the tech brand **P-MAN TECH**.

Features:
- Home page with hero and featured product (`pman.html`)
- Category shop pages: `smartphones.html`, `laptops.html`, `powerbanks.html`
- Responsive design with dark/light mode toggle
- Local shopping cart (stored in `localStorage`), product comparison tool, product reviews (localStorage), and search
- Lightweight SVG placeholders for product imagery (`assets/placeholder-*.svg`)

How to preview locally:
1. Open the HTML files directly in your browser. Example: open `pman.html`.
2. Or run a simple local server (recommended) with PowerShell:

```powershell
# From the project root
python -m http.server 8000
# Then open http://localhost:8000/pman.html
```

Notes on payments:
- This demo uses a placeholder checkout (`checkout.html`). To accept real payments, integrate a provider (Stripe, PayPal, etc.) and handle secrets server-side.
- Stripe integration quicknotes: use Stripe Checkout or Payment Intents, create a server endpoint to create sessions, and redirect clients to Stripe Checkout.

Publishing with GitHub Pages:
- You can publish the `main` branch (or a `gh-pages` branch) via the repository Settings → Pages. Select `main` and `/ (root)` as the source.

Next steps (suggested):
- Replace placeholder images with high-quality product photos.
- Add a catalog backend or static JSON API to manage product data.
- Integrate a payment provider and order persistence.

If you want, I can:
- Replace placeholders with your images (upload them here),
- Add a `gh-pages` branch and push a site-ready build, or
- Scaffold a minimal server (Node/Express) for payments.
