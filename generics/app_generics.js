//Simple generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
//console.log(echo(123).length); -> da się ale potem w konsoli jest undefinied
//better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("max"));
//console.log(betterEcho(123).length); -> nie da się bo blokuje TS porównując z typem
//Built-in generics
var testResults = [1.94, 2.33];
testResults.push(12.4);
//testResults.push("Max"); -> nie da się bo TS blokuje porównując z typem
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
//Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
//Generic class
//W przykładzie Constraints czyli ograniczenia jakie typy mogą być przypisane do <T>
//Dodatkowo można ustalic który typ będzie odpowiadał do okreśklonej zmiennej i w jakiej kolejności
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//# sourceMappingURL=app_generics.js.map