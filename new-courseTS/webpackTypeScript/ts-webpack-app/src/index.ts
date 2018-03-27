import { PolishPizzeria } from './polish-pizzeria';
import { AmericanPizzeria} from './american-pizzeria';
import { Status, Size, Pizza } from './pizza.model';



const laStrada = new PolishPizzeria("La Strada", true);
const americanHouse = new AmericanPizzeria("American House");
const venezia = new PolishPizzeria("Venezia", false);

const capriciosa = {
    name: "Capriciossa", 
    price: 20.90, 
    size: "large", 
 // size: "large" as Size  ... Przykład rzutowania typu czyli w tym przypadku Size jest enum rzutujemy mu stringa
    status: Status.Baked,
    cancelable: true
}

const prosciutto = {
    name: "Prosciutto", 
    price: 28.20, 
    size: "small", 
    status: Status.Ordered,
    cancelable: true
}

laStrada.manager = "Jola Nowak"; // Użyty seter -> manager to set manager
console.log(laStrada.manager); // Użyty geter -> manager to get manager

americanHouse.order(capriciosa);
//venezia.changeStatus(0, Status.Baked); //Pizza array index , Status from enum
//venezia.changeSize(0, "small");

console.log(laStrada);

venezia.order(capriciosa);
venezia.order(prosciutto);


const table = document.getElementById('table');

const createTrNode = (pizza: Pizza) => {
    return `
        <tr>
            <td>${pizza.name}</td>
            <td>${pizza.price}</td>
            <td>${pizza.size}</td>
        </tr>
    `
}

const getRowsWithOrderedPizzas = (pizzerria: PolishPizzeria)  => {
    return pizzerria.pizzasInOrder.map(pizza => createTrNode(pizza))
    .join();
}
table.innerHTML = getRowsWithOrderedPizzas(venezia)