// navbar from relative to fixed
window.onscroll = function(){navbarOnTop(), get()}

function navbarOnTop() {
    var navBar = document.getElementById("navbar");
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.marginTop = "0px"
    if (document.documentElement.scrollTop >= 381) {
        navBar.style.position = "fixed";
        navBar.style.top = "0";
        mobileMenu.style.position = "fixed";
        mobileMenu.style.top = "0";
        mobileMenu.style.marginTop = "45px"} 
    else {
        navBar.style.position = "relative";
        mobileMenu.style.position = "relative";
    }
}



function get() {
    var num = 0
    while (num<3) {
    num+=1 
    var content = document.getElementById(num);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        content.style.display = 'block';
    }
    }
}

// Mobile Menu Button
function mobileMenuToggle(x) {
    x.classList.toggle("change");
  }
// ---


// Light Mode
function lightMode() {
var element = document.body; // body
x = element.classList.toggle("light-body");
localStorage.setItem("light-body", x);
}

window.onload = function() {
    if (localStorage.getItem("light-body") == "true") {
        lightMode()
        document.getElementById("Checkbox").checked = true
    } 
}
// ---



// Mobile Menu Toggle
function menuOpenToggle() {
var mobileMenu = document.getElementById("mobile-menu")
if (mobileMenu.style.width == "280px") {
    mobileMenu.style.width = "0px";
}
else {
    mobileMenu.style.width = "280px";
    }
}
