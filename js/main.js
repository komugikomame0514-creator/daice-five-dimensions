
const nav = document.querySelector(".site-nav");
window.addEventListener("scroll", () => {
  nav?.classList.toggle("scrolled", window.scrollY > 40);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const opening = document.getElementById("opening");
if(opening){
  window.addEventListener("load", () => {
    setTimeout(() => opening.classList.add("hide"), 1700);
  });
}
