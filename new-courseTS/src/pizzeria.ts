import { Orderable } from "./orderable";
import { Pizza, Status } from "./pizza.model";

export abstract class Pizzeria implements Orderable {
    public static id= 0;
    private id: number;
    readonly name: string;
    public pizzasInOrder: Pizza[] = [];
    private maxPizzasInOwen = 10;
    protected recipes = [];
    private _manager = "Jan Kowalski";

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    public get manager() {
        return this._manager
    }

    public set manager(manager) {
        this._manager = manager;
    }

    public order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }

    public changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }

    private isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOwen;
    }

    public abstract bake(): string
}





