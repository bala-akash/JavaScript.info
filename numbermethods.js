//toFixed() prop

let num = 3.141592653589793;
console.log(num.toFixed(2)); // output: "3.14"
/* Determines the values needs to be placed after the point(.) "decimal values" */

/*In this example, toFixed(2) is used to format the number num with two decimal places. The resulting string "3.14" is then printed to the console. */

//toPrecision() prop

let numbers = 123.456;

console.log(numbers.toPrecision(4)); // Output: 123.5
/* Determines how many numbers should replicate in a data */

/*In this case, the method returns the string "123.5", because rounding up the original number to 4 digits gives us 123.5 */

//toString()

/* As it is an universal property every inputs are stored in a form of string as well as any type of data can be converted into string */

let textInSqFt = 1000;
console.log(typeof textInSqFt); // number
textInSqFt = "1000sq.ft";
console.log(typeof textInSqFt); //string
//In case if we dont know the type of data we can initially access it by converting the form of the value like

let contactNumber = 8524837815;
let a = contactNumber.toString();
console.log(typeof a);

let billion = 1000000000; //As we have totally 9(zero's and further it can be written as)
let billions = 1e9;
console.log(billion == billions); //true

/* As same as  the value can go in negative types tooo*/

let mcs /* MIcro-seconds */ = 0.000001;
let mcSs = 1e-6; //which explains five zeros to the left from one
console.log(mcSs);

console.log(mcs == mcSs);

//Math opertations

/* 
Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
 */

let cartItemsWorth1 = 0.1;
let cartItemsWorth2 = 0.2;
let totalValue = cartItemsWorth1 + cartItemsWorth2;
let value = Number(totalValue.toFixed(1));
console.log(value);
console.log(typeof value);
