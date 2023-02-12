
// //Корзина
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('click', function () {
        const direction = this.dataset.id;
        const count = this.parentElement.querySelector('.count');
        const countValue = +count.textContent;

        let newValue;

        if (direction === 'plus') {
            newValue = countValue + 1;
        } else {
            newValue = countValue - 1 > 0 ? countValue - 1 : 0;
        }
        count.textContent = newValue;
    })
})
//табы

let tabItem = document.querySelectorAll('.tab__item');
let tabContent = document.querySelectorAll('.tab');
let tabActive;

tabItem.forEach(item => {
    item.addEventListener('click', selectTabItem)
})

function selectTabItem() {
    tabItem.forEach(item => {
        item.classList.remove('active');
        item.classList.add('no-active')
    })
    this.classList.add('active');
    this.classList.remove('no-active')
    tabActive = this.getAttribute('data-tab');
    selectTabContent(tabActive)
}

function selectTabContent(tabActive) {

    tabContent.forEach(item => {
        if (item.classList.contains(tabActive)) {
            item.classList.add('active-tab')
        } else {
            item.classList.remove('active-tab')
        }
    })

}
//swiper
const blockSlide = document.querySelector('.swiper__mob');
blockSlide.addEventListener('touchstart', touchStart, false);
blockSlide.addEventListener('touchmove', touchMove, false);



let x1 = null;
let y1 = null;

function touchStart(event) {
    const firstTouch = event.touches[0];

    x1 = firstTouch.clientX;
    console.log(x1)
    y1 = firstTouch.clientY;
    console.log(x1)
}

function touchMove(event) {
    if (!x1 || !y1) {
        return false
    }
    let x2 = event.touches[0].clientX;
    console.log(x2);
    let y2 = event.touches[0].clientY;
    console.log(y2);

    let xDif = x2 - x1;
    let yDif = y2 - y1;

    if (Math.abs(xDif) > Mach.abs(yDif)) {
        if (xDif > 0) {
            console.log('right')
        } else {
            console.log('left')
        }
    } else {
        if (yDif > 0) {
            console.log('down')
        } else {
            console.log('up')
        }
    }
    x1 = null;
    y1 = null;
}


//слайдер

const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const sliderLine = document.querySelector('.tab');

let offset = 0;

btnLeft.addEventListener('click', function moveLeft() {
    offset = offset - 354;
    if (offset < 0) {
        offset = 1396;
    }
    sliderLine.style.left = -offset + 'px';
    console.log('work')
});
btnRight.addEventListener('click', function moveRight() {
    offset = offset + 354;
    if (offset > 1380) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    console.log('work')
});


