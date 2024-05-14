const {getFullname} = require('./pattern1');
getFullname();

/*
The program outputs Josh Edward as output.
In pattern1 at first a function named getFirstname is added to the exports, which is actually added in the module.exports.
Then, when new assignment is made to the exports with getLastname as one of the functions, it now references to a new object
which is not actually module.exports.
In the end when module.exports.getFullname is assigned a value of a function, getFullName is added in the actual exports object
to be exported from module alongside getFirstName.

Now when destructuring is done in app.js by requiring pattern1.js, it is a valid assignment as  getFullname is now a valid variable in 
modules.export. Hence, there is no error and Josh Edward is printed.
*/