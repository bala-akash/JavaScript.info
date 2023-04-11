"use strict";

let emptyObj = {};
console.log(emptyObj);

// As prototype is known to inherit the property and methods from any object

let user = {
  name: "anonymous",
  pageAccess: ["login", "dashboard"],

  set setName(value) {
    this.name = value;
  },
  get getName() {
    return this.name;
  },
};

let adminUser = {
  __proto__: user,
  isAdmin: true,
};
adminUser.setName = "admin";
console.log(adminUser);
console.log(user);
