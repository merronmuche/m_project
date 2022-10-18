const images = document.querySelectorAll('.img')
window.addEventListener('scroll', checkimages)
console.log(images)
checkimages()

function checkimages() {
    const window_height = window.innerHeight/5*4
    console.log(window_height)
    images.forEach(my_image => {
        // console.log(my_image)
        const imgTop = my_image.getBoundingClientRect().top
        console.log(imgTop)
        if(imgTop < window_height) {
            my_image.classList.add('show')
        } else {
            my_image.classList.remove('show')
        }
    })
}