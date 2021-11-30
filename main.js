"use strict";
exports.__esModule = true;
//Variable Declaration
function doSomething() {
    for (var i = 0; i < 5; i++) {
        //Here var is used
        console.log(i);
    }
    console.log("Value of i is ".concat(i)); //No error
    for (var j = 0; j < 5; j++) {
        //Here let is used
        console.log(j);
    }
    //console.log(`Value fo j is ${j}`); // Error
}
doSomething();
//Data Types
var count = 5;
// count = 'a';   //error beacuse string cannot be assigned to number
var a; //Any Type
var b; //Number Type
var c; //Boolean Type
var d; //String Type
var e = [1, 2, 3, 4, 5]; // Number Array Type
var f = [1, true, "a", false, 10]; //Any Array Type
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {})); //Enum Type
var backgroundColor = Color.green;
//Type Assertions
var message1 = "abcdef";
var endsWithF = message1.endsWith("f"); //Intellisense is present
var message2;
message2 = "ghijkl";
var endsWithL = message2.endsWith("l"); //Intellisense is absent
//(<string>message2) - 1st Method
//(message2 as string) - 2nd Method
//Arrow Functions
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(10, 20));
function mul(num) {
    //Function Definition
    return console.log(num.num1 * num.num2);
}
mul({
    //Function Call
    num1: 10,
    num2: 20
});
//Classes
var Calculate = /** @class */ (function () {
    function Calculate(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Object.defineProperty(Calculate.prototype, "Num1", {
        get: function () {
            return console.log(this.num1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculate.prototype, "Num2", {
        set: function (value) {
            this.num2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Calculate.prototype.addnums = function () {
        return console.log(this.num1 + this.num2);
    };
    return Calculate;
}());
var calc1 = new Calculate(25, 50); //object of Calculate class
calc1.Num1;
calc1.Num2 = 100;
calc1.addnums(); //function call using object of Calculate class
//Modules
//animal.ts is a module
var animal_1 = require("./animal");
var dog = new animal_1.Animal();
dog.name = "tiger";
dog.color = "white";
dog.sound = "bark";
dog.voice();
