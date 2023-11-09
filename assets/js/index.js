const menu = document.querySelector('.header_menu')

const headerNav = document.querySelector('.navbar')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.btn--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.list-link')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.list-link')

    for (const link of links) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
})

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
  menu.classList.remove('show--menu')
}
})