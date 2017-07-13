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
//Arrow dunctions
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
//# sourceMappingURL=app.js.map