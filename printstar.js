function printStar(n) {
  // Print upper triangle
  for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  }

  // Print lower triangle
  for (let i = n - 2; i > 0; i -= 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  }
}

printStar(5);

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
