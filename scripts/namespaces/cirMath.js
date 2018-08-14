"use strict";
var MyMath;
(function (MyMath) {
    var anotherNS;
    (function (anotherNS) {
        function print() {
            console.log('Hello Darkness');
        }
        anotherNS.print = print;
    })(anotherNS = MyMath.anotherNS || (MyMath.anotherNS = {}));
    var PI = 3.14;
    // add export keyword to allow usage from outside of namespace
    function calcCir(d) {
        return (d * PI);
    }
    MyMath.calcCir = calcCir;
})(MyMath || (MyMath = {}));
