"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelIncrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    return Opponent;
}());
console.log("*******Welcome to Adventure Game*******");
var player = await inquirer_1.default.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name "
    }
]);
var opponent = await inquirer_1.default.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Rio", "Goku", "zakuta"]
    }
]);
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.select);
do {
    // RIO
    if (opponent.select == "Rio") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion", "Run for Yor Life..."]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink Potion") {
            p1.fuelIncrease();
            console.log("Your Drink Health Potion. Your fuel is ".concat(p1.fuel));
        }
        else if (ask.opt === "Run for Yor Life...") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    //Goku
    if (opponent.select == "Goku") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for Yor Life..."]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log("Your Drink Health Portion. Your fuel is ".concat(p1.fuel));
        }
        else if (ask.opt === "Run for Yor Life...") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    //Zakuta
    if (opponent.select == "Zakuta") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for Yor Life..."]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log("Your Drink Health Portion. Your fuel is ".concat(p1.fuel));
        }
        else if (ask.opt === "Run for Yor Life...") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
