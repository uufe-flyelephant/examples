var charMap = require('./map.js');

function shake(xStr) {
  let tmp1, tmp2; // ['ABC', 'AX']
  let tmp;
  let len = xStr.length;
  if (len > 0) {
    tmp1 = [charMap[xStr[0]]];
  }
  if (len > 1) {
    tmp2 = [charMap[xStr[0]] + charMap[xStr[1]]];
    let two = xStr[0] + xStr[1];
    if (charMap[two]) {
      tmp2.push(charMap[two]);
    }
  }
  for (let i = 2; i < xStr.length; i++) {
    // console.log(tmp1, tmp2);
    let one = charMap[xStr[i]];
    tmp = tmp2.map(item => item + one);
    let two = xStr[i - 1] + xStr[i];
    if (charMap[two]) {
      two = charMap[two];
      tmp = tmp.concat(tmp1.map(item => item + two));
    }
    tmp1 = tmp2;
    tmp2 = tmp;
  }
  return tmp2;
}

console.log(shake('02421'));
