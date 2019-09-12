var charMap = require('./map.js');

function shake(xStr) {
  console.log(charMap)
  console.log(xStr)
  var twoNumToChar = function(numStr) {
    if (+numStr <= 26) {
      return charMap[numStr];
    }
  };
  var res = {}; // 0: [A], 1: ['Y', 'AC']
  if (xStr.length > 0) res[0] = [charMap[xStr[0]]];
  if (xStr.length > 1) {
    res[1] = [charMap[xStr[0]] + charMap[xStr[1]]];
    let two = twoNumToChar(xStr.substr(0, 2));
    if (two) res[1].push(two);
  }

  for (var i = 2; i < xStr.length; i++) {
    let one = charMap[xStr[i]];
    res[i] = res[i - 1].map(item => item + one);
    let two = twoNumToChar(xStr[i - 1] + xStr[i]);
    if (two) {
      res[i] = res[i].concat(res[i - 2].map(item => item + two));
      // res[i] = [...res[i], ...];
    }
  }
  return res[xStr.length - 1];
}

// debugger;
console.log(shake('02421'));
