# Reference study and design decisions

The four main reference homepages and supporting references were read on 11 September 2026. The browser connection was unavailable, so actual pointer, timing, scroll and mobile behavior could not be interactively verified. Observations below distinguish accessible content from design decisions. This is not a claim that every requested behavior was tested.

## Main references

- [Simon Tonev](https://www.simontonev.com/): a showreel-led opening, prominent director/DP identity, and distinct films, stills, storyboards, about and contact navigation. Applied the clear identity and separation of moving-image work from still photography.
- [Jason Bergh](https://www.jasonbergh.com/): extensive film entries combine titles, formats, clients and synopsis/info content with playback, audio, fullscreen and next/previous controls. Applied generous film presentation and a clear separation of project, role and contribution.
- [Natascha Vavrina](https://nataschavavrina.com/): expressive name typography, director/DP categories, dedicated images and about/contact navigation; accessible content exposes gallery, play/pause and close actions. Applied an oversized typographic identity and an immersive chapter menu.
- [Salomon Ligthelm](https://salomon-ligthelm.squarespace.com/): work-led archive with project titles and moving-image presentation. Applied a restrained film-viewing surface and spacious project hierarchy.

## Supporting references

[Lisa Cambours](https://www.lisacambours.com/) exposes detailed collaborator credits and film/photo project distinctions. [Alexandros Maragos](https://alexandrosmaragos.com/home/) and [SiteBuilderReport’s collection](https://www.sitebuilderreport.com/inspiration/filmmaker-portfolios) supplied broader portfolio context. The supplied Awwwards and SiteInspire URLs returned retrieval errors and were not treated as verified references.

## Interaction decisions

| Requested study area | Implementation / limitation |
| --- | --- |
| Homepage, typography, cinematic feeling | Oversized sans/serif name, plum and lime palette, expansive Thulasivanam frame, portrait and statement. |
| Loading animation, text reveal | Brief CSS entry reveal. No artificial loading counter or delay. Content is rendered in HTML and remains readable without JavaScript. |
| Navigation, menu, contact | Five real HTML pages; active chapter; native modal mobile menu; email, telephone and document links on every page. |
| Scroll, smooth scrolling, fullscreen sections | Native scrolling and smooth anchor movement; fullscreen chapter menu. No scroll hijacking. |
| Page and image transitions | Progressive cross-document View Transitions where supported, image scaling on hover, reduced-motion fallback. |
| Cursor and click interactions | Normal cursor and visible focus; directional link hover; click-to-expand contribution details. |
| Video autoplay and hover previews | User-initiated playback of supplied full clips, native audio/seeking/fullscreen controls, pause when offscreen or tab hidden. Avoids downloading 100+ MB just to animate the homepage. |
| Project thumbnails, grid, detail pages | Large poster-led film presentations, linked credits and inline contribution details. Two supplied clips do not justify an oversized archive or extra project routes. |
| Horizontal scrolling | Not used: the short work selection reads better vertically. Gallery naturally becomes multiple columns when photos are supplied. |
| BTS, archive, gallery transitions | Dedicated gallery, captioned masonry layout and modal lightbox with previous/next, arrows and Escape. No BTS files were supplied; a truthful empty state is shown. |
| Mobile, responsive behavior | CSS breakpoints, stacked layouts, readable controls and native video controls. Browser-based verification remains outstanding. |
| About and credits | Architecture background, professional statement and credits verified from the supplied PDFs. |

## Content accuracy

The CV supports Thulasivanam, Pelli Choopulu, Ee Nagaraniki Emaindi and freelance experience. The original scaffold included other titles and acting claims not established by the supplied CV/portfolio; these were not carried into the verified credit list. The date range on the two feature credits denotes VG Media tenure, not release dates. The portrait is cropped from page 6 of the supplied portfolio. No fictional BTS photographs, audience metrics, deal credits or awards attributed personally to Anil were added.

The OTT page is a proposed application of existing skills, not a claim of previous acquisition employment. No specific employer/job description was supplied, so it addresses the role generally.
