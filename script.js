// navbar from relative to fixed
window.onscroll = function() {navbarOnTop(), get()};

function navbarOnTop() {
    var navBar = document.getElementById("navbar");
    if (document.documentElement.scrollTop > 379) {
        navBar.style.position = "fixed";
        navBar.style.top = "0";} 
    else if (document.documentElement.scrollTop <= 379){
        navBar.style.position = "relative";
    }
}



function get() {
    var num = 0
    while (num<3) {
    num+=1 
    var content = document.getElementById(num);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        content.style.display = 'block' 
    }
    }
}

// Mobile Menu Toggle
function mobileMenuToggle(x) {
    x.classList.toggle("change");
  }
// ---


// Dark Mode
function lightMode() {
var element = document.body; // body
x = element.classList.toggle("light-mode")
localStorage.setItem("x", x)
}

window.onload = function() {
    if (localStorage.getItem("x") == "true") {
        lightMode()
        document.getElementById("Checkbox").checked = true
    } 
}

window.onclick = function(){ 
console.log(localStorage.getItem("x"))}
