import moment from 'moment'
import tz from 'moment-timezone'

const panImage = function (e) {
    const offsetY = -(e.offsetY / 15 )
    console.log(-e.offsetX)
    this.style.backgroundPositionX = -((e.offsetX / 10) + 2 ) + "px"
    this.style.backgroundPositionY = (offsetY > 0 ? 0 : offsetY) + "px"
}

const mouseAnime = (e, panElement) => {
    panElement.style.left = e.pageX + 'px'
    panElement.style.top = e.pageY + 'px'
}

const setTheme = (script, themeSwitch, theme) => {
    script.href = `./styles/theme/${theme}.css`
    themeSwitch.style.background = `url(../SVG/${theme}.svg)`
    themeSwitch.style.backgroundRepeat ='no-repeat' 
    themeSwitch.style.backgroundPosition = 'center'
    localStorage.setItem('style', theme)
}

const dateTimeFetcher = (currentTimeZone) => {
    const now = moment()
    return {
        time: moment(now).tz(currentTimeZone).format('HH:mm'),
        date: moment(now).tz(currentTimeZone).format('DD MM YYYY')
    }
}

const greetUser = (int) => {
    // console.log(int)
    if (int >= 0 && int < 12) {
        return 'Good morning, '
    } else if (int >= 12 && int < 18) {
        return 'Good afternoon, '
    } else {
        return 'Good evening, '
    }

}

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

const calcInterval = (val) => {
    return val * 50
}

const animateAbout = (array) => {
    let interval = 0
    for (let i = 0; i < array.length; i++) {
        setTimeout(()=> {
            animateSpan(array[i].paragraph, array[i].el)
        }, interval)
        console.log(interval)
        interval += calcInterval(array[i].paragraph.split('').length)
    }
}

export { panImage, mouseAnime, setTheme, dateTimeFetcher, greetUser, onTick, animateSpan, calcInterval, animateAbout  }
