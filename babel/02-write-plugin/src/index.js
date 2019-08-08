var babel = require('babel-core');
var t = require('babel-types');
const code = `import {uniq, extend, flatten, cloneDeep } from "lodash"`;
const visitor = {
    // Identifier(path){
    //     console.log(path.node.name)
    // }
    Identifier:{
        enter(path) {
            console.log("我是进入的：",path.node.name)
        },
        exit(path) {
            console.log("我是退出的：",path.node.name)
        }
    }
}
const result = babel.transform(code, {
    plugins: [{
        visitor: visitor
    }]
})

