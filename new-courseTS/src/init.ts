import {PolishPizzeria} from './polish-pizzeria';
import {AmericanPizzeria} from './american-pizzeria';
import { Status } from './pizza.model';


const laStrada = new PolishPizzeria("La Strada", true);
const americanHouse = new AmericanPizzeria("American House");
const venezia = new PolishPizzeria("Venezia", false);

const capriciosa = {
    name: "Havanian Pizza", 
    price: 20.90, 
    size: "large",
    status: Status.Ordered,
    cancelable: true
}

laStrada.manager = "Jola Nowak"; // Użyty seter -> manager to set manager
console.log(laStrada.manager); // Użyty geter -> manager to get manager

venezia.order(capriciosa);
americanHouse.order(capriciosa);
venezia.changeStatus(0, Status.Baked); //Pizza array index , Status from enum