const slideItem = document.querySelectorAll('.slide')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const slickSlider = document.querySelector('.slick-slider')
let slideIndex = 0
    // next slide
const nextSlide = (index) => {
        slickSlider.style.transform = `translateX(-${slideItem[index].offsetLeft}px)`
    }
    // previous slide
const prevSlide = (index) => {
        slickSlider.style.transform = `translateX(${slideItem[index].offsetLeft}px)`
    }
    // control slide when click button next/prev
btnNext.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex == Math.floor(slideItem.length / 2) + 1) {
        slideIndex = 0
    }
    nextSlide(slideIndex)
    console.log(slideIndex);
})
btnPrev.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = Math.floor(slideItem.length / 2)
    }
    nextSlide(slideIndex)
})

// active img when click slide
const showImg = document.querySelector('.show-img')
    // const slideImg = document.querySelectorAll('.slide img')
const activeImage = document.querySelector('.show-img .img img')
const btnControlImg = document.querySelector('.active-image')

let imgIndex

const btnImgNext = btnControlImg.querySelector('.btn-next')
const btnImgPrev = btnControlImg.querySelector('.btn-prev')
    // show image when click
const showImageFunc = (index) => {
    activeImage.src = slideItem[index].firstElementChild.src
    showImg.classList.remove('hide')
    btnControlImg.classList.remove('hide')
}

slideItem.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        imgIndex = index
        showImageFunc(imgIndex)
    })
})

showImg.addEventListener('click', () => {
    showImg.classList.add('hide')
    btnControlImg.classList.add('hide')
})

btnImgPrev.addEventListener("click", () => {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = slideItem.length - 1;
    }
    showImageFunc(imgIndex)
})
btnImgNext.addEventListener("click", () => {
    imgIndex++
    if (imgIndex >= slideItem.length) {
        imgIndex = 0;
    }
    showImageFunc(imgIndex)
})