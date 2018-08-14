// Simple Generic 
function echo(data: any) {
    return data;
}

console.log(echo("houmam").length);
console.log(echo(22).length); //would pass and will show undefined
console.log(echo({ name: "houmam", age: 22 }));

//Better Generic: instead of assigning the type to any, we are using the data type
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("houmam").length);
// console.log(betterEcho(22).length); won't pass

// Built-in Generics
const testArr: Array<number> = [7, 13];
testArr.push(23);
// testArr.push('bla'); won't pass

function arrPrint<T>(data: T[]) {
    data.forEach(element => {
        console.log(element);

    });
}

arrPrint(["Apple", "Microsoft"]);

//Generic Type
const echo2: <T>(data: T) => T = echo;
/* -> creat a type echo2 that holds a function the accepts data of the same type 
and returns data of the same type*/

console.log(echo2("hi"));

//Generic Classes
//you can constrain a generic class to a collection of types using extends
class SimpleMath<T, U extends number | string> {
    baseValue:T | any ;
    multiplyValue: U | any;

    calc(){
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string,number>();
simpleMath.baseValue = "something";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calc());

