const panImage = (e) => {
    this.style.backgroundPositionX = -e.offsetX + "px"
    this.style.backgroundPositionY = -e.offsetY + "px"
}

const mouseAnime = (e, panElement) => {
    panElement.style.left = e.pageX + 'px'
    panElement.style.top = e.pageY + 'px'
}

const setTheme = (script, themeSwitch, theme) => {
    script.href = `./styles/theme/${theme}.css`
    themeSwitch.style.background = `url(../SVG/${theme}.svg)`
    localStorage.setItem('style', theme)
}


export { panImage, mouseAnime, setTheme }
