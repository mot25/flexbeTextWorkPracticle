const modal = document.querySelector(".modal")
console.log('modal', modal)
const img = document.querySelector('.image')
console.log(img)
const hModal = modal.offsetHeight
let heightImg = hModal * 84 / 100
img.style.height = heightImg + 'px'

/**
900 100
x   84 

 */
window.addEventListener('resize', () => {
    // console.log('hModal', hModal)
    const himg = modal.offsetHeight
    // console.log('himg', himg)

    img.style.height = heightImg + 'px'
})