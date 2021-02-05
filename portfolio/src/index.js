import { panImage, mouseAnime } from './functions'

const panElement = document.querySelector('.container')
document.addEventListener('mousemove', (e) => {
    mouseAnime(e, panElement)
})

