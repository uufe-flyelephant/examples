// alert("3")
// if(window.Promise) alert("1")
let a = 1
let b = Object.assign({ a: 1}, { b: 2 })

var p = new Promise((resolve, reject)=>{
  // setTimeout(()=>{
    resolve(12)
  // }, 1000)
})
p.then(res=>{
  console.log(res)
})
