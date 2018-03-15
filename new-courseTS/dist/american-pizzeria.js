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
Object.defineProperty(exports, "__esModule", { value: true });
var pizzeria_1 = require("./pizzeria");
var AmericanPizzeria = /** @class */ (function (_super) {
    __extends(AmericanPizzeria, _super);
    function AmericanPizzeria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmericanPizzeria.prototype.bake = function () {
        return 'Pizza is being baked... please wait';
    };
    return AmericanPizzeria;
}(pizzeria_1.Pizzeria));
exports.AmericanPizzeria = AmericanPizzeria;
