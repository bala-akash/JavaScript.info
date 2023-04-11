function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}
solveMeFirst(2, 3);
0;

function simpleArraySum(ar) {
  return ar.reduce((sum, current) => sum + current, 0);
}
console.log(simpleArraySum([1, 2, 3, 4]));

function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
}
let a = [17, 28, 30];
let b = [99, 16, 8];
console.log(compareTriplets(a, b));

function aVeryBigSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function aVeryBigSum(array) {
  return array.reduce((sum, current) => sum + current, 0);
}
console.log(1000000001, 1000000002, 1000000003, 1000000004, 1000000005);

//it can be also written as

function aVeryBigSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(1000000001, 1000000002, 1000000003, 1000000004, 1000000005);

function diagonalDifference(matrix) {
  let x = 0,
    y = 0,
    val = 0;
  matrix.forEach((elem, key) => {
    console.log(key);
    console.log(elem);
    console.log(elem[key]);
    if (elem[key] >= -100 && elem[key] <= 100) {
      x += elem[key];
      y += elem[elem.length - 1 - key];
    } else {
      val = null;
      return null;
    }
  });
  val = Math.abs(x - y);
  return val;
}

let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(matrix));

// It can also be written as

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];

// // initialize variables for diagonal sums
// let leftToRightSum = 0;
// let rightToLeftSum = 0;

// // loop through the rows and columns of the matrix
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     // if the current element is on the left-to-right diagonal
//     if (i === j) {
//       leftToRightSum += matrix[i][j];
//     }
//     // if the current element is on the right-to-left diagonal
//     if (i + j === matrix.length - 1) {
//       rightToLeftSum += matrix[i][j];
//     }
//   }
// }

// find the absolute difference between the diagonal sums
// const absDiff = Math.abs(leftToRightSum - rightToLeftSum);

// log the results
// console.log(`Left-to-right diagonal sum: ${leftToRightSum}`);
// console.log(`Right-to-left diagonal sum: ${rightToLeftSum}`);
// console.log(`Absolute difference: ${absDiff}`);

function plusMinus(arr) {
  let n = arr.length;
  // console.log(n);
  const positiveNumbers = arr.filter((x) => x > 0).length;
  // console.log(positiveNumbers);
  const negativeNumbers = arr.filter((x) => x < 0).length;
  // console.log(negativeNumbers);
  const zero = arr.filter((x) => x == 0).length;
  // console.log(zero);
  console.log((positiveNumbers / n).toFixed(6));
  console.log((negativeNumbers / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}
let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

// const height = 6;

// for (let i = 1; i <= height; i++) {
//   let row = "";

//   // Add spaces for each row
//   for (let j = 0; j < height - i; j++) {
//     row += " ";
//   }

//   // Add "#" symbols for each column
//   for (let k = 0; k < i; k++) {
//     row += "#";
//   }

//   console.log(row);
// }
