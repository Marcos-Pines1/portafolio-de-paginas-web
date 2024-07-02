// Menu para los dispositivos mobiles

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

// App para el funcionamiento de la seccion About

var tablinks = document.getElementsByClassName("tab__link");
var tabcontents = document.getElementsByClassName("about__tab__contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-cont");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-cont");
}
