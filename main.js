#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let mypin = 4420;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin)
    console.log("correct pin code!!!");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your reamining balance is :" + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is :" + myBalance);
}
else {
    console.log("Incorrect pin code!!!");
}
