const activePage = window.location.pathname;
const navLinks =  document.querySelectorAll('nav a').forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active');
  }
});