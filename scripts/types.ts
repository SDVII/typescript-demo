let variable: number; //string,boolean,any or don't right anything and it would detect the assignment automatically.
let hobbies: string[] = ["Cooking", "Sports"]

// never type: is a function that never return anything, you can use it where there is error reporting
function neverReturns() :never {
    throw new Error("an error");
}

// nullable type : if you enabled null checking, you can use null type to show that a variable can have a null value
let nullVar :null;

// tuples is mixed array with a specific format
let address: [string, number] = ["street", 777]

// enum give numbers name
enum Color {
    Gray, //0
    Green, //1
    Blue = 6, //6
    Black //7
}

let myColor: Color = Color.Green;

//function name(params:type) : returnType{} 
function test(var1: number): number //void if it doesn't return anything
{
    return var1;
}

// function types
let myTest: (val: number) => number;
myTest = test;
console.log(myTest(7));

let userData: {
    name: string,
    age: number
} = {
    name: "Houmam",
    age: 22,
}

userData = {
    name: "Kinan",
    age: 28,
}

// type alias: make your own type with parameters and return values
type Complex = {
    data: number[],
    output: (all: boolean) => number[]
};

// you can add functions to objects in order to preform quick actions
let complex: Complex = {
    data: [7, 13],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union type: to allow multiple types for a variable;
let anotherVar: number | string = 7;

//function with a default value
const test2 = (val:number = 7, val2:number = val*2): number =>{
    return(val);
}

//spreading
let numbers = [1,2,3,4];
console.log(Math.max(...numbers))
// -> console.log(Math.max(1,2,3,4))

//rest
function makeArray(...args:number[]) {
    // args = (1,2,3,4,..) => makeArray(1,2,3,4,..)
    return args;
}

//destructuring
let hobbies2 = ["cooking","swimming"];
let [hobby1,hobby2] = hobbies2;
// -> hobby1 = cooking, hobby2 = swimming

let obj = {fname:"houmam", age:22};
let {fname : myName ,age : myAge} = obj;
// -> myName = fname, you can extract with the same name if no name was provided.




