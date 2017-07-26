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
//# sourceMappingURL=app.js.map