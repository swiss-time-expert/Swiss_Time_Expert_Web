let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-card');
  if (!header) return;
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Se scendi giù e hai superato gli 80px, nasconde il banner
  if (scrollTop > lastScrollTop && scrollTop > 80) {
    header.classList.add('header-hidden');
  } else {
    // Se sali su, lo fa riapparire
    header.classList.remove('header-hidden');
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});