"use strict";
// Simple Generic 
function echo(data) {
    return data;
}
console.log(echo("houmam").length);
console.log(echo(22).length); //would pass and will show undefined
console.log(echo({ name: "houmam", age: 22 }));
//Better Generic: instead of assigning the type to any, we are using the data type
function betterEcho(data) {
    return data;
}
console.log(betterEcho("houmam").length);
// console.log(betterEcho(22).length); won't pass
// Built-in Generics
var testArr = [7, 13];
testArr.push(23);
// testArr.push('bla'); won't pass
function arrPrint(data) {
    data.forEach(function (element) {
        console.log(element);
    });
}
arrPrint(["Apple", "Microsoft"]);
//Generic Type
var echo2 = echo;
/* -> creat a type echo2 that holds a function the accepts data of the same type
and returns data of the same type*/
console.log(echo2("hi"));
//Generic Classes
//you can constrain a generic class to a collection of types using extends
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calc = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "something";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calc());
