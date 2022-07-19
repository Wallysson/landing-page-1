function onScroll() {
  let element = document.querySelector('#navigation')
  scrollY > 0
    ? element.classList.add('scroll')
    : element.classList.remove('scroll')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
