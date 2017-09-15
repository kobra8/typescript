interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person3: NamedPerson) {
    console.log("Hello, " + person3.firstName)
}
function changeName(person: NamedPerson) {
    person3.firstName = "Anna";
}
const person3: NamedPerson = {
    firstName: "Max",
    age: 27,
    hobbies: ["Cooking", "Singing"],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
}

greet(person3);
changeName(person3);
greet(person3);
person3.greet("Zlasu");

class Human implements NamedPerson {
    firstName: string;
    lastName: string; //rozszerzamy klasę o kolejne elementy
    greet(lastName: string) {
        console.log(`Hi, my last name is: ${lastName}`);
    }
}

const human = new Human();
human.firstName = "Jerzy";
human.lastName = "Drobot";
greet(human);
human.greet(human.lastName);

//Function types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}
let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (val1: number, val2: number) => (val1 + val2) * 2;
console.log(myDoubleFunction(10, 20));

//Interface inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Jan",
    greet(lastName: string) {
        console.log("Hello");
    }
}
console.log(oldPerson);
