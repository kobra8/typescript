import {PolishPizzeria} from './polish-pizzeria';
import {AmericanPizzeria} from './american-pizzeria';


const laStrada = new PolishPizzeria("La Strada", true);
const americanHouse = new AmericanPizzeria("American House");
const venezia = new PolishPizzeria("Venezia", false);

laStrada.order("Havanian Pizza");
console.log(laStrada.manager); // Użyty getter -> manager to get manager
laStrada.manager = "Jola Nowak"; // Użyty setter -> manager to set manager

console.log(laStrada);
console.log(americanHouse);
console.log(venezia);