//************************. BHEEM ROTATE GAME. *************************************
// var bheemimg = document.querySelector("#imgbheem");
// var body = document.body;
// var moveX = 0;
// var moveY = 0;

// body.addEventListener("keydown", function (dets) {
//   if (dets.code === "ArrowRight") {
//     if (moveX < 80) moveX++;
//   }

//   if (dets.code === "ArrowLeft") {
//     if (moveX > 0) moveX--;
//   }

//   if (dets.code === "ArrowUp") {
//     if (moveY > 0) moveY--;
//   }

//   if (dets.code === "ArrowDown") {
//     if (moveY < 50) moveY++;
//   }
//   bheemimg.style.left = `${moveX}%`;
//   bheemimg.style.top = `${moveY}%`;
// });

//************************. VIRTUAL PIANO  *************************************

var body = document.body;

body.addEventListener("keydown", function (event) {
  let key = event.key.toUpperCase();
  let audio = document.querySelector(`#${key}`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  let keyDiv = document.querySelector(`.key[data-key="${key}"]`);
  if (keyDiv) {
    keyDiv.classList.add("active");

    setTimeout(() => {
      keyDiv.classList.remove("active");
    }, 150);
  }
});
