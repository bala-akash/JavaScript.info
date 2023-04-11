function printHashtag(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n - i) / 2) + "#".repeat(i));
  }
  for (let i = n - 2; i > 0; i -= 2) {
    console.log(" ".repeat((n - i) / 2) + "#".repeat(i));
  }
}
printHashtag(5);

let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
arrayOfNumbers.forEach((element) => {
  console.log(element * 2);
});
let arrayOfNumber = [1, 2, 3, 4, 5, 6];
let results = arrayOfNumber.map((element) => {
  return element * 2;
});
console.log(results);

const arrayOfNumbers = [1, 25, 4, 2, 54, 25, 4, 88, 55, 47, 9, 6, 5, 4, 11];
let ascendingOrder = arrayOfNumbers.sort((a, b) => a - b);

let identify = arrayOfNumbers.reduce(
  (accumulate, currentValue, currentIndex) => {
    if (accumulate <= currentValue) {
      return accumulate, currentIndex;
    }
  }
);
console.log(identify);

const arrayOfNumbers = [1, 25, 4, 2, 54, 25, 4, 88, 55, 47, 9, 6, 5, 4, 11];

// Sort the array in descending order
const sortedArray = arrayOfNumbers.slice().sort((a, b) => b - a);
console.log(sortedArray);
// Get the highest number and its index value
const highestNumber = sortedArray[0];
console.log(highestNumber);
const highestNumberIndex = arrayOfNumbers.indexOf(highestNumber);
console.log(highestNumberIndex);
