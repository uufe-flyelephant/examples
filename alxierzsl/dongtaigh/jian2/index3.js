var charMap = require('./map.js');

function shake(xStr) {
  let tmp, tmp1, tmp2; // ['AB', 'Y']
  let len = xStr.length;
  let one, two;
  if (len > 0) {
    tmp1 = [charMap[xStr[0]]];
  }
  if (len > 1) {
    tmp2 = [charMap[xStr[0]] + charMap[xStr[1]]];
    two = charMap[xStr[0] + xStr[1]];
    if (two) {
      tmp2.push(two);
    }
  }
  for (let i = 2; i < len; i++) {
    one = charMap[xStr[i]];
    tmp = tmp2.map(item => item + one);
    two = charMap[xStr[i - 1] + xStr[i]];
    if (two) {
      tmp = tmp.concat(tmp1.map(item => item + two));
    }
    tmp1 = tmp2;
    tmp2 = tmp;
  }
  return tmp || tmp2 || tmp1;
}

// debugger;
console.log(shake('2121'));
