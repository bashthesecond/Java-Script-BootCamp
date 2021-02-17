import { panImage, mouseAnime, setTheme, dateTimeFetcher } from './functions'
import jstz from 'jstz'

// // const panElement = document.querySelector('.container')
// // document.addEventListener('mousemove', (e) => {
// //     mouseAnime(e, panElement)
// // })

//Time Zone
let currentTimeZone = sessionStorage.getItem('timezone')

if (!currentTimeZone) {
    currentTimeZone = jstz.determine().name()
    sessionStorage.setItem('timezone', currentTimeZone)
}

let currentTime 
setInterval(function (currentTimeZone) {
    // currentTime = dateTimeFetcher(currentTimeZone)
    console.log(currentTimeZone)
}, 3000)

// console.log(currentTime.time)

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


