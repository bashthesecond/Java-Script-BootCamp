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



// const a = 'I am a Mobile Engineer from south western Nigeria.'
// const b = 'I create portable and highly efficient mobile applications.'
// const c = 'I maximize flexibility to inspire an interesting surfing experience.'
// let interval = 0

// animateSpan(a, '.about__subtitle--1')
// interval += a.split('').length
// setTimeout(()=> {
//     animateSpan(b, '.about__subtitle--2')
// }, calcInterval(interval))
// interval += b.split('').length
// setTimeout(()=> {
//     animateSpan(c, '.about__subtitle--3')
// }, calcInterval(interval))
