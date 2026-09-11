(() => {
  const body = document.body;
  const loader = document.querySelector('.loader');
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu-panel');
  const cursor = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');

  const hideLoader = () => setTimeout(() => loader?.classList.add('is-hidden'), 760);
  if (document.readyState === 'complete') hideLoader(); else window.addEventListener('load', hideLoader, { once:true });

  menuBtn?.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
    body.style.overflow = !open ? 'hidden' : '';
  });

  document.querySelectorAll('.menu-panel a').forEach(a => a.addEventListener('click', () => {
    menuBtn?.setAttribute('aria-expanded','false'); menu?.classList.remove('is-open'); body.style.overflow='';
  }));

  document.querySelectorAll('a[href]').forEach(a => {
    const url = new URL(a.href, location.href);
    const sameOrigin = url.origin === location.origin;
    const htmlNav = sameOrigin && /\.html($|#|\?)/.test(a.getAttribute('href') || '');
    if (!htmlNav || a.target === '_blank') return;
    a.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault(); body.classList.add('is-transitioning');
      setTimeout(() => location.href = a.href, 520);
    });
  });

  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
  }), { threshold:.12, rootMargin:'0px 0px -4% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  if (window.matchMedia('(pointer:fine)').matches && cursor && dot) {
    let mx=0,my=0,cx=0,cy=0;
    window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px)`; });
    const loop=()=>{ cx+=(mx-cx)*.16; cy+=(my-cy)*.16; cursor.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); }; loop();
    document.querySelectorAll('a,button,.video-shell,.gallery-item').forEach(el => {
      el.addEventListener('mouseenter',()=>cursor.classList.add('is-active'));
      el.addEventListener('mouseleave',()=>cursor.classList.remove('is-active'));
    });
  }

  document.querySelectorAll('.video-shell').forEach(shell => {
    const video = shell.querySelector('video');
    const overlay = shell.querySelector('.video-overlay');
    if (!video) return;
    const play = async () => { try { await video.play(); video.controls=true; shell.classList.add('is-playing'); } catch(e){} };
    overlay?.addEventListener('click', play);
    video.addEventListener('pause', () => { if (!video.ended) shell.classList.remove('is-playing'); });
    video.addEventListener('ended', () => shell.classList.remove('is-playing'));
  });



  // Gallery lightbox
  const galleryItems = [...document.querySelectorAll('.gallery-item[data-gallery-index]')];
  const lightbox = document.querySelector('.gallery-lightbox');
  const lightboxImg = lightbox?.querySelector('.gallery-lightbox-stage img');
  const lightboxCount = lightbox?.querySelector('.gallery-lightbox-count');
  let galleryIndex = 0;
  const showGalleryImage = (index) => {
    if (!galleryItems.length || !lightbox || !lightboxImg) return;
    galleryIndex = (index + galleryItems.length) % galleryItems.length;
    const img = galleryItems[galleryIndex].querySelector('img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    if (lightboxCount) lightboxCount.textContent = `${String(galleryIndex+1).padStart(2,'0')} / ${String(galleryItems.length).padStart(2,'0')}`;
  };
  const openGallery = (index) => {
    if (!lightbox) return;
    showGalleryImage(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
    body.classList.add('gallery-lock');
  };
  const closeGallery = () => {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden','true');
    body.classList.remove('gallery-lock');
  };
  galleryItems.forEach((item,i) => item.querySelector('.gallery-open')?.addEventListener('click', () => openGallery(i)));
  lightbox?.querySelector('.gallery-close')?.addEventListener('click', closeGallery);
  lightbox?.querySelector('.gallery-prev')?.addEventListener('click', () => showGalleryImage(galleryIndex-1));
  lightbox?.querySelector('.gallery-next')?.addEventListener('click', () => showGalleryImage(galleryIndex+1));
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeGallery(); });
  window.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') showGalleryImage(galleryIndex-1);
    if (e.key === 'ArrowRight') showGalleryImage(galleryIndex+1);
  });

  const year = document.querySelector('[data-year]'); if (year) year.textContent = new Date().getFullYear();
})();
