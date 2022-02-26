const modal = document.querySelector(".modal")
const img = document.querySelector('.image')
const hModal = modal.offsetHeight
const himg = modal.offsetHeight
let heightImg = hModal * 80 / 100
img.style.height = heightImg + 'px'

const resizeImg = () => {
    img.style.height = heightImg + 'px'
}

window.addEventListener('resize', resizeImg)
window.addEventListener('orientationchange', resizeImg)