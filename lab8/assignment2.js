/*2. Create a Student Constructor function:
Properties: firstName:String, lastName:String, grades:Array
methods:
inputNewGrade(newGrade): push newGrade to grades
computeAverage(): return average of the grades
After you finish, create some students using the constructor function.
Then draw prototypal inheritance diagram.*/

function Student(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];
}

Student.prototype.inputNewGrade=function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage=function(){
    return this.grades.reduce((accum,x)=>accum+(x/this.grades.length),0);
}

const john=new Student("John","Cena");
john.inputNewGrade(4);
john.inputNewGrade(2);
john.inputNewGrade(3);
john.inputNewGrade(3);
john.inputNewGrade(4);
console.log(john);
console.log(john.computeAverage());

console.log('\n\n');

const steve=new Student("Steve","Austin");
steve.inputNewGrade(2);
steve.inputNewGrade(5);
steve.inputNewGrade(7);
steve.inputNewGrade(1);
steve.inputNewGrade(3);
console.log(steve);
console.log(steve.computeAverage());

console.log('\n\n');

const dwayne=new Student("Dwayne","Johnson");
dwayne.inputNewGrade(1);
dwayne.inputNewGrade(8);
dwayne.inputNewGrade(0.5);
dwayne.inputNewGrade(4);
dwayne.inputNewGrade(2.6);
console.log(dwayne);
console.log(dwayne.computeAverage());