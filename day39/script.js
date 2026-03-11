// ********************* FETCH API ******************************************

// 1 and 2. Fetch data from API and log the data

// let response = fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// 3. Log the response object before converting to JSON

// let res = fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response) => console.log(response))

// 4 or 5 or 6. Fetch data and log "Data loaded" after JSON is received
// let response = fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => res.json())
//   .then((data) => console.log(data.length))
//   .catch((error) => {
//     console.log(error);
//   });

// ********************************** PROMISE *******************************

// 7. Create a Promise that resolves with "Hello" and print it using .then()
// const promise1 = new Promise ((resolve,reject) => {
//     return resolve("Hello")
// })
// promise1.then((res) => console.log(res))

// 8. Create a Promise that rejects with "Something went wrong"
// and handle it using .catch()
// const promise2 = new Promise ((resolve, reject) => {
//     return reject("something went wrong")
// })
// promise2.catch((error) => {
//   console.log(error);
// });

// 9. Write a Promise chain with two .then() blocks

// const promise3 = new Promise((resolve, reject) => {
//   resolve(10);
// });
// promise3
//   .then((num) => {
//     console.log("first then", num);
//     return num * 2;
//   })
//   .then((res) => {
//     console.log("Second then", res);
//   });   //Each .then() receives the value returned from the previous .then().

//10.Create a Promise that resolves after 2 seconds using setTimeout
// const promise4 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Resolved after 2 seconds");
//   }, 2000);
// });
// promise4.then((res) => {
//   console.log(res);
// });

//11. Write a Promise chain that prints "Step 1" then "Step 2"
// const promise5 = new Promise((resolve) => {
//   resolve();
// });

// promise5
//   .then(() => {
//     console.log("Step 1");
//   })
//   .then(() => {
//     console.log("Step 2");
//   });

// ************************************* ASYNC AWAIT *************************

// 12. 13 or 14.  Convert .then() code into async / await
// fetch(url).then(res => res.json()) .then(data => console.log(data))

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json(); // await nahi lagaoge toh promise pending or await lgaoge data milega api ka
//   console.log(data);
// }
// getData();


// 13. 