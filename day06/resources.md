- Functions
- how we create a functions
- Function with Parameters 
- Function with Multiple Parameters
- Function with Return Statement

- types of function
  a. function statement
  b. function expression
  c. fat arrow function


  Functions 
parameter and arguments
return statement

function a1(a) {
    console.log('hello 1',a);
    return 10
}
var a2 = function (b) {
    console.log('hello 2',b);
    return 20

}
var a3 = (c)=>{
    console.log('hello 3',c);
    return 30

}
var a4 = (d)=> console.log('hello 4',d);

console.log(a1('Sarthak'));

console.log(a2('Danish'));

console.log(a3('Bixi'));

a4('Swaraj')