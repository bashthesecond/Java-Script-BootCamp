import { panImage, mouseAnime } from './functions'
import jstz from 'jstz'
import moment from 'moment'
import tz from 'moment-timezone'

const panElement = document.querySelector('.container')
document.addEventListener('mousemove', (e) => {
    mouseAnime(e, panElement)
})

//Time Zone
if (!sessionStorage.getItem('timezone')) {
    const timezone = jstz.determine()
    sessionStorage.setItem('timezone', timezone.name())
}
const currentTimezone = sessionStorage.getItem('timezone')
const now = moment()
console.log(moment(now).tz(currentTimezone).format('DD MM YYYY hh:mm:ss'))

//Theme Switcher
let switches = document.querySelectorAll('switch')
let style = localStorage.getItem('style')

style = null ? setTheme('light') : setTheme(style)

