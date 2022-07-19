function onScroll() {
  let element = document.querySelector('#navigation')
  scrollY > 0
    ? element.classList.add('scroll')
    : element.classList.remove('scroll')
}
