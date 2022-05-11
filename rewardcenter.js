// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var head = document.getElementById("header");

// Get the offset position of the navbar
var sticky = head.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }
}


// to link reward to rewardcenter

document.getElementById("tag").onclick = function () {
    location.href = "rewardcenter.html";
};

