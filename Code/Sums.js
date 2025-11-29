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

const user = {
    name: "Akash",
    age: 45,
    greet() {
        console.log("hello")
    },
    firstName: {
        first: "Ak",
        Second: "ash"
    }
};

// 1. user.name = "ak"   changing the value
// const { name: name2 } = user;
// console.log(name2);

// 2. access nested destructing
// const { firstName: { first, Second } } = user;
// console.log(first,Second);