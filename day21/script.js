// Hello to Welcome and Welcome to Hello
var textChange = document.getElementById("btn");

textChange.addEventListener("click", function () {
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
  if (hidebox.style.display !== "none") {
    hidebox.style.display = "none";
  } else {
    hidebox.style.display = "block";
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
