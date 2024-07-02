let slider = document.querySelector('.hero__slider .list__slider');
let items = document.querySelectorAll('.hero__slider .list__slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.hero__slider .list__li__item li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.hero__slider .list__li__item li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



/* Menu para celulares */

const menuIcon = document.querySelector('.nav__icon-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

menuIcon.addEventListener('click', () => {
nav.classList.toggle('active');
})

navLinks.forEach(link => {
link.addEventListener('click', () => {
    nav.classList.remove('active');
})
})


