import {Pizzeria} from './pizzeria';

export class PolishPizzeria extends Pizzeria {
    constructor( name, public openAtNight) {
        super(name)
    }
    bake() {
        return 'Pizza is being baked';
    }
}