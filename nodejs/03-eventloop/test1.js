// https://zhuanlan.zhihu.com/p/33058983

console.log(1)

setTimeout(function () {
    console.log(1.5);
});

new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)
}).then(function(val){
    console.log(val);
})

console.log(1.6)
