interface ProductItem { // Definicja interfejsu dla obiektu Product Item
    id: number;
    name: string;
}

// Łączenie deklaracji -> interfejsy sie nie nadpisują tylko łączą (przy deklaracji kolejnego interfejsu o tej samej nazwie)

interface ProductsQueue<T> { // Definicja interfejsu który będzie implementować klasa Queue (definicja metod do implementacji)
    push(item: T): void;
    pop(): void;
    getAll(): T[];
}

class Queue<T> implements ProductsQueue<T>{ // Przykład kolejki elementów z typem generycznym
    private data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll() {
        return this.data;
    }
 }

class ProductQueue extends Queue<ProductItem> { // Ta klasa dziedziczy po Queue przekazując typ ProductItem

}

const people = new Queue<string>(); // Instancja klasy Queue z typem string
people.push("abc");
people.push("123");

const numbers = new Queue<number>(); // Instancja klasy Queue z typem number
numbers.push(456);
numbers.push(123);

const productItems = new ProductQueue(); //Instacja klasy ProductQueue czyli w metodzie przekazany obiekt typu ProductItem
productItems.push({id: 1, name: 'Milk'});

