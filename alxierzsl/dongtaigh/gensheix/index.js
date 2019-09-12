function indexOf(strAll, subStr){
  const len = strAll.length
  const subLen = subStr.length
  const checkSub = function(i){
    for(var j=1; j<subLen;j++){
      if(strAll[i+j] !== subStr[j]) return false
    }
    return true
  }
  for(let i=0;i<len;i++){
    if(strAll[i] === subStr[0]) {
      if(checkSub(i)) return i
    }
  }
  return -1
}

















































let index = indexOf("12031512315", "3154")
console.log(index)
