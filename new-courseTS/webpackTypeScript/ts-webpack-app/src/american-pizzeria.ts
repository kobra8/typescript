import {Pizzeria} from './pizzeria';

export class AmericanPizzeria extends Pizzeria {
    bake(){
        return 'Pizza is being baked... please wait';
    }
}