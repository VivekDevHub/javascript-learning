// If you use return without any value, it always returns undefined.
// If you write console.log inside return → Wrong
// Agar return console.log() likhoge to console.log to print karega, par return hamesha undefined dega.

// Hello World
function program1() {
  return "Hello World";
}


// sum of two numbers
function program2(a, b) {
  return a + b;
}


// print string
function program3(str) {
  return str;
}


//square of the number
function program4(num) {
  return num * num;
}


//even or odd
function program5(num) {
  if (num % 2 == 0) {
    return "even";
  }
}


//last character of the string
function program6(str) {
  return str[str.length - 1];
}


//first element of the array
function program7(arr) {
  return arr[0];
}


function program8(arr) {
  //last element of the array
  return arr[arr.length - 1];
}


// function program9(arr) { // all element in array
//  for(let i=0; i<arr.length; i++) {
//       console.log(arr[i]);
//  }
//  return "Done";
// }


function program9(arr) {
  for (let char of arr) {
    console.log(char);
  }
  return arr;
}


//length of the array
function program10(arr) {
  return arr.length;
}


// function declaration that multiplies two numbers.
function program11(a, b) {
  return a * b;
}

function program12(a, b) {
  return a - b;
}


// arrow function that converts a string to uppercase.
const strUpperCase = (str) => {
  return str.toUpperCase();
};

// cube number using arrow function
const cube = (num) => {
  return num * num * num;
};


// add two strings together
function program15(str1, str2) {
  return str1 + str2;
}


// find the greater number among two numbers
function program16(a, b) {
  if (a > b) {
    return a + " is greater than " + b;
  } else {
    return b + " is greater than " + a;
  }
}


// find the smallest number among three numbers
function program17(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1 + " is the smallest number";
  } else if (num2 < num1 && num2 < num3) {
    return num2 + " is the smallest number";
  } else {
    return num3 + " is the smallest number";
  }
}


// print any message five times
function program18(str) {
  for (i = 1; i <= 5; i++) {
    console.log(str);
  }
}


//Write a function that takes an array and returns only even numbers.
// function program19(arr) {
// let evenArr = [];
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     evenArr.push(arr[i])
//   }
// }
// return evenArr
// }

function program19(arr) {
  return arr.filter((num) => num % 2 === 0);
}


//Write a function that takes an array and returns only odd numbers.
function program20(arr) {
  return arr.filter((num) => num % 2 !== 0);
}


//Write a function that removes the first element of an array (using shift).
function program21(arr) {
  arr.shift();
  return arr;
}


//Write a function that adds a value to the start of an array (using unshift).
function program22(arr) {
  arr.unshift("1");
  return arr;
}


//Write a function that removes the last element of an array (using pop).
function program23(arr) {
  arr.pop();
  return arr;
}


//Write a function that adds a value to the end of an array (using push).
function program24(arr) {
  arr.push("9");
  return arr;
}


//Write a function that uses splice to remove 2 items from index 1.
function program25(arr) {
  arr.splice(1, 2);
  return arr;
}


//Write a function that checks if a string contains the letter "a".
function program26(str) {
  return str.includes("a");
}


//Write a function that counts vowels in a string.
function program27(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }
  return count;
}


//Write a function that reverses a string.
// function program28(str) {
// return str.split("").reverse().join("")
// }

function program28(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


//Write a function that checks if a string is empty.
function program29(str) {
  // return str.length === 0;
  return str.trim().length === 0; // trim for remove whitespaces
}


//Write a function that returns how many spaces are in a string.
function program30(str) {
  return str.split(" ").length - 1;
}
//split(" ") jaha jaha space mila waha se string tut gayi or array ban gaya
// | Method       | Kaam                      |
// | ------------ | ------------------------- |
// | `split(" ")` | Space se todta hai        |
// | `split("")`  | Har letter alag karta hai |
// | Output       | Hamesha array deta hai    |

function program30(str) {
  let spaceCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spaceCount++;
    }
  }
  return spaceCount;
}


//Write a function that returns the sum of all numbers in an array.
function program31(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}


//Write a function that returns the biggest number from an array.
function program32(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}


//Write a function that returns the smallest number from an array.
function program33(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

//Write a function that doubles each number in an array.
function program34(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}


//Write a function that removes duplicate items from an array.
function program35(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}


// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }


//Write a function that takes an array and returns only positive numbers.
function program36(arr) {
  let positive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    }
  }
  return positive;
}


//Write a function that prints the index of each item in an array.
function program38(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Index:", i, "Value:", arr[i]);
  }
}


//Write a function that returns the middle element of an array.
function program39(arr) {
  let middle = Math.floor(arr.length / 2);
  return arr[middle];
}
// console.log(program39([1,2,4,5]));


//Write a function that removes 1 element from the middle of an array using splice.
function program40(arr) {
  let middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 1);
  return arr;
}


console.log(program40([-1, -2, 5, 5.6, 8.5]));
