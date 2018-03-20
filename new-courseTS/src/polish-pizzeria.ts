import { Pizzeria } from './pizzeria';
import { Pizza } from './pizza.model';

interface CancelablePizza {
    cancelable: boolean;
}
export class PolishPizzeria extends Pizzeria {
    constructor( name: string, public openAtNight: boolean) {
        super(name)
    }
    bake() {
        return 'Pizza is being baked';
    }

    public order(pizza: Pizza & CancelablePizza) { // Typ intersection czyli łączymy typy
        this.pizzasInOrder.push(pizza);
    }
}