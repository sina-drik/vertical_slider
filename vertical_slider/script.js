const uBtn = document.querySelector('.up-button');
const dBtn = document.querySelector('.down-button');
const sliderContainer = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const sliderLength = rightSlider.querySelectorAll('div').length;

let activeSliderIndex = 0
uBtn.addEventListener('click', () => changeSlide('up'))
dBtn.addEventListener('click', () => changeSlide('down'))

leftSlider.style.top = `-${(sliderLength - 1) * 100}vh`;

function changeSlide(direction) {
    let sliderheight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activeSliderIndex++
        if (activeSliderIndex > sliderLength - 1) {
            activeSliderIndex = 0;
        }
        
    } else if(direction === 'down') {
        activeSliderIndex--
        if (activeSliderIndex < 0) {
            activeSliderIndex = sliderLength - 1;
        }
    }
    rightSlider.style.transition = '0.8s'
    leftSlider.style.transition = '0.8s'
    rightSlider.style.transform = `translateY(-${sliderheight * activeSliderIndex}px)`;
    leftSlider.style.transform = `translateY(${sliderheight * activeSliderIndex}px)`;
}

