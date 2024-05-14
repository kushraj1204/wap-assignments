// 4. What's the output of the code below when running in Node.js? If for the same code running in browser, what's the output? Why is the output different?

var message = 'Hello World';

function logMessage() {
    console.log(this);
    console.log(this.message);

}

logMessage();

/*
Output in nodejs is:
undefined

When running the same code in browser, the output is:
Hello World 

This is because in node unlike in browser the external declaration does not become a part of the global object.
In, browsers such declarations become a part of window which is the browser global object. So, in a browser Hello World is printed.
Whereas in node undefined is printed because our context of this is global and global doesn't contain any variable such as message.
i.e. to say external declarations do not go on to be a part of global object in node.
*/