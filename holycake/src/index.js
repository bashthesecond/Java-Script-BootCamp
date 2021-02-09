import panImage from './functions.js'

const toggleControl = document.querySelector('.nav-toggle')
const mobileNav = document.querySelector('.mobile-nav')

toggleControl.addEventListener('click', (e) => {
    mobileNav.classList.toggle('active')
})

