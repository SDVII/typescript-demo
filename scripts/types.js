"use strict";
var variable; //string,boolean,any or don't right anything and it would detect the assignment automatically.
var hobbies = ["Cooking", "Sports"];
// never type: is a function that never return anything, you can use it where there is error reporting
function neverReturns() {
    throw new Error("an error");
}
// nullable type : if you enabled null checking, you can use null type to show that a variable can have a null value
var nullVar;
// tuples is mixed array with a specific format
var address = ["street", 777];
// enum give numbers name
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Black"] = 7] = "Black"; //7
})(Color || (Color = {}));
var myColor = Color.Green;
//function name(params:type) : returnType{} 
function test(var1) {
    return var1;
}
// function types
var myTest;
myTest = test;
console.log(myTest(7));
var userData = {
    name: "Houmam",
    age: 22,
};
userData = {
    name: "Kinan",
    age: 28,
};
// you can add functions to objects in order to preform quick actions
var complex = {
    data: [7, 13],
    output: function (all) {
        return this.data;
    }
};
// union type: to allow multiple types for a variable;
var anotherVar = 7;
//function with a default value
var test2 = function (val, val2) {
    if (val === void 0) { val = 7; }
    if (val2 === void 0) { val2 = val * 2; }
    return (val);
};
//spreading
var numbers = [1, 2, 3, 4];
console.log(Math.max.apply(Math, numbers));
// -> console.log(Math.max(1,2,3,4))
//rest
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // args = (1,2,3,4,..) => makeArray(1,2,3,4,..)
    return args;
}
//destructuring
var hobbies2 = ["cooking", "swimming"];
var hobby1 = hobbies2[0], hobby2 = hobbies2[1];
// -> hobby1 = cooking, hobby2 = swimming
var obj = { fname: "houmam", age: 22 };
var myName = obj.fname, myAge = obj.age;
// -> myName = fname, you can extract with the same name if no name was provided.
