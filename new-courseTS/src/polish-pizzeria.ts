import { Pizzeria } from './pizzeria';
import { Pizza } from './pizza.model';

interface CancelablePizza {
    cancelable: boolean;
}
//Definicja dekoratora, czyli funkcji
function PizzaCreated(target: Function) {
    console.log("Polish Pizzeria factory is running...");
}

//Definicja dekoratora, który będzie modyfikował konstruktor 
function ClosedAtNight<T extends {new(...args:any[]):{}}>(constructor: T) { // definicja typu constructor: {new(...args:any[]):{}}
    return class extends constructor {
        openAtNight = false; // Ddekorator zmienia pole w konstruktorze na false
    }
}

// Definicja dekoratora, który będzie decydował czy metoda będzie miała propercję enumerable
function Enumerable(value: boolean) {
    return function(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        propertyDescriptor.enumerable = value
    }
}

@ClosedAtNight // Użycie dekoratora modyfikując konstruktor klasy
@PizzaCreated // Użycie dekoratora modyfikując klasę
export class PolishPizzeria extends Pizzeria {
    constructor( name: string, public openAtNight: boolean) {
        super(name)
    }

    @Enumerable(false) //Użycie dekoratora  modyfikując metodę klasy
    bake() {
        return 'Pizza is being baked';
    }

    public order(pizza: Pizza & CancelablePizza) { // Typ intersection czyli łączymy typy
        this.pizzasInOrder.push(pizza);
    }
}