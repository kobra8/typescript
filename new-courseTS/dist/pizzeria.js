"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Pizzeria.prototype.getPaymentmethod = function (payment) {
        switch (payment.type) {
            case 'cash': return "Paid in cash in " + payment.currency;
            case 'debitCard': return "Paid with debit card with code " + payment.code;
            case 'onlinePayment': return "Paid online with bak account " + payment.bankAccount;
        }
        // Alternatywny Type guard w formie if
        // if(payment.type === "cash") { return `Paid in cash`}
    };
    Pizzeria.prototype.order = function (pizza) {
        this.pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.changeStatus = function (index, status) {
        this.pizzasInOrder[index].status = status;
    };
    Pizzeria.prototype.changeSize = function (index, size) {
        this.pizzasInOrder[index].size = size;
    };
    Pizzeria.prototype.checkPrice = function (_a) {
        var price = _a.price;
        if (typeof price === 'string') {
            console.log("Price is string: ", price.toLocaleLowerCase());
        }
        else if (typeof price === "number") {
            console.log("Price is number: ", price.toFixed());
        }
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this.pizzasInOrder.length > this.maxPizzasInOwen;
    };
    Pizzeria.id = 0;
    return Pizzeria;
}());
exports.Pizzeria = Pizzeria;
