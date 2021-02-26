import { panImage, mouseAnime, setTheme, dateTimeFetcher, greetUser, animateAbout } from './functions'
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

animateAbout([{
    paragraph: 'I am a Mobile Engineer from south western Nigeria.',
    el: '.about__subtitle--1'
},
{
    paragraph: 'I create portable and highly efficient mobile applications.',
    el: '.about__subtitle--2'
},
{
    paragraph: 'I maximize flexibility to inspire an interesting surfing experience.',
    el: '.about__subtitle--3'
}])

const imageContainer = document.querySelectorAll('.project__photo')

// imageContainer.addEventListener('mousemove', panImage)

for (let i of imageContainer) {
    // console.log(imageContainer[i])

    i.addEventListener('mousemove', panImage)
}