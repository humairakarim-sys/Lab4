// Small optional enhancement: filter workshop cards through the search field.
// The required layout is implemented entirely with HTML and CSS.
const form = document.getElementById('search-form');
const search = document.getElementById('workshop-search');
const cards = [...document.querySelectorAll('.card')];
const noResults = document.getElementById('no-results');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const term = search.value.toLowerCase().trim();
  let visible = 0;
  cards.forEach((card) => {
    const matches = !term || card.dataset.search.includes(term) || card.textContent.toLowerCase().includes(term);
    card.hidden = !matches;
    if (matches) visible++;
  });
  noResults.hidden = visible > 0;
  document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' });
});
