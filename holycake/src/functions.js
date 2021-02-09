const panImage = function (e) {
    this.style.backgroundPositionX = -e.offsetX + "px"
    this.style.backgroundPositionY = -e.offsetY + "px"
    console.log(event)
}

export { panImage as default }