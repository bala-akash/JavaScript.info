function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}

console.log(pow(2, 5));

let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumOfSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdepartment of Object.values(department)) {
      sum += sumOfSalaries(subdepartment);
    }
    return sum;
  }
}
