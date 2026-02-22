// 1. Create a function that takes an array of numbers and returns only
// the numbers greater than the average of the array.

// function greaterThanAvgNumber(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   let avg = sum / arr.length;
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > avg) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function greaterThanAvgNumber(arr) {
//   let sum = arr.reduce((acc, val) => acc + val, 0);
//   let avg = sum / arr.length;
//   let result = arr.filter((num) => num > avg);
//   return result;
// }

// console.log(greaterThanAvgNumber([1, 2, 3, 4, 5]));

/**********************************************************************************/
// 2.  Build a **theme switcher** (Light/Dark) using DOM where the
// selected theme is saved in **localStorage** and restored after refresh.

// var themeBtn = document.querySelector("#btn");
// let savedTheme = localStorage.getItem("theme");

// if (savedTheme === "dark") {
//   document.body.classList.add("dark");
// }

// themeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
//   if (document.body.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });

/**********************************************************************************/

//3. make a **div that rotates 360°** every time you double-click it,
// and the rotation count should be shown inside the div. (Use events + CSS + DOM)

// let box = document.getElementById('box');
// let count = 0;
// let angle=0;

// box.addEventListener('dblclick', function() {
//     count++;
//     angle += 360;

//     box.textContent = count;
//     box.style.transform = `rotate(${angle}deg)`
// })

/**********************************************************************************/
// 4. Create a gambling button where clicking generates a random number from 1 to 10:
//    - If number > 7 → show “You Win!”
//    - Else → “Try Again!”
//    Use `Math.random`, DOM, and event listeners.

// let btn = document.getElementById("playBtn");
// let result = document.getElementById("result");

// btn.addEventListener("click", function () {
//   let randomNum = Math.floor(Math.random() * 10) + 1;
//   if (randomNum > 7) {
//     result.textContent = `You Win! (Number: ${randomNum})`;
//     result.style.color = "green";
//   } else {
//     result.textContent = `Try Again! (Number: ${randomNum})`;
//     result.style.color = "red";
//   }
// });

/**********************************************************************************/
// 6. 6. Using **hoisting knowledge**, predict and explain the output of a 
// code snippet involving var, let, and a function declaration.

// console.log(a);   
// console.log(b);   
// console.log(add()); 

// var a = 10;
// let b = 20;

// function add() {
//   return a + b;
// }


/**********************************************************************************/

// 7. 