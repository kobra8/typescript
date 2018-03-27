import { Orderable } from "./orderable";
import { Pizza, Status, SizeKey, PaymentMethod } from './pizza.model';
export declare abstract class Pizzeria implements Orderable {
    static id: number;
    private id;
    readonly name: string;
    pizzasInOrder: Pizza[];
    private maxPizzasInOwen;
    protected recipes: string[];
    private _manager;
    constructor(name: string);
    manager: string;
    getPaymentmethod(payment: PaymentMethod): string;
    order(pizza: Pizza): void;
    changeStatus(index: number, status: Status): void;
    changeSize(index: number, size: SizeKey): void;
    checkPrice({price}: Pizza): void;
    private isOvenFull();
    abstract bake(): string;
}
