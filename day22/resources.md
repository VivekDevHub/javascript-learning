- Math()

Math.random() = Gives a random number between 0 and 1 (never 1).
console.log(Math.random()); // 0.0 to 0.9999...
If you want random number from 1 to 10:
console.log(Math.floor(Math.random() \* 10) + 1);

Math.round() = Rounds the number to the nearest whole number.
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5

Math.ceil() = Always rounds UP to the next whole number.
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

Math.floor() = Always rounds DOWN to the lower whole number.
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

Math.max() = Gives the biggest number among the given numbers.
console.log(Math.max(10, 20, 5, 80)); // 80

var a = Math.random()\*1000
console.log(a); // 0 se 1000 ke beech ki value milegi

var a = Math.random()\*100
console.log(a); // 0 se 100 ke beech ki value milegi

var a = Math.random()\*10
console.log(a); // 0 se 10 ke beech ki value milegi

document.createElement() = html ka naya element add hoga
HTML ka naya element create karta hai (memory me)
Lekin page par tab tak nahi dikhega jab tak append nahi karte
var h1 = document.createElement("h1");

. appendChild() = Kisi element ke andar naya element add karta hai
document.body.appendChild(h1);

.getAttribute() = Kisi HTML element ka attribute ko get karta hai
element.getAttribute("attributeName")
var source = img.getAttribute("src");

.setAttribute() = Kisi element ka attribute change karta hai ya naya set karta hai

setAttribute("attributeName", "value") : kya change karna hai
img.setAttribute("src", "image2.jpg");

var img1Src = img1.getAttribute("src"); // read
img1.setAttribute("src", img2Src); // change
