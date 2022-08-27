//navbar

window.onscroll = function() {stickynav()};
    
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
  
function stickynav() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}


