#!/usr/bin/env node
import inquirer from "inquirer";

let randomNumber: number = Math.floor(100000 + Math.random() * 80000);

let teacherDetails=await inquirer.prompt([
    {
        name: "name",
        type:"input",
        message:"Please Enter teacher's name",
        validate: function(value){
            if(/^[A-Za-z\s]+$/.test(value)){
                return true;
            }
            return "Please enter a valid name (only alphabets are allowed).";
        }
    },
    {
        name: "course",
        type: "list",
        message: "Select the course:",
        choices: ["Html", "Css", "Javascript", "Typescript", "Nextjs"],
   },
    {
         name:"experience",
         type:"input",
         message:"Experience in years?",
         validate: function (value) {
            if (value.trim()=="" || isNaN(Number(value)) || Number(value) <= 0) {
              return "Please enter a valid number of years.";
            }
            return true;
        },
    },
    {
         name:"contact",
         type:"input",
         message:"Please Enter your phone Number",
         validate: function (value) {
            if (!value.trim() || !/^\d{11}$/.test(value)) {
              return "Please enter a valid 11-digit contact number.";
            }
            return true;}
    },
    {
         name: "email",
         type: "input",
         message: "Please enter your email address:",
         validate: function (value) {
         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!value.trim() || !emailPattern.test(value)) {
          return "Please enter a valid email address.";
         }
         return true;}
    },
    
    {
    
            name: "classschedule",
            type: "list",
            message: "Please enter the class schedule (e.g., Mon 10-12, Wed 2-4):",
            choices:["Mon 9am-12am","Mon 2pm-5pm","Mon 7pm-10pm","Tue 9am-12am","Tue 2pm-5pm","Tue 7pm-10pm",
                "Wed 9am-12am","Wed 2pm-5pm","Wed 7pm-10pm"]
        
    },
    {
            name:"select",
            type:"list",
            message:"What would you like to do next?",
            choices:["view status","exit"]
        }
])
      if(teacherDetails.select==="view status"){
        console.log(`\n******Status****\n`)
        console.log(`Teacher Name:${teacherDetails.name}`);
        console.log(`Teacher ID: ${randomNumber}`);
        console.log(`Phone Number: ${teacherDetails.contact}`);
        console.log(`Email Address: ${teacherDetails.email}`);
        console.log(`Experience in years: ${teacherDetails.experience}`)
        console.log(`Slot: ${teacherDetails.classschedule}`)
        console.log(`Course: ${teacherDetails.course}`);
      } else {
        console.log(`\nExititng Student Management System`)
        }
    
    