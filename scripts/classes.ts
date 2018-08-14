class Person{
    // private name :string;
    // username : string;
    // protected email : string;

    // constructor(name: string, username : string, email : string){
    //     this.name = name;
    //     this.username = username;
    //     this.email = email;
    // }
    
    //shorter ver.
    private predefinedVar = 7;

    constructor(public name: string, private username : string, protected email : string){
    }

    printUsername(){
        console.log(this.username);
        this.setEmail('kinan.hatahet@gmail.com')
    }

    private setEmail(newEmail : string){
        this.email = newEmail;
        console.log(this.email);
    }
}

const p = new Person('houmam','sdvii','houmam.hatahet@gmail.com');
p.printUsername();

class Houmam extends Person {

    constructor(username : string, email : string){
        super('houmam',username,email);
    }
}

const hoummam = new Houmam("sdvii",'h.h@hotmail.com');

class Plant {
    private _species: string = "Default";

    set species(value:string){
        if (value.length>3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }

    get species() :string{
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ba";
console.log(plant.species);
plant.species = "banana";
console.log(plant.species);

class Helpers {
    static pi: number = 3.14;
    static calcCir(d:number):number{
        return(this.pi * d);
    }
}

console.log(Helpers.calcCir(4));

// can only be inherited
abstract class Project {
    projectName: string = 'Default';
    budget: number = 7;

    //we only define how the function should look like
    abstract changeName(name:string): void;
    calcBudget(){
        return this.budget*2;
    }
}

class NewProject extends Project {
    changeName(name:string):void{
        this.projectName = name;
    }
}

let project = new NewProject();
project.changeName('super project');

//Can only be one object of this class
class Lonely{
    private static instance : Lonely;
    private constructor (public readonly name: string){}

    static getInstance(){
        if(!Lonely.instance){
            Lonely.instance = new Lonely('one is the loneliest number');
        }
        return Lonely.instance;
    }
}

let var3 = Lonely.getInstance();
console.log(var3.name);
// var3.name = "x"; won't work

