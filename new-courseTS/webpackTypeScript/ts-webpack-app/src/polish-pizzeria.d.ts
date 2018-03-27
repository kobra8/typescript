import { Pizza } from './pizza.model';
import { Pizzeria } from './pizzeria';
export interface ICancelablePizza {
    cancelable: boolean;
}
export declare class PolishPizzeria extends Pizzeria {
    openAtNight: boolean;
    constructor(name: string, openAtNight: boolean);
    bake(): string;
    order(pizza: Pizza & ICancelablePizza): void;
}
