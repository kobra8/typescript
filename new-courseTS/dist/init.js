"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polish_pizzeria_1 = require("./polish-pizzeria");
var american_pizzeria_1 = require("./american-pizzeria");
var laStrada = new polish_pizzeria_1.PolishPizzeria("La Strada", true);
var americanHouse = new american_pizzeria_1.AmericanPizzeria("American House");
var venezia = new polish_pizzeria_1.PolishPizzeria("Venezia", false);
laStrada.order("Havanian Pizza");
console.log(laStrada.manager); // Użyty geter -> manager to get manager
laStrada.manager = "Jola Nowak"; // Użyty seter -> manager to set manager
console.log(laStrada);
console.log(americanHouse);
console.log(venezia);
