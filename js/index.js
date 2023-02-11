
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
    })
    this.classList.add('active');
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


