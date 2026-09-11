# Anil Reddy Portfolio — 5 Page Static Site

This project is a complete static portfolio website. No build system is required.

## Pages

- `index.html` — Introduction to Anil Reddy
- `experience.html` — Experience and selected credits
- `ott.html` — Fit for Content Development / Acquisitions roles at OTT platforms and production houses
- `work.html` — Films and embedded project videos
- `gallery.html` — BTS / filmmaking photo archive

## Project structure

```
anil-reddy-portfolio-site/
├── index.html
├── experience.html
├── ott.html
├── work.html
├── gallery.html
├── styles.css
├── script.js
└── assets/
    ├── anil-reddy-cv.pdf
    ├── anil-reddy-portfolio.pdf
    └── media/
        ├── thulasivanam-official-trailer.mp4
        ├── thulasivanam-poster.jpg
        ├── ee-nagaraniki-emaindi-comedy-scene.mp4
        └── ene-poster.jpg
```

## Open it locally

The simplest method is to double-click `index.html`.

For the most accurate local test, run a tiny web server from inside the folder:

### Python

```bash
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### VS Code

Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

## How to add BTS images later

1. Put your images in `assets/media/bts/`.
2. In `gallery.html`, replace a placeholder block such as:

```html
<figure class="gallery-item tall">
  <div class="gallery-placeholder">...</div>
</figure>
```

with:

```html
<figure class="gallery-item tall">
  <img src="assets/media/bts/your-photo.jpg" alt="Behind the scenes on Thulasivanam">
  <figcaption class="gallery-label"><span>BTS</span><span>Thulasivanam</span></figcaption>
</figure>
```

Use `tall`, `wide`, or `square` depending on the photograph.

## How to add another film/video

Copy one of the `.film-project` sections in `work.html`, change the title / role / copy, place the new MP4 and poster image inside `assets/media/`, and update the `<source>` and `poster` paths.

For faster public websites, Vimeo or YouTube embeds can be used instead of shipping very large MP4 files with the site.

## Hosting — easiest options

### Netlify Drop — easiest, no coding

1. Go to Netlify and create an account.
2. Open Netlify Drop / manual deploy.
3. Drag the entire `anil-reddy-portfolio-site` folder into the upload area.
4. Netlify creates a public URL immediately.
5. In Site settings, change the site name or connect a custom domain.

### Vercel

1. Create a GitHub repository.
2. Upload all files from this folder to the repository root.
3. Sign in to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Framework preset: **Other** / static site. No build command is needed.
6. Deploy.
7. Connect a custom domain from Project Settings → Domains.

### GitHub Pages

1. Create a GitHub repository.
2. Upload the project files.
3. Open **Settings → Pages**.
4. Under Source choose **Deploy from a branch**.
5. Select `main` and `/root`.
6. Save. GitHub will publish the site.

## Recommended final setup

For a professional portfolio, use either Netlify or Vercel and connect your own domain. Before public launch, compress videos or host them on Vimeo so the first page remains fast on mobile networks.

## Design notes

The website intentionally uses a five-page editorial structure rather than a resume-style one-page layout. The design gives moving-image work more visual space, keeps credits highly scannable, treats the OTT section as its own argument, and reserves a separate visual archive for BTS imagery.


## Current media update
- BTS gallery: 88 photographs total.
- Latest added set: 13 Pelli Choopulu-era archive images.
- `assets/anil-reddy-cv.pdf` is the current OTT CV supplied by Anil.
- `assets/anil-reddy-portfolio.pdf` is the current final portfolio PDF supplied by Anil.
