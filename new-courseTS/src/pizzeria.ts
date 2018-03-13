class Pizzeria {
    public static id = 0;
    private id;
    readonly name;
    private pizzasInOrder = [];
    private maxPizzasInOwen = 10;
    protected recipes = [];
    private _manager = "Jan Kowalski";

    constructor(name) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    public get manager() {
        return this._manager
    }

    public set manager(manager) {
        this._manager = manager;
    }

    public order(pizza) {
        this.pizzasInOrder.push(pizza);
    }

    private isovenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOwen;
    }
}

const laStrada = new Pizzeria("La Strada");
const americanHouse = new Pizzeria("American House");
const venezia = new Pizzeria("Venezia");

laStrada.order("Havanian Pizza");
laStrada.manager;
laStrada.manager = "Jola Nowak";

console.log(laStrada);
console.log(americanHouse);
console.log(venezia);