function fib1(n) {
  if (n <= 1) return n;

  return fib1(n - 1) + fib1(n - 2);
}

// console.log(fib1(40));

function fib2(n) {
  if (n <= 1) return n;

  let first = 1;
  let second = 1;
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum = first + second
    first = second
    second = sum
  }
  return second
}
console.log(fib2(64));

