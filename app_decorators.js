var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var User = (function () {
    function User() {
        console.log("Hi");
    }
    User = __decorate([
        logged
    ], User);
    return User;
}());
//Factory
function logging(value) {
    return value ? logged : null;
}
var Machine = (function () {
    function Machine() {
    }
    Machine = __decorate([
        logging(true)
    ], Machine);
    return Machine;
}());
//Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Tree = (function () {
    function Tree() {
        this.name = "Green tree";
    }
    Tree = __decorate([
        logging(true),
        printable
    ], Tree);
    return Tree;
}());
var tree = new Tree();
tree.print();
//Method decorator
// Ta funkcja za pomocą parametru descriptor pozwala lub nie nadpisać metodę 
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//property decorator -> tutaj nie możemy użyc parametru descriptor. Trzeba zwrócić descriptor jako obiekt
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Proj = (function () {
    function Proj(name) {
        //Ten dekorator blokuje nadpisanie właściwości projectName ale blokuje też konstruktor tworzący projectName
        this.projectName = "ABC";
        this.projectName = name;
    }
    // W tym przypadku chronimy metodę calcBudget przed nadpisaniem
    Proj.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Proj.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Proj.prototype, "calcBudget", null);
    return Proj;
}());
var project = new Proj("NewSuperProject");
project.calcBudget();
//próba napisania metody w instancji project
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
//Parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("Method name: ", methodName);
    console.log("Param index: ", paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
//# sourceMappingURL=app_decorators.js.map