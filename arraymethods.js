//Push

let num = [1, 2, 3];
num.push(4, 5);
console.log(num); // 4 & 5 are added at the last an ethe push method returns a new string with the new length

let myArray = [1, 2, 3, 4, 5];
console.log(myArray);
let removeLast = myArray.pop();
console.log(removeLast); //5==>removed
let firstElement = myArray.shift();
console.log(firstElement); //1
myArray.unshift(-5, -4, -3, -2, -1, 0);
console.log(myArray);

let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
console.log(fruits); // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]

let fruit = ["Apple"];
let arr = fruit;
console.log(fruit === arr); //true
arr.push("Pears");
console.log(fruit); //['Apple', 'Pears']

let a = 5;
let b = "5";
console.log(a == b); //true
console.log(a === b); //false

let array = ["apple", "orange", "plum"];
for (let i = 0; i < array.length; i++) {
  alert(array[i]);
}

for (let fruti of array) {
  alert(fruti);
}

let fruitName = [];
fruitName[123] = "apple";
console.log(fruitName.length);

function addSum() {
  let numbers = [];
  while (true) {
    let value = prompt("Please enter the value except 0", 0);
    if (value == 0 || value == null || value == !isFinite(value)) break; // Here at this moment when there is 0 or if we press cancel button or else no value entered then the loop will break

    numbers.push(+value); // adding '+' returns the value into number directly
  }
  let add = 0;
  for (let numbering of numbers) {
    add += numbering;
  }
  return add;
}

console.log(addSum());
/*
 In above lines from Js-45 to Js-51 we will get a number using prompt and storing it in an empty array (numbers)  
  As well as from Js-53 to Js-57 we are adding the 
*/

let script = ["I", "study", "the", "complex", "language", "javascript"];
console.log(script[0]);
console.log(script[1]);
console.log(script[3]);
console.log(script[5]);
console.log();
// console.log(script.splice(0, 3)); //"I", "study", "the"
console.log(script); //"complex", "language", "javascript"
console.log(script.splice(0, 3, "i", "love", "the"));
console.log(script); // "i", "love", "the","complex", "language", "javascript"
// let removed = script.splice(0, 3);
// console.log(removed); //"i", "love", "the"
console.log(script.splice(3, 0, "Most-famous"));
console.log(script); //['i', 'love', 'the', 'Most-famous', 'complex', 'language', 'javascript']
