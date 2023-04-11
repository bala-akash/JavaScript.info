// Object
// const details = {
//   name: "Akash", //Property
//   age: 23, //Property
//   greetUser: function () {
//     //methods
//     return `Hi my name is ${this.name} & my age is ${this.age}`;
//   },
// };
// let nameInput = prompt("What is your name", "enter your name?");
// let userAge = prompt("what is your age?", 0);
// // console.log(nameInput);
// // console.log(userAge);
// details.name = nameInput;
// details.age = userAge;

// document.write(details.greetUser());

document
  .getElementById("myForm")
  .addEventListener("mouseover", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    // if (firstName == "") {
    //   alert("The First Name must be filled");
    // }
    let secondName = document.getElementById("secondName").value;
    // if (secondName == "") {
    //   alert("The Second Name must be filled");
    // }
    let age = document.getElementById("age").value;
    // if (age == "") {
    //   alert("The age must be filled");
    // }
    console.log(`First Name: ${firstName} 
  Second Name: ${secondName}
  Age: ${age}`);
  });

// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // prevent the form from submitting and refreshing the page
//   var firstName = document.getElementById("firstName").value;
//   var secondName = document.getElementById("secondName").value;
//   var age = document.getElementById("age").value;
//   alert(
//     "First Name: " +
//       firstName +
//       "\nSecond Name: " +
//       secondName +
//       "\nAge: " +
//       age
//   );
// });

var titleElement = document.querySelector("title");
var headElement = titleElement.parentNode;
console.log(titleElement);
console.log(headElement);
var contentElement = document.querySelector(body);
let firstElement = contentElement.parentElement;
