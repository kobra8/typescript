
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