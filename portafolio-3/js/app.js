/* Show Sidebar */

const navMenu = document.getElementById("sidebar"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");


/* Sidebar show */
// Validate If constant Exists

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-sidebar")
    })
}

/* Sidebar Hide */
// Validate If constant Exists

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-sidebar")
    })
}

/* dark mode switch button */

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
    btnSwitch.classList.toggle("active");
});

/* Text typing animation */

const typed = new Typed(".auto-type",{
    strings : ["Programmer", "Designer", "Frontend"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

/* skills Tabs */

const tabs = document.querySelectorAll("[data-target]"),
    tabContent = document.querySelectorAll("[data-content]");

    tabs.forEach(tab => {
        tab.addEventListener("click", () =>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContens => {
                tabContens.classList.remove("skills__active")
            })
            
            target.classList.add("skills__active")

            tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })

            tab.classList.add("skills__active")
        })
    })

/*========= mixitup ============*/

let mixerPortfolio = mixitup('.work__container',{
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
})

/*======= Link Active Work =====*/

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*======== work Popup =========*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".portfolio__popup-img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".popup-subtitle-span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portafolio__item-details").innerHTML;

}

/*======== Services modal ==========*/

const modalViews = document.querySelectorAll(".services__modal"),
    modelBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close")

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal")
}

modelBtns.forEach((modelBtn, i) =>{
    modelBtn.addEventListener("click", () => {
        modal(i)
    })
})


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal")
        })
    })
})

/*============ Swiper Testimonial ===============*/

const swiper = new Swiper('.testimonial__container', {

    spaceBetween: 24,
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    // pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // BreakPoints

    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }

    }

});

/*============ Input Animation =================*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})

/*============ Scroll Sections Active Link ==============*/

// get all sections that have an id defined

const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scroll position

    let scrollY = window.pageYOffset;

    //Now we loop through sections to get height, top and ID values for each

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionID = current.getAttribute("id");

        /* - if our current scroll position enters the space where current section on screen is, add .active class to
        corresponding navigation link, else remove it 
        - to know which link needs an active class, we use sectionID variable we are getting while looping through
        sections as an selector*/
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionID + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionID + "]").classList.remove("active-link");
        }

    })

}



/*============ Show Scrol UP ======================*/

