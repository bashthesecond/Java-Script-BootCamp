import { panImage, mouseAnime, setTheme, dateTimeFetcher, greetUser } from './functions'
import jstz from 'jstz'

// // const panElement = document.querySelector('.container')
// // document.addEventListener('mousemove', (e) => {
// //     mouseAnime(e, panElement)
// // })

//Time Zone
let currentTimeZone = sessionStorage.getItem('timezone')
const dateTimeContainer = document.querySelector('.time--container')
const greetContainer = document.querySelector('.greet--container') 

if (!currentTimeZone) {
    currentTimeZone = jstz.determine().name()
    sessionStorage.setItem('timezone', currentTimeZone)
}

let currentTime
document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(function () {
        currentTime = dateTimeFetcher(currentTimeZone)
        greetContainer.textContent = greetUser(parseInt(currentTime.time.split(':')[0]))
    }, 1)
})

// Theme Switcher
const switcher = document.querySelector('#switcher-script')
const themeSwitch = document.querySelector('.switch--container')
let style = localStorage.getItem('style')

onload = document.addEventListener("DOMContentLoaded", (e) => {
    !style ? setTheme(switcher, themeSwitch, 'light') : setTheme(switcher, themeSwitch, style)
})

themeSwitch.addEventListener('click', (e) => {
    style = localStorage.getItem('style')
    if (style === 'light') {
        console.log(style)
        setTheme(switcher, themeSwitch, 'dark')
    } else if (style === 'dark') {
        console.log(style)
        setTheme(switcher, themeSwitch, 'light')
    }
})


//About Animation
const onTick = (spanEl, char) => {
    const span = spanEl.querySelectorAll('span')[char]
    span.classList.add('fade')
    // return char++
}

const animateSpan = (span, container) => {
    const spanEl = document.querySelector(`${container}`)
    const animeEl = span. split('')
    for (let i = 0; i <  animeEl.length; i++) {
        spanEl.innerHTML += `<span>${animeEl[i]}</span>`
    }
    let char = 0
    let timer = setInterval(() => {
        onTick(spanEl, char)
        char++
        if (char === animeEl.length) {
            clearInterval(timer)
            return
        }    
    }, 50)
    
}


animateSpan('I am a Mobile Engineer from south western Nigeria.', '.about__subtitle--1')
animateSpan('I create portable and highly efficient mobile applications.', '.about__subtitle--2')
animateSpan('I am a Mobile Engineer from south western Nigeria.', '.about__subtitle--1')

// 
// 'I maximize flexibility to inspire an interesting surfing experience.'
