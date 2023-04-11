/* 
1. Write a JavaScript program to display the current day and time in the following format
*/
const now = new Date();
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
][now.getDay()];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
][now.getMonth()];
const today = now.getDate();
console.log(today);
const year = now.getFullYear();
const hour = now.getHours().toString().padStart(2, "0");
const minute = now.getMinutes().toString().padStart(2, "0");
const second = now.getSeconds().toString().padStart(2, "0");
const timeString = `${hour}:${minute}:${second}`;
const dateString = `${dayOfWeek}, ${month} ${today}, ${year}`;
console.log(`Current date and time: ${dateString} ${timeString}`);

/* */
/* 
2. Write a JavaScript program to print the contents of the current window.2. Write a JavaScript program to print the contents of the current window.
 */
function printCurrentPage() {
  window.print();
}

/* 
3. Write a JavaScript program to get the current date//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

var todaysDate = new Date();
var dd = todaysDate.getDate();
var mm = todaysDate.getMonth() + 1;
var yyyy = todaysDate.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
todaysDate = mm + "-" + dd + "-" + yyyy; //03-17-2023
console.log(todaysDate);
todaysDate = mm + "/" + dd + "/" + yyyy; //03/17/2023
console.log(todaysDate);
todaysDate = dd + "-" + mm + "-" + yyyy; //17-03-2023
console.log(todaysDate);
todaysDate = dd + "/" + mm + "/" + yyyy; //17/03/2023
console.log(todaysDate);

/*
4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/
const side1 = 5;
const side2 = 6;
const side3 = 7;
let square = (side1 + side2 + side3) / 2;
console.log(square);
let squareRoot = Math.sqrt(
  square * (square - side1) * (square - side2) * (square - side3)
);
console.log(squareRoot.toFixed(2));
