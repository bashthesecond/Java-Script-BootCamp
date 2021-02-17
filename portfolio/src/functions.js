import moment from 'moment'
import tz from 'moment-timezone'

const panImage = (e) => {
    this.style.backgroundPositionX = -e.offsetX + "px"
    this.style.backgroundPositionY = -e.offsetY + "px"
}

const mouseAnime = (e, panElement) => {
    panElement.style.left = e.pageX + 'px'
    panElement.style.top = e.pageY + 'px'
}

const setTheme = (script, themeSwitch, contentArea, theme) => {
    script.href = `./styles/theme/${theme}.css`
    themeSwitch.style.background = `url(../SVG/${theme}.svg)`
    contentArea.style.background = `url(../SVG/bulb-${theme}.svg)`
    contentArea.style.backgroundRepeat = 'no-repeat'
    contentArea.style.backgroundPosition = 'top center'
    localStorage.setItem('style', theme)
}

const dateTimeFetcher = (currentTimeZone) => {
    const now = moment()
    return {
        time: moment(now).tz(currentTimeZone).format('HH:mm'),
        date: moment(now).tz(currentTimeZone).format('DD MM YYYY')
    }
}


export { panImage, mouseAnime, setTheme, dateTimeFetcher }
