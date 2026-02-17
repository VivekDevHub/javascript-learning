// Hello to Welcome and Welcome to Hello
var changeButon = document.getElementById("btn");

changeButon.addEventListener("click", function () {
  let para = document.getElementById("text");

  if (para.innerText === "Hello") {
    para.innerText = "Welcome";
  } else {
    para.innerText = "Hello";
  }
});

// ***************  DOM TASK 2  ***************
// Change Box Color on Click

var boxbtn = document.getElementById("boxbtn");
var box = document.querySelector(".box");

let colors = ["red", "green", "blue"];
let index = 0;

boxbtn.addEventListener("click", function () {
  box.style.backgroundColor = colors[index];
  index++;

  if (index >= colors.length) {
    index = 0;
  }
});

//// ***************  DOM TASK 3  ***************

// hide the box on click
var hidebtn = document.getElementById("hidebtn");
var hidebox = document.querySelector(".hidebox");

hidebtn.addEventListener("click", function () {
  if (hidebox.style.display == "none") {
    hidebox.style.display = "block";
  } else {
    hidebox.style.display = "none";
  }
});

//// ***************  DOM TASK 5  ***************

var plusbtn = document.getElementById("plusbtn");
var minusbtn = document.getElementById("minusbtn");
var number = document.getElementById("number");

plusbtn.addEventListener("click", function () {
  let value = parseInt(number.innerText);
  number.innerText = value + 1;
});

minusbtn.addEventListener("click", function () {
  let value = parseInt(number.innerText);

  if (value > 0) {
    number.innerHTML = value - 1;
  }
});

//// ***************  DOM TASK 6  ***************
//toggle theme
var themebtn = document.querySelector("#themebtn");
themebtn.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

//// ***************  DOM TASK 7  ***************
// show input text

var input = document.querySelector("#input");
var output = document.querySelector("#output");

input.addEventListener("input", function () {
  const value = input.value;

  output.textContent = value === "" ? "Start Typing.." : value;
});
// input event → runs every time you type
// output.textContent = input.value → whatever is typed appears in paragraph

//// ***************  DOM TASK 8 ***************
// change color on mouse hover

var boxx = document.querySelector(".boxx");

boxx.addEventListener("mouseenter", function () {
  boxx.style.backgroundColor = "white";
});

boxx.addEventListener("mouseleave", function () {
  boxx.style.backgroundColor = "violet";
});

//// ***************  DOM TASK 9 ***************

const btn = document.querySelector("#onceBtn");
const msg = document.querySelector("#msg");

btn.addEventListener(
  "click",
  function () {
    msg.textContent = "Button Clicked";
  },
  { once: true },
);

//// ***************  DOM TASK 10 ***************

var stopBtn = document.querySelector("#stopBtn");
var readyBtn = document.querySelector("#readyBtn");
var goBtn = document.querySelector("#goBtn");

var red = document.querySelector("#red");
var yellow = document.querySelector("#yellow");
var green = document.querySelector("#green");

function resetLights() {
  red.style.backgroundColor = "gray";
  yellow.style.backgroundColor = "gray";
  green.style.backgroundColor = "gray";
}

stopBtn.addEventListener("click", function () {
  resetLights();
  red.style.backgroundColor = "red";
});

readyBtn.addEventListener("click", function () {
  resetLights();
  yellow.style.backgroundColor = "yellow";
});

goBtn.addEventListener("click", function () {
  resetLights();
  green.style.backgroundColor = "green";
});
