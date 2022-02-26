const modal = document.querySelector(".modal")
console.log('modal', modal)
const img = document.querySelector('.image')
console.log(img)
const hModal = modal.offsetHeight
let heightImg = hModal * 80 / 100
img.style.height = heightImg + 'px'

/**
900 100
x   84 

 */

const resizeImg = () => {
    const himg = modal.offsetHeight
    // console.log('himg', himg)

    img.style.height = heightImg + 'px'
}

window.addEventListener('resize', resizeImg)