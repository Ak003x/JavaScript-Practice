//* 1.problem
//* object sum

// const obj = {
//     a: 1,
//     b: 3,
//     sum() {
//         return this.a + this.b;
//     }
// }

// console.log(obj.sum());

//* 2.problem
//*solve the problem

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 100)
// }

// to solve we have to add let

//*3.problem About Objects

//! Creation of Object
// const obj = {
//     name: "ak",
//     age: 45,
//     "like this is": true,
// }
//! To access
// console.log(obj.name);
// console.log(obj["like this is"]);
//! Modify
// obj.name = "Akash";
//! Delete
// delete obj.age;
// delete obj["like this is"];
// console.log(obj);

//* 4. Access the key and making it dynamic

// const property = "FirstName";
// const name = "Akash";

// const obj = {
//     [property]: name,
// }

// console.log(obj);

// * 5. iterate the Objects with for in loop

// const obj = {
//     name: "ak",
//     age: 45,
//     "like this is": true,
// }

// for(key in obj){
//     console.log(obj[key]); //Accessing the value. if we want key only user Key.
// }

//*6. object assign
// const obj = {
//     a:"first",
//     b:"second",
//     a:"three"
// }

// console.log(obj);
//! a: value will be assign as three.

//*7  Create a function(obj) that multiple only all numeric property  value  of num by 2

// const nums = {

//     a: 100,
//     b: 200,
//     title: "My nums"
// }
// function multipleOf2(obj) {
//     for (key in obj) {
//         if (!isNaN(obj[key])) {
//             obj[key] = obj[key] * 2;
//         }
//     }
//     return obj;
// }
// console.log(multipleOf2(nums));

//*8 What is the output

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },

//     perimeter: () => 2 * Math.PI * this.radius,
// }

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); //NAN

//*9 Destructuring in obj

// const user = {
//     name: "Akash",
//     age: 45,
//     greet() {
//         console.log("hello")
//     },
//     firstName: {
//         first: "Ak",
//         Second: "ash"
//     }
// };

// 1. user.name = "ak"   changing the value
// const { name: name2 } = user;
// console.log(name2);

// 2. access nested destructing
// const { firstName: { first, Second } } = user;
// console.log(first,Second);

//* 10 whats the output

// let c = {
//     greeting: "hey"
// }

// let d;

// d = c;

// d.greeting = "hello";
// console.log(d.greeting); // Hello

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 }); //references not value


//* example of above sum
// const arr1 = [1, 2];
// const arr2 = arr1;
// arr2.push(3);
// console.log(arr1);


//* 11 wats the output

// const value = { number: 10 };

// const multiple = (x = { ...value }) => {
//     console.log((x.number *= 2));
// }
// multiple(); //20
// multiple(value); //20
// multiple(value); //40

//*12 wats the output

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "Akash",
//         age: 45,
//     }
//     return person;
// }
// const personObj1 = {
//     name: "Alex",
//     age: 46,
// }
// const personObj2 = changeAgeAndReference(personObj1);


// console.log(personObj1);
// console.log(personObj2);


//* 13 shallow copy & deep copy


// const developer1 = { name: "Ak", age: 45, details: { name1:"ak"} }


//! shallow copy - ... , slice()

// let developer2 = developer1;
// ...
// let developer2 = { ...developer1 }
// slice()

//deep copy
// let developer2 = structuredClone(developer1)

// console.log(developer2);

// developer1.name = "New data";
// console.log(developer1);
// console.log(developer2);

// function add(value) {
//     return x + y;
// }
// console.log(add(4));