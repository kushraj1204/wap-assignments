// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

function printNumbers(from, to) {
    if(from>to){
        return;
    }
    let state = from;
    const timer = setInterval(function () {
        console.log(state);
        state++;
        if (state > to) {
            clearInterval(timer);
        }
    }, 1000);

}

printNumbers(3,8);