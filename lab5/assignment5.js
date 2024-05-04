// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

function sum(inputArr) {
    let sum = 0;
    for (let index = 0; index < inputArr.length; index++) {
        sum += inputArr[index];
    }
    return sum;
}
console.log("Sum is " + sum([1, 5, 8, 19, 40]));

// Output: Sum is 73





// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

const getNewArray = function (strArray) {
    let rspArray = [];
    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        if (element.length >= 5 && element.indexOf('a') !== -1) {
            rspArray.push(element);
        }
    }
    return rspArray;
}
console.log(getNewArray(["apple", "ant", "Mozambique", "Harambe", "Kush", "Buddha"]));

// Output: [ 'apple', 'Mozambique', 'Harambe', 'Buddha' ]





// 3. Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const concat = (strInput, numArr, strArr) => {
    let returnArr = [...strInput, ...numArr, ...strArr];
    return returnArr;
}
console.log(concat('hi', [1, 2, 3], ['Hello', 'world']));

//Output: [ 'h', 'i', 1, 2, 3, 'Hello', 'world' ]





// 4.  For the given students array below, compute the average grade of all students who took cs303 course
//  which returns an object which key is students' names, values is the average.

const students = [

    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },

    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },

    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },

    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },

    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }

];

const resp = students.filter(x => x.courses.includes('cs303'))
    .reduce((accum, student) => {
        let avgGrade = student.grades.reduce((acc, grad) => {
            return acc + grad / student.grades.length
        }, 0);
        accum[student.name] = avgGrade;
        return accum;
    }, {})
    ;
console.log(resp);

// Output: { Quincy: 93.5, Sam: 86.5, Katie: 71.5 }

