//30-10-2021
class Student{
    rollno:number;
    name:string;
    constructor(r_no,stud_name)
    {
        this.rollno=r_no;
        this.name=stud_name;
    }
    display(){
        console.log(`Roll no: ${this.rollno} Name: ${this.name}`);
    }

}
var stud1=new Student(2,"John");
var stud2=new Student(1,"Sam");
stud1.display();
stud2.display();
