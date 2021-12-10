const fib = function(n) {
  let num1 = 1;
  let num2 = 0;

  if (n - 1 > 1) {
    num1 = fib(n - 1);
    num2 = fib(n - 2);
  }

  return num1 + num2;
};

console.log(fib(20));