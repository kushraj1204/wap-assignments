// 1. using 5 ways to fix the errors which will print below in the console:
// Our Group: John
// Our Group: Pete
// Our Group: Alice

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList();
console.log("\n\n");

// Solution 1:Arrow Function
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student
            );
        });
    }
};
group1.showList();
console.log("\n\n");

// Solution 2: variable pointing to this
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student
            );
        });
    }
};
group2.showList();
console.log("\n\n");

//Solution3: Using bind
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group3.showList();
console.log("\n\n");

//Solution4: Normal for loop
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        for (let i = 0; i < this.students.length; i++) {
            console.log(this.title + ": " + this.students[i]);
        }
    }
};

group4.showList();
console.log("\n\n");

//Solution5: Normal for.. of loop
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        for (let student of this.students) {
            console.log(this.title + ": " + student);
        }
    }
};

group5.showList();
console.log("\n\n");

