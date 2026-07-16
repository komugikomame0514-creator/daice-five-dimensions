
const searchInput = document.getElementById("songSearch");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const songCards = [...document.querySelectorAll(".song-card")];
const resultCount = document.getElementById("songCount");
const noResults = document.getElementById("noResults");
let activeFilter = "all";

function updateSongs(){
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  songCards.forEach(card => {
    const searchable = `${card.dataset.title} ${card.dataset.tags}`.toLowerCase();
    const matchesText = searchable.includes(term);
    const matchesFilter = activeFilter === "all" || card.dataset.tags.split(" ").includes(activeFilter);
    const show = matchesText && matchesFilter;
    card.classList.toggle("hide", !show);
    if(show) visible++;
  });
  resultCount.textContent = `${visible} SONGS`;
  noResults.classList.toggle("show", visible === 0);
}
searchInput.addEventListener("input", updateSongs);
filterButtons.forEach(btn => btn.addEventListener("click", () => {
  filterButtons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  updateSongs();
}));
updateSongs();
