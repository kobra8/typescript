"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polish_pizzeria_1 = require("./polish-pizzeria");
var american_pizzeria_1 = require("./american-pizzeria");
var pizza_model_1 = require("./pizza.model");
var laStrada = new polish_pizzeria_1.PolishPizzeria("La Strada", true);
var americanHouse = new american_pizzeria_1.AmericanPizzeria("American House");
var venezia = new polish_pizzeria_1.PolishPizzeria("Venezia", false);
var capriciosa = {
    name: "Havanian Pizza",
    price: 20.90,
    size: "large",
    // size: "large" as Size -> Rzutowanie typu czyli w tym przypadku Size jest enum rzutujemy mu stringa
    status: pizza_model_1.Status.Ordered,
    cancelable: true
};
laStrada.manager = "Jola Nowak"; // Użyty seter -> manager to set manager
console.log(laStrada.manager); // Użyty geter -> manager to get manager
venezia.order(capriciosa);
americanHouse.order(capriciosa);
venezia.changeStatus(0, pizza_model_1.Status.Baked); //Pizza array index , Status from enum
venezia.changeSize(0, "small");
console.log(laStrada);
