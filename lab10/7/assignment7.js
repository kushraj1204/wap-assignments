
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
