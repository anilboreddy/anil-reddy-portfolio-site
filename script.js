const menu=document.querySelector('#menu');
const menuButton=document.querySelector('.menu-toggle');
menuButton?.addEventListener('click',()=>{menu.showModal();menuButton.setAttribute('aria-expanded','true')});
document.querySelector('.close-menu')?.addEventListener('click',()=>menu.close());
menu?.addEventListener('close',()=>menuButton.setAttribute('aria-expanded','false'));
const videos=[...document.querySelectorAll('.film video')];
videos.forEach(video=>{video.addEventListener('play',()=>videos.forEach(other=>{if(other!==video)other.pause()}));video.querySelector('source')?.addEventListener('error',()=>{video.closest('.film').querySelector('.video-error').hidden=false})});
document.addEventListener('visibilitychange',()=>{if(document.hidden)videos.forEach(video=>video.pause())});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)entry.target.pause()}),{threshold:.05});videos.forEach(video=>observer.observe(video))}
const photos=window.BTS_PHOTOS||[];
const grid=document.querySelector('#gallery-grid');
const lightbox=document.querySelector('#lightbox');
let currentPhoto=0;
function showPhoto(index){currentPhoto=(index+photos.length)%photos.length;const p=photos[currentPhoto];const img=lightbox.querySelector('img');img.src=p.src;img.alt=p.alt;document.querySelector('#photo-caption').textContent=`${currentPhoto+1} / ${photos.length} — ${p.caption||p.alt}`;if(!lightbox.open)lightbox.showModal()}
if(grid&&photos.length){document.querySelector('#gallery-empty').hidden=true;photos.forEach((p,i)=>{const button=document.createElement('button');button.className='gallery-item';button.setAttribute('aria-label',`Enlarge: ${p.alt}`);const img=document.createElement('img');img.src=p.src;img.alt=p.alt;img.loading='lazy';const caption=document.createElement('span');caption.textContent=p.caption||p.alt;button.append(img,caption);button.addEventListener('click',()=>showPhoto(i));grid.append(button)})}
document.querySelector('.close-dialog')?.addEventListener('click',()=>lightbox.close());
document.querySelector('#previous-photo')?.addEventListener('click',()=>showPhoto(currentPhoto-1));
document.querySelector('#next-photo')?.addEventListener('click',()=>showPhoto(currentPhoto+1));
lightbox?.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(currentPhoto+1)}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(currentPhoto-1)}});
lightbox?.addEventListener('click',event=>{if(event.target===lightbox){const r=lightbox.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lightbox.close()}});
const previewLink=document.querySelector('.hero-image');
const preview=document.querySelector('.hover-preview');
const motionAllowed=()=>matchMedia('(hover: hover) and (pointer: fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!navigator.connection?.saveData;
previewLink?.addEventListener('pointerenter',async()=>{if(!motionAllowed())return;if(!preview.src)preview.src=preview.dataset.src;try{preview.muted=true;await preview.play();if(previewLink.matches(':hover'))previewLink.classList.add('previewing');else preview.pause()}catch{previewLink.classList.remove('previewing')}});
function stopPreview(){preview?.pause();previewLink?.classList.remove('previewing')}
previewLink?.addEventListener('pointerleave',stopPreview);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPreview()});
if(preview&&'IntersectionObserver' in window)new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)stopPreview()}).observe(preview);
