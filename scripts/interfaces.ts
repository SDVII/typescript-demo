//this syntax means that the passed object should at least have the arguments specified
//the more explicit the better 
interface NamedPerson{
    name : string | undefined;
    age? : number; //optional
    [propName : string]: any; //if you don't know the props name nor type
    greet(lastName: string) : void; //if it contains methods
}

function greet(person: NamedPerson) {
    console.log(`hello ${person.name}`);
}

function changeName(person: NamedPerson) {
    person.name = 'houmam';
}

const person = {
    name: "max",
    age: 27,
    greet(lastName : string){
        console.log(`${lastName}, ${name} ${lastName}`);
        
    }
}

greet(person);
changeName(person);
greet(person);

class Personal implements NamedPerson {
    name : string | undefined;
    greet(lastName : string){
        console.log(`${lastName}, ${name} ${lastName}`);
        
    }
}

const myPersonal = new Personal();
myPersonal.name = "kinan";
greet(myPersonal);
myPersonal.greet('hatahet');

// a function type that takes two numbers and returns one number
interface DoubleValFunc {
    (number1 : number, number2: number) : number;
}

let myDVF : DoubleValFunc;
myDVF = function(number1 : number, number2: number) : number {
    return (number1 + number2) * 2;
}

console.log(myDVF(7,13));

//inheritance

interface AgedPerson extends NamedPerson {
    age:number
}

const oldPerson: AgedPerson = {
    name:'sinan',
    age: 36,
    greet(lastName : string){
        console.log(`${lastName}, ${name} ${lastName}`);
        
    }
}
