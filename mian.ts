import inquirer from "inquirer";

//class is a student properties for example his name,his id,his courses etc
//Define a student class
class Student {        //common value called static counter 
    static counter = 10000;
    id:number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.counter++; //increment use when new student add after 10000 it will add 1 no in id number
        this.name = name;
        this.courses = [];  //initializr empty array for curses
        this.balance = 100;
    //Method work as a function to enroll a student in a course
 }
 //Method to enroll
 enroll_course(course: string){
    this.courses.push(course);
    }

    //Method to view a student balance

    view_balance(){
        console.log(`Balance of ${this.name} is ${this.balance}`);
    }

 //Method to view a pay fees of student
 pay_fees(amount: number){
    this.balance -= amount;  //substracton assignment operators
    console.log(`$${amount} fees paid successfully for ${this.name}`);
    }
//show status Mthod to display student status
 show_status(){
    console.log(`ID:${this.id}`);
    console.log(`Name:${this.name}`);
    console.log(`Courses:${this.courses}`);
    console.log(`Balance:${this.balance}`);
    }
}
class Student_manager{
    students: Student[]

    constructor(){
        this.students =[];

    }

    //Method to add new student
  add_student(name:string){
         
  }  
    
}