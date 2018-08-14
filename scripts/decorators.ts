//Can only have a single constructor paramter
function logged(constructorFun: Function): void {
    console.log(constructorFun);
}

@logged
class Friend {
    constructor() {
        console.log("hi");
    }
}

//Factory: to make applying the decorator according to conditions 
function logging(value: boolean): any {
    return value ? logged : null;
}

function printable(constructorFun: Function) {
    //adds the function print to whatever it's attached to
    constructorFun.prototype.print = function () {
        console.log(this.name);
    }
}

@logging(true)
@printable
class Animal {
    name = "bunny"
}

const animal = new Animal();
(<any>animal).print();

// Method Decorator

function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = true;
    }
}

function editable2(value: boolean): any {
    return function (target: any, propName: string) {
        const newDesc: PropertyDescriptor = {
            writable: value
        }
        return newDesc;
    }
}

class Projectile {

    @editable2(false)
    projectileType: string;

    constructor(type: string) {
        this.projectileType = type;
    }

    @editable(false)
    calcDamage() {
        console.log(7777);

    }
}

const projectile = new Projectile('explosive');
projectile.calcDamage();
projectile.calcDamage = function () { console.log(0) } //won't apply because it's not editable 

function printInfo(target: any, methodName : string, paramIndex: number) {
    console.log("Target",target);
    console.log("Method Name",methodName);
    console.log("Index",paramIndex);
    
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    printStudentNumber(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(1000)
        } else {
            console.log(2000)
        }
    }
}

const course = new Course("Best Course");
course.printStudentNumber('bla',true);
course.printStudentNumber('bla',false);