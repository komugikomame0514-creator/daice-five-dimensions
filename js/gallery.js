
const galleryItems=[...document.querySelectorAll(".gallery-item")];
const filterButtons=[...document.querySelectorAll(".gallery-filter button")];
const lightbox=document.getElementById("galleryLightbox");
const lightboxImg=document.getElementById("lightboxImg");
const lightboxTour=document.getElementById("lightboxTour");
const lightboxTitle=document.getElementById("lightboxTitle");
const lightboxText=document.getElementById("lightboxText");
let visibleItems=galleryItems;let galleryIndex=0;
function applyGalleryFilter(filter){galleryItems.forEach(item=>item.classList.toggle("is-hidden",!(filter==="all"||item.dataset.tour===filter)));visibleItems=galleryItems.filter(item=>!item.classList.contains("is-hidden"));filterButtons.forEach(btn=>btn.classList.toggle("active",btn.dataset.filter===filter))}
filterButtons.forEach(btn=>btn.addEventListener("click",()=>applyGalleryFilter(btn.dataset.filter)));
function renderLightbox(){const item=visibleItems[galleryIndex];if(!item)return;const img=item.querySelector("img");lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightboxTour.textContent=item.dataset.tour.toUpperCase();lightboxTitle.textContent=item.dataset.title;lightboxText.textContent=item.dataset.text}
function openGallery(item){visibleItems=galleryItems.filter(x=>!x.classList.contains("is-hidden"));galleryIndex=Math.max(0,visibleItems.indexOf(item));renderLightbox();lightbox.classList.add("open");document.body.style.overflow="hidden"}
function closeGallery(){lightbox.classList.remove("open");document.body.style.overflow=""}
function moveGallery(dir){galleryIndex=(galleryIndex+dir+visibleItems.length)%visibleItems.length;renderLightbox()}
galleryItems.forEach(item=>item.addEventListener("click",()=>openGallery(item)));
document.getElementById("lightboxClose").addEventListener("click",closeGallery);
document.getElementById("lightboxPrev").addEventListener("click",()=>moveGallery(-1));
document.getElementById("lightboxNext").addEventListener("click",()=>moveGallery(1));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeGallery()});
document.addEventListener("keydown",e=>{if(!lightbox.classList.contains("open"))return;if(e.key==="Escape")closeGallery();if(e.key==="ArrowLeft")moveGallery(-1);if(e.key==="ArrowRight")moveGallery(1)});
applyGalleryFilter("all");
