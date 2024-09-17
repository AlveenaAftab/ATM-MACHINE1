#! /usr/bin/env node
//this line is called a shebang.it tells the OS(operating system) to run it with node.js 
//the user enter a english paragraph and all is needed is to just to implement counting characters and words without
//whitspaces create a github repository for project abd submit URL in the project submission form.  
//Import the 'inquirer" module,which is a command line interface for node.js
import inquirer from "inquirer";
//Declare a const 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter your sentence to count the word:",
    }
]);
const words = answers.Sentences.trim().split(" ");
//method use for white spaces removal (method) String.trim(): string
//Removes the leading and trailing white space and line terminator 
//characters from a string.and split Split a string into substrings
// using the specified separator and return them as an array.
//print array of words to console
console.log(words);
//print the word count of sentences to the console
console.log(`your sentence word count is ${words.length}`);
