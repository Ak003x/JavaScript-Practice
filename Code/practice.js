// function fruit(Apple, coconut) {
//     const juice = `Apple are ${Apple} and Coconut ${coconut}`
//     const added = `Apple are ${Apple + 1} and Coconut ${coconut + 2}`
//     return juice + " \n" + added;

// }
// console.log(fruit(5, 10));

// function testLet() {
//   //  console.log(b); // ❌ ReferenceError (not accessible before declaration)
//   let b = 20;
//   console.log(b); // 20

//   if (true) {
//     let b = 30;
//     console.log(b); // 30 (different block variable)
//   }

//   console.log(b); // 20 (original variable is safe)
// }
// function multiplier(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5)); // 10
// console.log(triple(5)); // 15


// callback
// function greet(name, back) {
//   return back(name);
// }

// function sayHello(name) {
//   return "hello " + name;
// }


// console.log(greet("Alice", sayHello)); // "Hello, Alice!"


// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6)
// console.log(numbers);
// numbers.pop(6)
// console.log(numbers);
// numbers.unshift(0)
// console.log(numbers);
// numbers.shift(0)
// console.log(numbers);


// let arr = [1, 2, 3, 4, 5];
// let arr1=arr.indexOf(3)
// // arr[arr1]=33;
// console.log(arr);


// let arr2=arr.map(num=>num===3?33:num)
// console.log(arr2);



// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.splice(1,1,"Mango"); // Replaces "Banana" with "Mango"
// console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]


// let a=10;
// function b(){
//   let a=20;
//   // console.log(a);
// }
// b();
// console.log(a + " out");


// let objectName = {
//   name: "Ak",
//   age: 45,
//   color: "red"

// }

// let simp = Object.entries(objectName);
// console.log(simp);

// let user = { name: "Akash", age: 22 };
// user.fame = user.name;
// delete user.name;

// console.log(user);


// let user = { fname: "Akash", age: 22 };

// // Rename "fname" → "name"
// let { fname, ...rest } = user;
// let renamedUser = { name: fname, ...rest };

// console.log(user);
// // { name: "Akash", age: 22 }
// let obj10 = {
//   name: "sachin"
// }
// let obj20 = {
//   phno: 2341234567
// }
// // let combinedObj = Object.assign(obj10, obj20)
// // console.log(combinedObj)

// let ak = JSON.stringify(obj10)
// console.log(ak)
// let ak1 = JSON.parse(ak)
// console.log(ak1)


// const people = [
//   { name: "Akash", age: 21 },
//   { name: "Sara", age: 21 },
//   { name: "John", age: 25 }
// ];

// const grouped = people.reduce((acc, person) => {
//   if (!acc[person.age]) {
//     acc[person.age] = [];
//   }
//   acc[person.age].push(person.name);
//   return acc;
// }, {});

// console.log(grouped);
// // // { "21": ["Akash", "Sara"], "25": ["John"] }

// let arr = [1, "2", 3, 4, 5, 4, 4, 8, 0,2,"2"]

// let result = arr.filter((num, i, array) => array.indexOf(num) === i);
// console.log(result);
// const students = [
//   { name: "Akash", marks: 45 },
//   { name: "Sara", marks: 80 },
//   { name: "John", marks: 60 }
// ];

// // Get students with marks > 50 and map to their names
// let result = students
//   .filter(student => student.marks > 50)
//   .map(student => student.name);

// console.log(result); // ["Sara", "John"]

// // If you want to use Object.entries(), create an object first
// let studentsObject = Object.fromEntries(
//   result.map((name, index) => [index, name])
// );

// console.log(studentsObject); // {0: "Sara", 1: "John"}


// const products =[
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 },
//   { name: "pen", price: 2000 },
//   { name: "pencil", price: 2000 }
// ]

// let result = products.map(product=>({...product,
//   discount:product.price * 0.1}));
// console.log(result);





// function Welcomeuser(username, message) {
//   console.log("welcome " + username);
//   message()

// }

// function message() {
//   console.log("Enjoy your stay!"
//   );
// } Welcomeuser("Ak", message);
// function repeatTask(times, task) {
//   for (let i = 0; i < times; i++) {
//     task()
//   }
// }


// const task = () => {
//   console.log("hello");
// }

// repeatTask(3,task)


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const double = number.map(num => num * 2);
// console.log(double);



// const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const double2 = number1.filter(num => num % 2 === 0);
// console.log(double2);



// const number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const double3 = number3.reduce((acc, curr) => acc + curr,);
// console.log(double3);

// //! sort
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sorted = num.slice().sort((a, b) => b - a)
// console.log(sorted);
// num


//! fetch using then catch
// const res = fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//     if (!response.ok) {
//         throw new Error ('Network response was not ok');

//     }
//     return response.json();
// }).then(data => { console.log("Data received:", data); }).catch(error => {
//     console.log("Fetch error:", error);
// });

//! fetch using async await




// const fetchData = async () => {
//     try {
//         // ❌ Invalid endpoint on purpose
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         if (!response.ok) {
//             // ✅ Correct syntax for including status
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Data received", data);
//         return data;

//     } catch (error) {
//         console.log("Error caught in fetchData:", error.message);
//         throw error;
//     }
// };

// // ✅ wrapper so await works
// const init = async () => {
//     try {
//         const result = await fetchData();
//         console.log("Success!", result);
//     } catch (error) {
//         console.error("Error caught in init:", error.message);
//     }
// };

// init();
// let x;
// // console.log( 0 || "true and ot appear");/

// // function greet(Name, callback) {
// //     console.log("Hello" + Name);
// //     const time = setInterval(() => {
// //         callback()
// //     }, 5000);

// //     setTimeout(() => {
// //         clearInterval(time);
// //         console.log("ended");
// //     }, 30000)
// // }

// // function afterGreeting() {
// //     console.log("How are u?");
// // }

// // greet(" Akash", afterGreeting);

// // function withRespect(fn) {
// //   return () => {
// //     console.log("Sir,");
// //     fn();
// //   };
// // }

// // const greet = () => console.log("Good morning!");
// // const respectfulGreet = withRespect(greet);

// // respectfulGreet();


// const books = [{
//   id: 1,
//   name: "unknown0",
//   author: "Ak0"
// }, {
//   id: 2,
//   name: "unknown1",
//   author: "Ak1"
// }, {
//   id: 3,
//   name: "unknown2",
//   author: "Ak2"
// },
// {
//   id: 4,
//   name: "Be a man",
//   author: "Akash"
// }
// ]

// const newBook = {
//   id: 5,
//   name: "Be a man",
//   author: "Akash"
// }


// // 1) Adding a new Data
// const NewBookAdded = [...books, newBook];
// console.log(NewBookAdded);


// // 2) deleting a data

// const DeleteData = NewBookAdded.filter((book) => book.id % 2 !== 0);
// console.log(DeleteData);

// // 3) Updating the object

// const UpdatedData = DeleteData.map((book) => book.id === 5 ? { ...book,newData: "pages" } : books);
// console.log(UpdatedData);


// function hello(callback, a, b) {
//   console.log("hello");
//   let result = a + b;
//   console.log(result);
//   callback(console.log("hello2"))
// }

// hello(() => console.log("leave"), 1, 2);


// function time(a,b) {
//   setTimeout(() => {
//     console.log("after 5 sec ");
//     console.log(a+b);
//   }, 5000)
// }

// time(1,2);


// //! split method
// let str = "I am devil on myWorld";
// const str2 = str.split(" ");
// console.log(str2);


// const obj = {
//     name: "Ak",
//     age: 45,
//     role: "SDE"


// }

// console.log(obj);

// obj.name="ka";
// console.log(obj.name);


// const book = {};

// function greet(callback) {
//     console.log("ii am old one");
//     callback();
// }

// greet(hello);

// function hello() {
//     console.log("hello i am callback function");
// }


//^resolve & then
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let user = { name: "Akash" }; resolve("completed")
//         console.log("Completed");
//     }, 5000)
// })


// console.log(promise);

// //^reject & catch
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let user = { name: "Akash" }; reject("Error 1 ")
//         console.log("Completed");
//     }, 2000)
// }).catch((reason) => console.log(reason))


// console.log(promise2);

// function getUser() {
//     return [
//         { name: "ak", Email: "ak@123.com", age: 54 },
//         { name: "ka", Email: "ka@123.com", age: 104 },
//     ]
// }


// function findUser(username) {
//     const users = getUser();
//     const user = users.find((user) => user.name === username)
//     return user;
// }

// console.log(findUser("ak", "ka"));


// const user = {
//     name: "Ak",
//     age: 45,
// }

// const json = JSON.stringify(user);
// console.log(json);

// const parJson = JSON.parse(json);
// console.log(parJson);


// let arr = [10, 20, 30];

// arr.forEach((value) => {
//     console.log(value * 2);
// });


// const [first,...last] = [1, 2, 3, 4, 5]
// console.log(first);
// console.log(last);


// console.log(typeof(null));



// const func = setInterval(() => {
//     console.log("this is set interval");
// }, 2000)


// console.log(func);

// setTimeout(() => {
//     clearTimeout(func)
// }, 6000);


//* Reduce method
// const number = [1, 2, 3, 4, 5];

// const sum = number.reduce((acc, curr) => {
//    return acc + curr



// }, 10);

// console.log(sum);


//*sum without reduce method
// const number = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     sum += number[i];
// }
// console.log(sum);


//*With for of loop
// let sum2 = 0;

// for (let num of number) {
//     sum2 += num;
// }
// console.log("Sum:" + sum2);



//* Currying in js

// function add(a) {
//     return function (b) {
//         return a * b;
//     }
// }
// const add2 =add(2)
// console.log(add2(12));

//wat will be return -- floating point
// console.log(0.1 + 0.2 === 0.3);


//* Convention to number
// let a = "Tap44564";
// console.log(typeof a);

// let b = parseInt(a);
// // let b = Number(a);
// console.log(typeof b);
// console.log(b);

// let c = {};
// console.log(typeof c);
// console.log(Boolean(c));


// console.log(Boolean([]));

//! ternary operator
// let age = 16;
// let message = age >= 18 ? "U can vote" : "u cant vote";
// console.log(message);

//! loops

//*for loop

// for (i = 1; i <= 5; i++) {
//     console.log("*");
// }

//* While loop

// i=1;
// while (i <= 5) {
//     console.log("*");
//     i++
// }


//* Do while loop

// i = 1;
// do {
//     console.log("*");
//     i++;
// } while (i <= 5);

//! pattern programming

//^ to print Square n*n
// let n = 8;
// for (i = 1; i <= n; i++) {

//     let row = "";
//     for (j = 1; j <= n; j++) {
//         row = row + "*";

//     }
//     console.log(row);
// }

//^ Hallow Square

// let n = 8;
// for (i = 1; i <= n; i++) {
//     let row = " ";
//     for (j = 1; j <= n; j++) {

//         if (i == 1 || i == n || j == 1 || j == n) {
//             row += i; // if want number use i index value or " *"
//         } else
//             row += " ";
//     }
//     console.log(row);
// }


// let n = 25;
// for (i = 1; i <= n; i++) {

//     let row = " ";
//     for (j = 1; j <= n; j++) {
//         if (i == 1 || i == n || j == 1 || j == n || j == Math.ceil(n / 2) || i == Math.ceil(n / 2) ||
//             i == j || i + j == n + 1 || i + j == Math.ceil(n / 2) || i - j == Math.ceil(n / 2)
//             || i + j == (n + 1) + Math.ceil(n / 2)|| j-i==Math.ceil(n/2)) {
//             row += "*";
//         } else
//             row += " ";


//     }
//     console.log(row);

// }

// let a = 100;
// let b = 200;

// function test() {

//     let c = a + b

//    return c;
// }

// let res = test();
// console.log(res);

// IIFE function
// (function () {
//     console.log("I run immediately");
// })();

// console.log(a);
// var a =10;
// console.log(a);


//scope
// function num(number) {
//     for (var i = 1; i <= number; i++) {
//         console.log(i);
//     }
//     console.log("i here", i);
// }

// num(5);

//^ splice

// let arr = [10, 20, 30, 40, 50];
// let remo = arr.splice(2, 7)
// console.log(remo);
// console.log(arr);

// Square root  map


// let number = [1, 4, 9, 16, 18, 19, 27, 30, 45];
// let result = number.map(x => Math.sqrt(x));
// console.log(result);

// let age = number.filter(x => x >= 18);
// console.log(age);

let num = [1, 2, 3, 4];
let sum = num.reduce((acc, x) => acc + x);
// console.log(sum);

//some
let Marks = [100, 200, 42, 60, 250, 36, 100,500];
let pass = Marks.some(x => x > 35)
//every
let ALLpass = Marks.every(x => x > 35)
// console.log(pass);
// console.log(ALLpass);

//find
let res = Marks.find(x => x > 400);
let res1 = Marks.findIndex(x => x > 400);
console.log(res);
console.log(res1);