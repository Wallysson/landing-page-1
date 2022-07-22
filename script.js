window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  let element = document.querySelector('#navigation')
  scrollY > 0
    ? element.classList.add('scroll')
    : element.classList.remove('scroll')
}

function showBackToTopButtonOnScroll() {
  let element = document.querySelector('#backToTopButton')
  scrollY > 600
    ? element.classList.add('show')
    : element.classList.remove('show')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: top,
  distance: '30px',
  duration: 600
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header, 
  #services .card, 
  #about,
  #about header,
  #about .content
`)
