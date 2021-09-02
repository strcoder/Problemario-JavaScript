const menuOpen = document.getElementById('MenuOpen');
const menuClose = document.getElementById('MenuClose');
const headerNav = document.getElementById('HeaderNav');

menuClose.addEventListener('click', () => {
  headerNav.style.display = 'none';
});

menuOpen.addEventListener('click', () => {
  headerNav.style.display = 'flex';
});
