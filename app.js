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
var variable = "Value";
console.log(variable);
variable = "Another value";
console.log(variable);
//Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow functions
console.log("Arrow function");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 3));
var greetings = function () { return "Greetings "; };
console.log(greetings());
var greetFriend = function (friend) { return console.log(greetings() + friend); };
greetFriend("Jarek");
console.log("SPREAD & REST");
var numbers = [1, 23, 45, 67, 87, 99];
console.log(Math.max.apply(Math, numbers)); // SPREAD change array into chain of values -> spread sign ...
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 6));
console.log("Destructing arrays and objects:");
var hobbies = ["Railways", "Mountains"];
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log("Hob1:" + hobby1, "Hob2:" + hobby2);
var myPerson = { myName: "Jerzy", age: 42 };
var myName = myPerson.myName, age = myPerson.age;
console.log(myName, age);
console.log("Template literals:");
var userName = "Jurek Drobot";
console.log("\n    Moje username wy\u015Bwietlam poni\u017Cej:\n    Username: " + userName + "\n    OK :)\n    ");
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 42;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setUsername("kobra88");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.prototype.setUsername = function (username) {
        this.username = username;
    };
    return Person;
}());
var person = new Person("Jerzy", "kobra8");
console.log(person);
console.log(person.name, person.username);
person.printAge();
person.setType("Fajny gość");
console.log("Nowa wartość username: " + person.username);
// Inheritance
var Max = (function (_super) {
    __extends(Max, _super);
    // name = "Max"
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 35;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("max");
console.log(max);
//Getters & setters
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Green";
console.log(plant.species);
//Static properthies and Methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract Classes
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget = this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
newProject.calcBudget();
console.log(newProject);
//private constructors - singletone
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    ;
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "XYZ0" -> It works when deleted "readonly" in the class constructor
//# sourceMappingURL=app.js.map