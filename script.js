const revealItems = document.querySelectorAll('.reveal');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('siteNav');

if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -30px 0px'
  });

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}
