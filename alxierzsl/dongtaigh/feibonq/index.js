function fei(num) {
  let a = 1;
  let b = 2;
  let c = 4;
  for (let i = 0; i < num; i++) {
    [a, b, c] = [b, c, a + b + c];
    console.log(c);
  }
}

fei(10);
