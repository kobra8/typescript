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
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        this.data.shift();
    };
    Queue.prototype.getAll = function () {
        return this.data;
    };
    return Queue;
}());
var ProductQueue = /** @class */ (function (_super) {
    __extends(ProductQueue, _super);
    function ProductQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProductQueue;
}(Queue));
var people = new Queue(); // Instancja klasy Queue z typem string
people.push("abc");
people.push("123");
var numbers = new Queue(); // Instancja klasy Queue z typem number
numbers.push(456);
numbers.push(123);
var productItems = new ProductQueue(); //Instacja klasy ProductQueue czyli w metodzie przekazany obiekt typu ProductItem
productItems.push({ id: 1, name: 'Milk' });
