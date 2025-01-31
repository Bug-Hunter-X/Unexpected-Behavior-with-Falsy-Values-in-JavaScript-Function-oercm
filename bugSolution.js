function foo(a, b) {
  if (!a || !b) {
    return 0; // Handle falsy values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));    // Output: 10
console.log(foo(0, 5));    // Output: 0
console.log(foo(5, false)); // Output: 0
console.log(foo(5, ""));   // Output: 0