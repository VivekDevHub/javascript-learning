//************************************* Grambling Game **************************************** */

var number = document.querySelector("#number");
var money = document.querySelector("#money");

var btn = document.querySelector("#btn");
var result = document.querySelector("#result");

btn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 10);

  if (number.value == "" || money.value == "") {
    result.innerHTML = "Enter Number";
  }
  if (number.value == randomNumber) {
    result.innerHTML = "Winner";
    result.style.color = "Yellow";
  } else {
    result.innerHTML = "Try Again !!";
    result.style.color = "red";
  }
});

//************************************* Create Element append child **************************************** */

var btn = document.querySelector("button");
var play = document.querySelector("#playground");

var quotes = [
  "Believe you can and you are halfway there",
  "It does not matter how slowly you go as long as you do not stop",
  "If you are going through hell, keep going.",
  "Dont Worry Expect More",
  "If you want something done right, do it yourself.",
];

var colors = ["red", "blue", "purple", "crimson", "royalblue"];

btn.addEventListener("click", function () {
  var h1 = document.createElement("h1");
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  h1.innerHTML = randomQuote;
  h1.style.color = randomColor;
  h1.style.position = "absolute";
  h1.style.top = Math.random() * 100 + "%";
  h1.style.right = Math.random() * 100 + "%";

  play.appendChild(h1);
});

//************************************* Get Attribute Set Attribute **************************************** */

var img1 = document.querySelector("#kaliya");
var img2 = document.querySelector("#bheem");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var img1Src = img1.getAttribute("src");
  var img2Src = img2.getAttribute("src");

  img1.setAttribute("src", img2Src);
  img2.setAttribute("src", img1Src);
});
