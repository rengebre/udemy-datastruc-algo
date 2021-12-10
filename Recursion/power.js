const power = function(base, exp) {
  const count = exp;
  if (exp < 1) return 1;
  return base * power(base, exp - 1)
}

console.log(power(10, 5));