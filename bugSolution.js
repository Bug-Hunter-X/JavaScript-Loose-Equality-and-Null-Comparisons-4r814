function foo(a, b) {
  if (a === null || b === null) {
    return null; //This line is intended to return null if either argument is null
  }
  return a + b;
}
console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(5,5)); //Output: 10