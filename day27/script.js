var nav = document.querySelector("nav");
var body = document.body;

body.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0%)";
  }

  console.log(window.scrollY);
});

