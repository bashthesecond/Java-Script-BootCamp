const panImage = function (e) {
    this.style.backgroundPositionX = -e.offsetX + "px"
    this.style.backgroundPositionY = -e.offsetY + "px"
    console.log(event)
}

const mouseAnime = function(e, panElement) {
    panElement.style.left = e.pageX + 'px'
    panElement.style.top = e.pageY + 'px'
}

export { panImage, mouseAnime }