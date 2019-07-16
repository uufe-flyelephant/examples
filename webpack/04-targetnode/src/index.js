const koa = require('koa')
// const fs = require('fs')
// const path = require('path')
import path from 'path'
import fs from 'fs'
// import koa from 'koa'

console.log(fs)
console.log(path.join(__dirname, '../package.json'))
console.log('riversom')

const app = new koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
