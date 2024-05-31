const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.querySelectorAll(".nav_link");
var autoType = document.querySelector(".auto-type");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav_open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
});

// Hover Circle
document.addEventListener("mousemove", function (e) {
  const hoverCircle = document.getElementById("hoverCircle");
  hoverCircle.style.left = e.pageX + "px"; // Move the circle to the current mouse position horizontally
  hoverCircle.style.top = e.pageY + "px"; // Move the circle to the current mouse position vertically
});
