let myMap = new Map();
console.log(myMap);

myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

console.log(myMap.get("key1")); //value1
console.log(myMap.get("key2")); //value2
console.log(myMap.get("key3")); //value3

console.log(myMap.set("key1", "Akash"));
console.log(myMap.get("key1")); //Akash

console.log(myMap.size);

let john = { name: "John" }; //we declared an object contains a key [name] && the value["John"]
let visitCountMap = new Map(); //Declaring new map in order to avoid repeated object declaration

visitCountMap.set(john, 123);
console.log(visitCountMap.get(john));
let akash = { name: "Akash" };
visitCountMap = new Map();
visitCountMap.set(akash /*Key*/, 256 /*Value*/);
console.log(visitCountMap.get(akash));

let a = { name: "akash" };
let b = {};
