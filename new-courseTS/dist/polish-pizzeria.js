"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var pizzeria_1 = require("./pizzeria");
//Definicja dekoratora, czyli funkcji
function PizzaCreated(target) {
    console.log("Polish Pizzeria factory is running...");
}
//Definicja dekoratora, który będzie modyfikował konstruktor 
function ClosedAtNight(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.openAtNight = false; // Ddekorator zmienia pole w konstruktorze na false
            return _this;
        }
        return class_1;
    }(constructor));
}
// Definicja dekoratora, który będzie decydował czy metoda będzie miała propercję enumerable
function Enumerable(value) {
    return function (target, propertyKey, propertyDescriptor) {
        propertyDescriptor.enumerable = value;
    };
}
var PolishPizzeria = /** @class */ (function (_super) {
    __extends(PolishPizzeria, _super);
    function PolishPizzeria(name, openAtNight) {
        var _this = _super.call(this, name) || this;
        _this.openAtNight = openAtNight;
        return _this;
    }
    PolishPizzeria.prototype.bake = function () {
        return 'Pizza is being baked';
    };
    PolishPizzeria.prototype.order = function (pizza) {
        this.pizzasInOrder.push(pizza);
    };
    __decorate([
        Enumerable(false) //Użycie dekoratora  modyfikując metodę klasy
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PolishPizzeria.prototype, "bake", null);
    PolishPizzeria = __decorate([
        ClosedAtNight // Użycie dekoratora modyfikując konstruktor klasy
        ,
        PizzaCreated // Użycie dekoratora modyfikując klasę
        ,
        __metadata("design:paramtypes", [String, Boolean])
    ], PolishPizzeria);
    return PolishPizzeria;
}(pizzeria_1.Pizzeria));
exports.PolishPizzeria = PolishPizzeria;
