# Anil Reddy — portfolio

A five-page static portfolio built from the supplied CV, portfolio PDF and film clips. Rich plum, warm white and lime, oversized typography, restrained motion and a film-led layout.

## Open the website

Open `dist/index.html` in your browser. All five pages, documents and videos work without a framework or external font service.

For the most accurate local experience, open PowerShell in this project folder and run:

```powershell
node build.mjs
node serve.mjs
```

Visit **http://127.0.0.1:8080**. Stop the server with Ctrl+C. If `node` is not recognised on this computer, use:

```powershell
& 'C:/Program Files/nodejs/node.exe' build.mjs
& 'C:/Program Files/nodejs/node.exe' serve.mjs
```

No dependency installation is needed to build or serve the website. Node 22 or newer is suitable.

## Five pages

| Page | Contents |
| --- | --- |
| `index.html` | Introduction, selected film, portrait, statement and contact |
| `experience.html` | Verified credits, contribution details and education |
| `ott.html` | Content development/acquisitions fit, evidence and proposed approach |
| `films.html` | Thulasivanam trailer and Ee Nagaraniki Emaindi scene |
| `gallery.html` | BTS gallery with captions and keyboard-operated lightbox |

## Change text, colours or media

- Edit text and project information in **`build.mjs`**. It generates the five HTML pages; direct edits to those HTML files will be overwritten next time you build.
- Edit **`styles.css`** for the visual design, including mobile layouts. Main colours: plum `#211525`, white `#f7f3ed`, lime `#d9ed92`.
- Edit **`script.js`** for menus, video behavior and gallery interactions.
- Replace the PDFs in `assets/` to update downloadable documents.
- Run `node build.mjs` after changes. Upload the refreshed **`dist`** folder, not the whole source folder.
- Run `node --check script.js` and `node validate.mjs` to check syntax, all five routes, local links and deployed media sizes.

## Add your BTS photos

The supplied assets do not include BTS photographs. The page intentionally says that the archive is coming soon; the portfolio PDF's decorative images are not misrepresented as real set photographs.

1. Create `assets/bts/` and place your photographs there. Use descriptive filenames and web-sized JPG or WebP images.
2. Open `gallery-data.js` and replace the empty array:

```javascript
window.BTS_PHOTOS = [
  {
    src: 'assets/bts/thulasivanam-on-set.jpg',
    alt: 'Anil discussing a scene with the crew on set',
    caption: 'Thulasivanam — between takes'
  },
  {
    src: 'assets/bts/location-rehearsal.jpg',
    alt: 'The cast rehearsing together on location',
    caption: 'Rehearsal on location'
  }
];
```

3. Use your real filenames and accurate descriptions. Run `node build.mjs`.

The empty state disappears automatically. Clicking a photograph opens it; arrow buttons or Left/Right keys change photographs, and Escape closes the viewer. No uploads or database are needed.

## Film files and playback

The original 1080p clips remain intact in `assets/media/`. The deployed site uses smaller 720p H.264/AAC copies, plus an eight-second silent homepage hover preview. These fit the static host's per-file size limit. The originals and PDF page-extraction intermediates are excluded from the publishing output.

Full videos load when the visitor requests playback, with native controls for sound, seeking and fullscreen. Other films pause when one starts, and offscreen/background-tab videos pause. The silent homepage preview starts only on desktop hover; it is disabled for reduced motion and Save-Data. Posters remain the fallback if preview playback is blocked. No caption tracks were supplied.

The extraction helper `extract-assets.mjs` was used once to read the PDFs. It requires `pdfjs-dist` and `@napi-rs/canvas` if rerun; normal site builds do not use it.

## Host it yourself

The finished **`dist`** folder can be hosted as ordinary static files. A straightforward option is Netlify's documented drag-and-drop deployment:

1. Run `node build.mjs` and `node validate.mjs`.
2. Sign in to Netlify and open [Netlify Drop](https://app.netlify.com/drop).
3. Drag the **`dist` folder** into the upload area.
4. Review the generated address and your project's visibility before sharing it with recruiters.
5. For updates, rebuild and upload the refreshed `dist` folder to that project's deploy dropzone.

Netlify also supports repository-based deployment; `netlify.toml` supplies the build command and output directory. See [Netlify's deployment instructions](https://docs.netlify.com/deploy/create-deploys/). For a custom domain, follow your host's domain settings and the DNS records it supplies; keep HTTPS enabled.

Sites hosting metadata is in `.openai/hosting.json`. A private Sites preview is only visible to its owner; it is not yet a public recruiter-facing link. Do not remove that metadata if continuing through Sites. Public sharing must be enabled deliberately.

## Design study and remaining inputs

See **`DESIGN-NOTES.md`** for the reference observations, decisions and limitations. Browser connection was unavailable, so live visual/mobile/interaction QA has not been completed. Before public release, review desktop and mobile widths, menu keyboard focus, playback/seeking/fullscreen and gallery behavior with your real photographs.

Content is grounded in the supplied documents. The OTT page describes how filmmaking experience transfers to the role; it does not claim acquisition deal experience. A specific OTT company/job description and the BTS photographs would allow the final tailoring.
