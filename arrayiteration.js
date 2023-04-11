/* The syntax is */
let Array = ["akash", "pavi", "vasi"];
Array.forEach((element, index, array) => {
  console.log(`${element} is at index ${index} in ${array}`);
});
//for each element call alert
// ["akash", "pavi", "vasi"].forEach(alert);

let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

/* Fetching user details using find() */
let users = [
  { id: 1, name: "Akash" },
  { id: 2, name: "Pavi" },
  { id: 3, name: "Vasi" },
  { id: 4, name: "Siva" },
  { id: 5, name: "Saravana" },
  { id: 6, name: "Levins" },
];
let currentUser = users.find((item) => item.id === 2);
console.log(currentUser.name);

let someUsers = users.filter((item) => item.id < 6);
console.log(someUsers.length);
console.log(someUsers);

//map()
// as the map function calls a function for each element presents in it
let nameLists = ["Akash", "Pavithran", "Siva", "vasikaran"];
let lengths = nameLists.map(
  (item /* Instance declaration of variable for an element */) => item.length
);
console.log(lengths); //[5, 9, 4, 9]

let arrayOfNumbers = [95, 84, 12, 74, 54, 58];
let sorting = arrayOfNumbers.sort((a, b) => a - b); //(b-a==> Provides a descending order)
console.log(arrayOfNumbers); //sorted in an ascending order[12, 54, 58, 74, 84, 95]

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log(compare(55, 54)); // returns 1
console.log(compare(55, 55)); // returns 0
console.log(compare(55, 56)); // returns -1

arrayOfNumbers.sort(compare);
console.log(arrayOfNumbers); // [12, 54, 58, 74, 84, 95]

let arrayOfAlphabets = ["Österreich", "Andorra", "Vietnam"];
let sortings = arrayOfAlphabets.sort((a, b) => a.localeCompare(b)); //this helps in comparing even from other language which is limited to them
console.log(sortings); //['Andorra', 'Österreich', 'Vietnam']

let arrReverse = nameLists.reverse();
console.log(arrReverse); //['vasikaran', 'Siva', 'Pavithran', 'Akash']

let personName = "Vasikaran,Siva,Vasi,Pavi,Akash";
console.log(personName.split(""));
//['V', 'a', 's', 'i', 'k', 'a', 'r', 'a', 'n', ',', 'S', 'i', 'v', 'a', ',', 'V', 'a', 's', 'i', ',', 'P', 'a', 'v', 'i', ',', 'A', 'k', 'a', 's', 'h']
//Here in above console we get a result of every single letter as we feed an argument thet to split the given variable value using ('')
console.log(personName.split(","));
//['Vasikaran', 'Siva', 'Vasi', 'Pavi', 'Akash']
//What heppened is here we splitted using the (,) the values have in between one another

//The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

console.log(personName.split(",", 2 /* Length of the  Array */)); // As the result will be ['Vasikaran', 'Siva'] as the second arguments we passed in decides the length of the Array

let nameList = ["Österreich", "Andorra", "Vietnam"];
console.log(typeof nameList.join(";"));

//In JavaScript, the reduce() method is used to reduce an array of values to a single value by applying a function to each element of the array.
let numbers = [5, 8, 78, 25, 151, 45578];
let sum = numbers.reduce(
  (accumulator, calculatewith) => accumulator + calculatewith
);
console.log(sum);

// It also can be written as

let nos = [5, 8, 78, 25, 151, 45578];
let add = nos /* calling the variable */
  .reduce((accumulation, calculate) /* calling the function reduce */ => {
    return accumulation + calculate;
  });

const a = "age";
const objc = { name: "Pavi" };
objc[a] = 27;
console.log(objc.name);
console.log(objc.age);

//converting array to object using reduce()

let fruits = ["Apple", "Banana", "Orange"]; //==>Array of string
let results = fruits.reduce((accaumulate, currentValue, currentIndex) => {
  accaumulate[currentValue] = currentIndex;
  return accaumulate;
}, {});

console.log(results);

let arrayOfNumber = [1, 2, 5, 6, 4, 3];
let sortOfnos = arrayOfNumber.sort((a, b) => a - b);
console.log(sortOfnos);
let addOnNumbers = sortOfnos.reduce((sum, current) => sum + current, 0);
console.log(addOnNumbers); //21

let group = [1, 2, 5, 4, 85, 74, 85, 47, 85, 4, 8, 57, 8];
let finalValue = group.find((element) => element > 57);
console.log(finalValue); //85

let finalFilterValue = group.filter((element) => element < 85);
console.log(finalFilterValue); //[1, 2, 5, 4, 74, 47, 4, 8, 57, 8]
let answer1 = finalFilterValue.sort((a, b) => a - b); //[1, 2, 4, 4, 5, 8, 8, 47, 57, 74]
console.log(answer1);
let answer2 = answer1.reduce((sum, adding) => sum + adding);
console.log(answer2);

let army = {
  minAge: 18,
  maxAge: 30,
  canJoin(candidates) {
    return candidates.age >= this.minAge && candidates.age <= this.maxAge;
  },
};

let candidates = [
  { name: "Akash", age: 18 },
  { name: "Pavi", age: 28 },
  { name: "Levins", age: 27 },
  { name: "Vasi", age: 30 },
  { name: "Siva", age: 35 },
  { name: "Saravana", age: 17 },
];

let soldiers = candidates.filter((user) => army.canJoin(user));
console.log(soldiers.length);
let soldierDetail = soldiers.map(function (soldier) {
  return { name: soldier.name, age: soldier.age };
});
console.log(soldierDetail);
