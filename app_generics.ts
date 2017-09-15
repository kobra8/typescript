//Simple generic
function echo(data: any) {
    return data;
}
console.log(echo("Max"));
//console.log(echo(123).length); -> da się ale potem w konsoli jest undefinied

//better generic
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("max"));
//console.log(betterEcho(123).length); -> nie da się bo blokuje TS porównując z typem

//Built-in generics

const testResults: Array<number> = [1.94, 2.33];
testResults.push(12.4);
//testResults.push("Max"); -> nie da się bo TS blokuje porównując z typem
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

//Generic class
//W przykładzie Constraints czyli ograniczenia jakie typy mogą być przypisane do <T>
//Dodatkowo można ustalic który typ będzie odpowiadał do okreśklonej zmiennej i w jakiej kolejności
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());