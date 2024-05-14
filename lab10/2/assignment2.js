// 2 What's the output in the code below? Try to understand how it works as we explained in the class
const { nextTick } = require("process");
const { start } = require("repl");

console.log('start');
setTimeout(() => console.log('timeout 1'), 0);
setTimeout(() => {
    console.log('timeout 2')
    process.nextTick(() => console.log('nextTick 3'));
}, 0);
setTimeout(() => console.log('timeout 3'), 0);
new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));
new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));
process.nextTick(() =>  console.log('nextTick 1'));
process.nextTick(() =>  console.log('nextTick 2'));
console.log('end');
