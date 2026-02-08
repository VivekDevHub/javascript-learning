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
  let name =' vivek';
  return name;
}

function program12() {
  const PI = 3.14;
  return PI;
}

function program13() {
  var name = 'Vivek';
  var name = 'Vivek Dev Hub';
  return name;
}

function program14() {
 return console.log(typeof(null));
 
}

function program15() {
  var movie = 'Dhamaal';
  return typeof(movie);
}

function program16() {
  
}

function program17() {
 
}

function program18() {
 var a ;
 return typeof(a)
}

function program19() {
 var a = undefined;
 return typeof(a)
}

function program20() {
const arr = ['aman','aastha','vivek'];
console.log(arr);

arr.push("Sarthak");
return arr;

}

function program21() {
  for(let i=1; i<=50; i++){
    console.log(i);
    
  }
}


console.log(program21());
