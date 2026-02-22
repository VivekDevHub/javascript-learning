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

/********************************************************************** */
// 2.  Build a **theme switcher** (Light/Dark) using DOM where the 
// selected theme is saved in **localStorage** and restored after refresh.

function themeSwitcher() {
    
}