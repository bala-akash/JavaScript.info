//camelize("background-color") == "backgroundColor";

let camelize = (str) =>
  str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ) /*here if index == 0 return word or else return the index of word[0] to uppercase and add the remaining lettters*/
    .join("");

let text1 = camelize("my-long-word");
console.log(text1);
let text2 = camelize("list-style-image");
console.log(text2);
let text3 = camelize("-webkit-transition");
console.log(text3);

let filterRange = (arr, a, b) =>
  arr.filter((element) => element >= a && element <= b);
let arr = [5, 2, 8, 4, 1, 9];
let result = filterRange(arr, 1, 5);
console.log(result); //[5,2,4,1]

function copySorted(array) {
  return array.slice().sort();
}

let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

alert(sorted);
alert(array);

function calculator() {
  this.method = {
    /* this method is responsible for calculating the string */ "-": (a, b) =>
      a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split("");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.method[op] || isNaN(a) || isNaN(b)) {
      return;
      NaN;
    }
    return this.method[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names);

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));
