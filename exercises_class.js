var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooooooooot");
    };
    Car.prototype.getAcceleration = function () {
        return this.acceleration;
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.name);
console.log(car.getAcceleration());
car.accelerate(10);
console.log(car.getAcceleration());
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var myRectangle = new Rectangle(5, 4);
console.log(myRectangle.calcSize());
// Exercise 3
var Persons;
(function (Persons) {
    var Person = /** @class */ (function () {
        function Person() {
            this._firstName = "";
        }
        Object.defineProperty(Person.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (name) {
                if (name.length > 3) {
                    this._firstName = name;
                }
                else {
                    this._firstName = "";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    Persons.Person = Person;
})(Persons || (Persons = {}));
var person2 = new Persons.Person;
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);
