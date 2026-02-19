//************************************* Random Color Card Generator **************************************** */

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.

var btn = document.querySelector("#btn");
let cardId = 0;

btn.addEventListener("click", function () {
  let card = document.createElement("div");
  card.classList.add("card");

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let randomColor = `rgb(${r}, ${g}, ${b})`;
  let randomWidth = Math.floor(Math.random() * 200) + 100;
  let randomHeight = Math.floor(Math.random() * 200) + 100;

  card.style.backgroundColor = randomColor;
  card.style.width = randomWidth + "px";
  card.style.height = randomHeight + "px";

  cardId++;
  card.setAttribute("data-id", cardId);
  card.innerText = "ID: " + cardId;

  card.addEventListener("dblclick", function () {
    card.remove();
  });

  document.getElementById("container").appendChild(card);
});

//*************************************  Lottery System  **************************************** */
// Take user input (1--50). Generate a random number using `Math.ceil()`.
// If the number matches user input, display "You Won" otherwise "Try
// Again". Update result dynamically in the DOM.

let userinput = document.querySelector("#userinput");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", function () {
  if (userinput.value.trim() === "") {
    result.innerText = "Please enter a number";
    return;
  }

  let value = Number(userinput.value);
  let randomValue = Math.ceil(Math.random() * 50);

  if (value === "") {
    result.innerText = "Please enter a number";
    return;
  }

  if (isNaN(value)) {
    result.innerText = "Only numbers are allowed";
    return;
  }

  if (!Number.isInteger(value)) {
    result.innerText = "Please enter a whole number";
    return;
  }

  if (value < 1 || value > 50) {
    result.innerText = "Number must be between 1 and 50";
    return;
  }

  if (value === randomValue) {
    result.innerText = "You Won! Random number was " + randomValue;
    result.style.color = "white";
  } else {
    result.innerText = "Try Again! Random number was " + randomValue;
    result.style.color = "white";
  }
});

//************************************* Dynamic Image Gallery  **************************************** */
// Store image URLs in an array. On button click, pick a random image using
// `Math.floor()`. Create an `<img>` element dynamically and append it to a
// container. Use `getAttribute("src")` to print the image source in
// console.

var btn = document.querySelector("#btn");
var container = document.querySelector("#container");

var images = [
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://machinelearningmastery.com/wp-content/uploads/2017/01/A-Gentle-Introduction-to-the-Random-Walk-for-Times-Series-Forecasting-with-Python.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjqul6S4IKZD09MtwQbTTrVMBQP03zUtJZQ&s",
  "https://t3.ftcdn.net/jpg/01/17/24/82/360_F_117248232_9rarCfQP1ZFCrr4OWoxJR671qniR6jk5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvWV0BdmTNMguLJxSRZQs6AGa1zHpVYtShw&s",
  "https://indianfoodsrecipies.in/wp-content/uploads/2025/08/pexels-shameel-mukkath-3421394-14774462-1024x683.jpg",
];

btn.addEventListener("click", function () {
  container.innerHTML = ""; // only show one image

  let randomImage = Math.floor(Math.random() * images.length);
  console.log(randomImage);

  let img = document.createElement("img");
  img.setAttribute("src", images[randomImage]);

  container.appendChild(img);
});

//************************************* Progress Bar Simulator  **************************************** */
// Create a progress bar dynamically. On button click, increase progress
// randomly between 10--30%. Update the width style property dynamically.
// Stop progress at 100%.

var btn = document.querySelector("#btn");
var progressBar = document.querySelector("#progressBar");
let progress = 0;

btn.addEventListener("click", function () {
  if (progress > 100) return;

  let randomIncrease = Math.floor(Math.random() * 21) + 10;
  progress += randomIncrease;

  if (progress > 100) {
    progress = 100;
  }

  progressBar.style.width = progress + "%";
  progressBar.innerText = progress + "%";
});
