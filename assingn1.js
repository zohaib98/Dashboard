//30-10-2021
var Student = /** @class */ (function () {
    function Student(r_no, stud_name) {
        this.rollno = r_no;
        this.name = stud_name;
    }
    Student.prototype.display = function () {
        console.log("Roll no: " + this.rollno + " Name: " + this.name);
    };
    return Student;
}());
var stud1 = new Student(2, "John");
var stud2 = new Student(1, "Sam");
stud1.display();
stud2.display();
