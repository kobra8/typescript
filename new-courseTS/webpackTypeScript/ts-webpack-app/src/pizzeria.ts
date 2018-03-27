import { Orderable } from "./orderable";
import { Pizza, Status, SizeKey, PaymentMethod } from './pizza.model';

export abstract class Pizzeria implements Orderable {
    public static id= 0;
    private id: number;
    readonly name: string;
    public pizzasInOrder: Pizza[] = [];
    private maxPizzasInOwen = 10;
    protected recipes: string[] = [];
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

    public getPaymentmethod(payment: PaymentMethod) {
        switch(payment.type) { // Switch pełni rolę type guarda
            case 'cash': return `Paid in cash in ${payment.currency}`;
            case 'debitCard': return `Paid with debit card with code ${payment.code}`;
            case 'onlinePayment': return `Paid online with bak account ${payment.bankAccount}`;
        }

        // Alternatywny Type guard w formie if
        // if(payment.type === "cash") { return `Paid in cash`}
    }

    public order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }

    public changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }

    public changeSize(index: number, size: SizeKey) {
        this.pizzasInOrder[index].size = size;
    }

    checkPrice({price}: Pizza) {
        if(typeof price === 'string') { // Type guard
            console.log("Price is string: ", price.toLocaleLowerCase());
        }
        else if (typeof price === "number") { // Type guard
            console.log("Price is number: ", price.toFixed());
        }
    }

    private isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOwen;
    }

    public abstract bake(): string
}





