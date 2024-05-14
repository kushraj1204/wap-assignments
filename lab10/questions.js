// 1  4  
// Instructions
// 1 How many callbacks queues in Node.js and what are they? 
// Give examples to explain how different callbacks are enqueued in different queues.

// 2 What's the output in the code below? Try to understand how it works as we explained in the class

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

 

// 3. What's the output of the code below? Try to understand how it works as we explained in the class.

const fs = require('fs');


fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));

 

// 4. What's the output of the code below when running in Node.js? If for the same code running in browser, what's the output? Why is the output different?

var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();

 

// 5. What will happen when execute the code below? If there's error, what's the error and what cause the error? If no error, what's the output in the console? Assume pattern1.js and app.js are in the same folder

// pattern1.js

module.exports.getName = function () {

    console.log('Josh Edward');

};


// app.js

const getName = require('./pattern1');

getName();

 

// 6. What will happen when execute the code below? If there's error, what's the error and what cause the error? If no error, what's the output in the console? Assume pattern1.js and app.js are in the same folder

// pattern1.js

exports.getFirstname = function () {

    console.log('Josh');

};

exports = {

    getLastname: function(){

        console.log('Edward');

    }

}

module.exports = function (){

    console.log('Josh Edward');

}


// app.js

const getName = require('./pattern2');

getName();

 

// 7.  What will happen when execute the code below? If there's error, what's the error and what cause the error? If no error, what's the output in the console? Assume pattern1.js and app.js are in the same folder

// pattern1.js

exports.getFirstname = function () {

    console.log('Josh');

};

exports = {

    getLastname: function(){

        console.log('Edward');

    }

}

module.exports.getFullname = function (){

    console.log('Josh Edward');

}


// app.js

const {getFullname} = require('./pattern2');

getFullname();

 

 

// 8. Review IIFE, bind, apply, call methods first, what's the value of result in the console?

const result = (function(exports, module){

    exports = module.exports;

    exports.firstname = 'John';

    module.exports.lastname = 'Smith';

    exports = {

        getFullName: function(){

            console.log('John Smith')

        }

    }

    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);

