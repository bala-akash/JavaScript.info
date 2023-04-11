document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  var firstName = document.getElementById("firstName").value;
  var secondName = document.getElementById("secondName").value;
  var age = document.getElementById("age").value;
  alert(
    "First Name: " +
      firstName +
      "\nSecond Name: " +
      secondName +
      "\nAge: " +
      age
  );
});
