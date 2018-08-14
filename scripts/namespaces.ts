/*
    use namespaces in order to create an independent scope 
    namespace MyMath {
        const PI = 3.14;

        // add export keyword to allow usage from outside of namespace
        export function calcCir(d: number): number {
            return (d * PI)
        }

        export function calcRecArea(w: number, h: number): number {
            return w * h;
        }
    }
*/

//to import namespaces:

/// <reference path="namespaces/cirMath.ts" />>
/// <reference path="namespaces/recMath.ts" />>

//for aliasing
import Ans = MyMath.anotherNS;

Ans.print();

const PI = 2.99

console.log(MyMath.calcCir(7));