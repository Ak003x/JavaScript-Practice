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

const obj = {
    name: "ak",
    age: 45,
    "like this is": true,
}

for(key in obj){
    console.log(obj[key]); //Accessing the value. if we want key only user Key.
}