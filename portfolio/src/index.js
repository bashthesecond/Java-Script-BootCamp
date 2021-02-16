import { panImage, mouseAnime, setTheme } from './functions'
// import jstz from 'jstz'
// import moment from 'moment'
// import tz from 'moment-timezone'

// // const panElement = document.querySelector('.container')
// // document.addEventListener('mousemove', (e) => {
// //     mouseAnime(e, panElement)
// // })

// //Time Zone
// if (!sessionStorage.getItem('timezone')) {
//     const timezone = jstz.determine()
//     sessionStorage.setItem('timezone', timezone.name())
// }
// const currentTimezone = sessionStorage.getItem('timezone')
// const now = moment()
// console.log(moment(now).tz(currentTimezone).format('DD MM YYYY hh:mm:ss'))

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


