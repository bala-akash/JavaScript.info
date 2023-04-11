// /*
// The map() method is a built-in function in JavaScript that is used to transform each element of an array into
// a new value using a provided function. The map() method returns a new array with the same length
//  as the original array, but with each element transformed by the provided function.

// Here's an example:

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// In this example, we start with an array of numbers.
//  We use the map() method to create a new array called doubled by multiplying each element in the original
//  numbers array by 2.

// The map() method is often used to transform data in an array,
// such as converting a list of objects with certain properties into an array of only those properties.
// It's a powerful and flexible tool for manipulating arrays in JavaScript.

// */

// //In simple way there will be no changes in the length of the data which is provided but it can be altered using the function provided

// /* let see an example here lets make a list of recipie needed for the recepie*/

// let ingredientsNeeded = new Map([
//   ["basmatiRice", 1],
//   ["Onion", 1],
//   ["Tomato", 0.5],
//   ["Ginger", 0.05],
//   ["Garlic", 0.05],
//   ["Greenchilli", 0.2],
//   ["Masala", 0.1],
// ]);

// for (let list of ingredientsNeeded.keys()) {
//   console.log(list);
// }
// for (let weightInKg of ingredientsNeeded.values()) {
//   console.log(weightInKg);
// }
// for (let currentIngredient of ingredientsNeeded.entries()) {
//   console.log(`The ingredients are measurement in kg ${currentIngredient}`);
// }

// let obj = ["Bala", "Akash", 23];

// for (let key of obj) {
//   // console.log(
//   //   `My Name is ${obj.firstName} ${obj.secondName} and I'm ${obj.age} years old`
//   // );
//   // console.log(typeof key);
//   console.log(key);
//   // console.log(obj);
//   // console.log(obj[key]);
// }

// let arrayOfNames = [
//   ["name", "akash"],
//   ["age", 23],
// ];
// for (let keys of arrayOfNames) {
//   console.log(keys); //prints index of()
//   // console.log(arrayOfNames[keys]);
// }

// let nameLists = [{ name: "Akash" }, { age: 23 }];
// for (let key in nameLists) {
//   // console.log(key);
//   // console.log(nameLists);
// }

let obj = {
  name: "akash",
  age: 23,
  sex: "male",
};
for (let key in obj) {
  console.log(key);
}
let values = Object.values(obj);
console.log(values);
let keys = Object.keys(obj);
console.log(keys);
