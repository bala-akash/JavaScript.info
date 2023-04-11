/* charAt(n)*/

let str = "Hello, world!";
console.log(str.charAt(1)); // Output: "e"
/*In this example, we have a string Hello, world!. When we call the charAt() method on this string and pass the argument 1, it will return the character at index 1, which is the letter "e". */

/* concat() */

let str1 = "Hello, ";
let str2 = "world!";
let str3 = " How are you?";
let result = str1.concat(str2, str3);

console.log(result); // Output: "Hello, world! How are you?"
/*In this example, we have three strings Hello, , world!, and How are you?. When we call the concat() method on the first string and pass the other two strings as arguments, it will join all three strings together and return a new string "Hello, world! How are you?".  */

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let text = "Hello";
console.log(text[0]); //H
console.log(text.charAt(1).toUpperCase()); //e
console.log(text.at(0)); //H
console.log(text[text.length - 1]); //0
console.log(text.at(-1)); //0//counts from backward
console.log(text.at(-2)); //l

// let brandName = "Arun";
// console.log(`This is ${brandName} ice-cream`);
// brandName = "Ibaco";
// console.log(`This is ${brandName} ice-cream`);

function branName(name) {
  this.brandName = name;
  console.log(`Thank you for visiting ${this.brandName}`);
}
let customer1 = new branName("ARUN Ice-Cream");
console.log(customer1.brandName);
let customer2 = new branName("IBACO Ice-Cream");

function upperCaseFirst(name) {
  name: name;
  let ucFirst = name.at(0).toUpperCase() + name.slice(1);
  return ucFirst;
}
console.log(upperCaseFirst("akash")); //Akash
console.log(upperCaseFirst("pavi")); //Pavi
console.log(upperCaseFirst("vasi")); //Vasi

//checkout for the includes
/* 
checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;
*/
let a = "akash";
let b = a.toLowerCase;
function checkSpams(content /* passing an arguments */) {
  let message = content;
  let lc = content.toLowerCase();
  if (lc.includes("viagra") || lc.includes("xxx")) {
    console.log(` as the given content includes either "viagra" or 'xxx'`);
  }
}
checkSpams("buy ViAgRA now");

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function currencyExtraction(currency) {
  return +currency.slice(1);
}
console.log(typeof currencyExtraction("$120"));

let texts = "Apple, Banana, Kiwi, Apple,,Oranges";
let part = text.slice(7, 13);
console.log(texts);
console.log(texts.length);
console.log(texts.slice(1 /*P*/, /*P*/ 3)); //starting values is considered but the end does'nt
console.log(texts.slice(0, 6)); //Apple
console.log(texts.slice(7)); //here by passing only one arguments as it starts from 6 and then print the remainings
console.log(texts.slice(-7)); //if the parameter passed in a negative range then the position is counted from end of the string
console.log(texts.slice(-12, -6)); //as same anyhow even here the end does'nt considred
console.log(texts.substr(7, 9)); //as the first argument works s usual but the second argument act as the length of the string
console.log(texts); //Apple Banana Kiwi
console.log(texts.replace("Apple", "Orange")); //Orange Banana Kiwi
let content = "Apple is one of the delicious fruit, Apple is Rich & Healthy";
console.log(content);
let newContent = content.replaceAll("Apple", "Orange");
console.log(newContent);
let greeting1 = "    Hello    ";
let greeting2 = "World";
let greeting3 = greeting1.concat(" ", greeting2);
console.log(greeting1 + " " + greeting2); //Hello World
console.log(greeting3); //Hello World
console.log(greeting1.trim());
console.log(greeting1.trimStart());
console.log(greeting1.trimEnd());
console.log(texts.indexOf("Banana"));
console.log(texts.lastIndexOf("Apple"));
console.log(texts.search("Apple"));
console.log(texts.includes("Apple"));
