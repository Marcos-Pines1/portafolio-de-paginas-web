
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


var sidemeu = document.getElementById('sidemenu')

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-150px";
}
