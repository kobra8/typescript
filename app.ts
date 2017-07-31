
let variable = "Value";
console.log(variable); 
variable =  "Another value"
console.log(variable); 

//Block scope

function reset() {
    let variable = null;
    console.log(variable)
}
reset();
console.log(variable)

//Arrow functions
console.log("Arrow function");
const addNumbers = function(number1: number, number2: number): number{
    return number1 + number2
};
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number) => {
    return number1 * number2 };
    console.log(multiplyNumbers(10,3));

const greetings = () => "Greetings ";
console.log(greetings());

const greetFriend = friend => console.log(greetings() + friend);
greetFriend("Jarek");

console.log("SPREAD & REST");
const numbers = [1, 23, 45, 67, 87, 99];
console.log(Math.max(...numbers)); // SPREAD change array into chain of values -> spread sign ...

function makeArray(...args: number[]) { // REST change values into array -> rest sign is ... -> it works like rest when use in functions
    return args;
}
console.log(makeArray(1, 2, 3, 6))

console.log("Destructing arrays and objects:");
const hobbies = ["Railways", "Mountains"];
const [hobby1, hobby2] = hobbies;
console.log("Hob1:" + hobby1, "Hob2:" + hobby2);

const myPerson = {myName: "Jerzy", age: 42}
const {myName, age} = myPerson;
console.log(myName, age);

console.log("Template literals:");
const userName = "Jurek Drobot";
console.log(
    `
    Moje username wyświetlam poniżej:
    Username: ${userName}
    OK :)
    `
)