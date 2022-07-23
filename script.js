window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  console.log(menuElement)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
  #about .content, 
  #contact,
  #contact header,
  #contact .content
`)
