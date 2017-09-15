function greet(person3) {
    console.log("Hello, " + person3.firstName);
}
function changeName(person) {
    person3.firstName = "Anna";
}
var person3 = {
    firstName: "Max",
    age: 27,
    hobbies: ["Cooking", "Singing"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person3);
changeName(person3);
greet(person3);
person3.greet("Zlasu");
var Human = (function () {
    function Human() {
    }
    Human.prototype.greet = function (lastName) {
        console.log("Hi, my last name is: " + lastName);
    };
    return Human;
}());
var human = new Human();
human.firstName = "Jerzy";
human.lastName = "Drobot";
greet(human);
human.greet(human.lastName);
var myDoubleFunction;
myDoubleFunction = function (val1, val2) { return (val1 + val2) * 2; };
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Jan",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
//# sourceMappingURL=app_interfaces.js.map