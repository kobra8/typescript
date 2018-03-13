var Pizzeria = /** @class */ (function () {
    function Pizzeria(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOwen = 10;
        this.recipes = [];
        this._manager = "Jan Kowalski";
        this.id = Pizzeria.id++;
        this.name = name;
    }
    Object.defineProperty(Pizzeria.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: true,
        configurable: true
    });
    Pizzeria.prototype.order = function (pizza) {
        this.pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.isovenFull = function () {
        return this.pizzasInOrder.length > this.maxPizzasInOwen;
    };
    Pizzeria.id = 0;
    return Pizzeria;
}());
var laStrada = new Pizzeria("La Strada");
var americanHouse = new Pizzeria("American House");
var venezia = new Pizzeria("Venezia");
laStrada.order("Havanian Pizza");
laStrada.manager;
laStrada.manager = "Jola Nowak";
console.log(laStrada);
console.log(americanHouse);
console.log(venezia);