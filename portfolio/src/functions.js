const panImage = (e) => {
    this.style.backgroundPositionX = -e.offsetX + "px"
    this.style.backgroundPositionY = -e.offsetY + "px"
}

const mouseAnime = (e, panElement) => {
    panElement.style.left = e.pageX + 'px'
    panElement.style.top = e.pageY + 'px'
}

const setTheme = (script, theme) => {
    script.href = `./styles/theme/${theme}.css`
    localStorage.setItem('style', theme)
}


export { panImage, mouseAnime, setTheme }
