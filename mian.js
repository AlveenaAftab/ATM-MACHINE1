"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class is a student properties for example his name,his id,his courses etc
//Define a student class
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Student.counter++; //increment use when new student add after 10000 it will add 1 no in id number
        this.name = name;
        this.courses = []; //initializr empty array for curses
        this.balance = 100;
        //Method work as a function to enroll a student in a course
    }
    //Method to enroll
    Student.prototype.enroll_course = function (course) {
        this.courses.push(course);
    };
    //Method to view a student balance
    Student.prototype.view_balance = function () {
        console.log("Balance of ".concat(this.name, " is ").concat(this.balance));
    };
    //Method to view a pay fees of student
    Student.prototype.pay_fees = function (amount) {
        this.balance -= amount; //substracton assignment operators
        console.log("$".concat(amount, " fees paid successfully for ").concat(this.name));
    };
    //show status Mthod to display student status
    Student.prototype.show_status = function () {
        console.log("ID:".concat(this.id));
        console.log("Name:".concat(this.name));
        console.log("Courses:".concat(this.courses));
        console.log("Balance:".concat(this.balance));
    };
    Student.counter = 10000;
    return Student;
}());
var Student_manager = /** @class */ (function () {
    function Student_manager() {
        this.students = [];
    }
    //Method to add new student
    Student_manager.prototype.add_student = function (name) {
    };
    return Student_manager;
}());
