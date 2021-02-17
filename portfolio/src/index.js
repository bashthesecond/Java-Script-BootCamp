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
        dateTimeContainer.textContent = currentTime.time
    }, 1)
})




// Theme Switcher
const switcher = document.querySelector('#switcher-script')
const themeSwitch = document.querySelector('.switch--container')
const contentArea = document.querySelector('.content--area')
let style = localStorage.getItem('style')

onload = document.addEventListener("DOMContentLoaded", (e) => {
    !style ? setTheme(switcher, themeSwitch, contentArea, 'light') : setTheme(switcher, themeSwitch, contentArea, style)
})

themeSwitch.addEventListener('click', (e) => {
    style = localStorage.getItem('style')
    if (style === 'light') {
        console.log(style)
        setTheme(switcher, themeSwitch, contentArea, 'dark')
    } else if (style === 'dark') {
        console.log(style)
        setTheme(switcher, themeSwitch, contentArea, 'light')
    }
})


