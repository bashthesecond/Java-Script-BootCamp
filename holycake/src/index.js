import { editNode } from './functions'

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if (width < 941) {
    let parentEl = document.querySelector('.headerHeadingContainer')
    console.log(parentEl)
    const siteHeaderLink = document.querySelector('.siteHeaderLink')
    console.log(siteHeaderLink)
    const siteNav = document.querySelector('.site-nav')
    console.log(siteNav)
    parentEl.innerHTML = ""
    parentEl.appendChild(siteNav)
    parentEl.appendChild(siteHeaderLink)

}