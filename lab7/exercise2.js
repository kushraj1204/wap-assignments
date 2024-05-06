// 2.  In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
// When will the scheduled function run?
// 1.After the loop.
// 2.Before the loop.
// 3.In the beginning of the loop.
// What is console.log going to show?

let i = 0;
setTimeout(() => console.log(i), 100); // ?
// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
    i++;
}



/** Solution:

The scheduled function will run after the loop ends. 
When setTimeout sets 100 ms as timeout, 
the rest of the synchronous code starts getting executed
and the execution of the function in timeout block takes place only
after those operation finish executing thereby printing the value of i to be 100000000

**/