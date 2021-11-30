export {};

//Variable Declaration
function doSomething() {
  for (var i = 0; i < 5; i++) {
    //Here var is used
    console.log(i);
  }
  console.log(`Value of i is ${i}`); //No error
  for (let j = 0; j < 5; j++) {
    //Here let is used
    console.log(j);
  }
  //console.log(`Value fo j is ${j}`); // Error
}
doSomething();

//Data Types
let count = 5;
// count = 'a';   //error beacuse string cannot be assigned to number
let a: any; //Any Type
let b: number; //Number Type
let c: boolean; //Boolean Type
let d: string; //String Type
let e: number[] = [1, 2, 3, 4, 5]; // Number Array Type
let f: any[] = [1, true, "a", false, 10]; //Any Array Type
enum Color {
  red = 0,
  green = 1,
  blue = 2,
} //Enum Type
let backgroundColor = Color.green;

//Type Assertions
let message1 = "abcdef";
let endsWithF = message1.endsWith("f"); //Intellisense is present
let message2;
message2 = "ghijkl";
let endsWithL = (message2 as string).endsWith("l"); //Intellisense is absent
//(<string>message2) - 1st Method
//(message2 as string) - 2nd Method

//Arrow Functions
let sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(sum(10, 20));

//Interface
interface Calc {
  //Interface Creation
  num1: number;
  num2: number;
}
function mul(num: Calc) {
  //Function Definition
  return console.log(num.num1 * num.num2);
}
mul({
  //Function Call
  num1: 10,
  num2: 20,
});

//Classes
class Calculate {
  num1: number; //field 1
  num2: number; //field 2
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  get Num1() {
    return console.log(this.num1);
  }
  set Num2(value) {
    this.num2 = value;
  }
  addnums() {
    return console.log(this.num1 + this.num2);
  }
}
let calc1 = new Calculate(25, 50); //object of Calculate class
calc1.Num1;
calc1.Num2 = 100;
calc1.addnums(); //function call using object of Calculate class

//Modules
//animal.ts is a module
import { Animal } from "./animal";
let dog = new Animal();
dog.name = "tiger";
dog.color = "white";
dog.sound = "bark";
dog.voice();
