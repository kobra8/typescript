
let variable = "Value";
console.log(variable);
variable = "Another value"
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
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => {
    return number1 * number2
};
console.log(multiplyNumbers(10, 3));

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

const myPerson = { myName: "Jerzy", age: 42 }
const { myName, age } = myPerson;
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

class Person {
    name: string;
    private type: string;
    protected age: number = 42;

    constructor(
        name: string,
        public username: string
    ) {
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setUsername("kobra88");
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
    private setUsername(username: string) {
        this.username = username
    }
}

const person = new Person("Jerzy", "kobra8");
console.log(person);
console.log(person.name, person.username);
person.printAge();
person.setType("Fajny gość");
console.log("Nowa wartość username: " + person.username);
// Inheritance

class Max extends Person {
    // name = "Max"
    constructor(username: string) {
        super("Max", username)
        this.age = 35;
    }
}
const max = new Max("max");
console.log(max)

//Getters & setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default"
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "Green";
console.log(plant.species);