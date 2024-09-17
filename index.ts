#! /usr/bin/env node

import inquirer from "inquirer" //todoapp ---a list for material
let todos = [];
let condition = true;

while (condition) {
let todosQuestion= await inquirer.prompt( //await to stop for answer 
   [
     {
        name: 'todo',
        type: 'input', //default use
        message: "What you want to add in your todos?"
     },
     {
        name: 'SecondQuestion',
        type: 'confirm', //yes or no type use object is confirm
        message: 'Do you want to add more?',
        default:"true"
     }
    ]
);

todos.push(todosQuestion.todo); //push method use to target object addtask and input stores
condition = todosQuestion.SecondQuestion ;
console.log(todos);
}
//while loops contain consitions and it execute in that times
//read,update,delete