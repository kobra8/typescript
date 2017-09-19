function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class User {
    constructor() {
        console.log("Hi")
    }
}

//Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Machine {

}
//Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}
@logging(true)
@printable
class Tree {
    name = "Green tree";
}

const tree = new Tree();
(<any>tree).print();

//Method decorator
// Ta funkcja za pomocą parametru descriptor pozwala lub nie nadpisać metodę 
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}
//property decorator -> tutaj nie możemy użyc parametru descriptor. Trzeba zwrócić descriptor jako obiekt
function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Proj {
    //Ten dekorator blokuje nadpisanie właściwości projectName ale blokuje też konstruktor tworzący projectName
    @overwritable(false)
    projectName: string = "ABC";

    constructor(name: string) {
        this.projectName = name;
    }
    // W tym przypadku chronimy metodę calcBudget przed nadpisaniem
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Proj("NewSuperProject");
project.calcBudget();
//próba napisania metody w instancji project
project.calcBudget = function() {
    console.log(2000)
};
project.calcBudget();
console.log(project);

//Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("Method name: ", methodName);
    console.log("Param index: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000)
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);