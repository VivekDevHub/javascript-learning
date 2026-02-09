//-----------------ASSIGNMENT TASK --------------------------------------------

function program1() {
  let name = "Vivek";
  let hobby = "Coding";
  return console.log(`my name is ${name} and my hobby is ${hobby}`);
}

function program2() {
  let num = 45 * 2 - 10;
  return num;
}

function program3() {
  let currentDate = new Date();
  return currentDate.getFullYear();
}

function program4() {
  let firstName = "Vivek";
  let secondName = "Kushwah";
  let fullName = firstName + " " + secondName;
  return fullName;
}

function program5() {
  var a = 20;
  console.log("before update value is :", a);
  var a = 50;
  console.log("after update value is : ", a);
}

function program6() {
  console.error("This is error message");
}

function program7() {
  let a = 4;
  let square = a * a;
  return square;
}

function program8() {
  let isActive = 10 < 5;
  return isActive;
}

function program9() {
  const age = 18;
  if (age > 18) {
    console.log(age, "age is greather than so selected ");
  } else {
    console.log("age is not greater than 18");
  }
}

function program10() {
  let result = 100 / 0;
  return result;
}

function program11() {
  let name = " vivek";
  return name;
}

function program12() {
  const PI = 3.14;
  return PI;
}

function program13() {
  var name = "Vivek";
  var name = "Vivek Dev Hub";
  return name;
}

function program14() {
  return console.log(typeof null);
}

function program15() {
  var movie = "Dhamaal";
  return typeof movie;
}

function program16() {}

function program17() {}

function program18() {
  var a;
  return typeof a;
}

function program19() {
  var a = undefined;
  return typeof a;
}

function program20() {
  const arr = ["aman", "aastha", "vivek"];
  console.log(arr);

  arr.push("Sarthak");
  return arr;
}

function program21() {
  for (let i = 1; i <= 50; i++) {
    console.log(i);
  }
}

function program22() {
  let i = 1;
  let sum = 0;

  while (i <= 10) {
    sum = sum + i;
    i++;
  }
  console.log("Sum from 1 to 10 is:", sum);
}

function program23() {
  let str = "Javascript";
  for (const char of str) {
    console.log(char);
  }
}

function program24() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) continue; // skip even numbers
    console.log(i); // print only odd numbers
  }
}

function program25() {
  let num = 5;
  do {
    console.log(num);
    num--;
  } while (num >= 1);
}

function program26() {
  let fact = 1;
  for (let i = 1; i <= 5; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

function program29() {
  let i = 1;
  while (i <= 100) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

function program30() {
  let obj = { name: "Vivek", age: 22 };
  for (let key in obj) {
    console.log(key);
  }
}

function program31() {
  let num = 1;
  if (num > 0) {
    console.log("number is positive");
  } else if (num < 0) {
    console.log("negative number");
  } else {
    console.log("zero");
  }
}

function program32() {
  const age = 19;
  if (age >= 18) {
    console.log("is adult");
  } else {
    console.log("minor");
  }
}

function program33() {
  let num = 7; 
  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

function program34() {
   let a = 15;
   let b = 20;

  if (a > b) {
    console.log("Greater number is:", a);
  } else if (b > a) {
    console.log("Greater number is:", b);
  } else {
    console.log("Both numbers are equal");
  }
}

function program35() {
    let score = 85;

  if (score >= 90) {
    console.log("Excellent");
  } else if (score >= 70) {
    console.log("Good");
  } else {
    console.log("Needs Improvement");
  }
}

console.log(program35());
