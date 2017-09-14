// Exercise 1
class Car {
    name: string
    private acceleration: number = 0
    constructor(name: string) {
        this.name = name;
    }
    honk() {
        console.log("Toooooooooooooooot")
    }
    getAcceleration() {
        return this.acceleration
    }
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.name);
console.log(car.getAcceleration());
car.accelerate(10);
console.log(car.getAcceleration());

// Exercise 2
class BaseObject {
    protected width: number = 0;
    protected length: number = 0;
}
class Rectangle extends BaseObject {
    constructor(width, length) {
        super()
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length
    }
}
let myRectangle = new Rectangle(5, 4);
console.log(myRectangle.calcSize());

// Exercise 3
namespace Persons {
  export  class Person {
        private _firstName: string = "";

        get firstName() {
            return this._firstName;
        }
        set firstName(name: string) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = "";
            }
        }
    }
}
let person2 = new Persons.Person;

console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);