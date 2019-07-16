// var req = require.context("../someDir", true, /^(.*\.(js$))[^.]*$/igm);
// req.keys().forEach(function(key){
//     req(key);
// });

var config = require('./config.js')
var path = require('path')
// var { test, test1 } = require('./config.js')
config.forEach(c=>{
  var { test, test1 } = c
  console.log(require('./' + test + '.js')())
})
