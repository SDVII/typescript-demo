namespace MyMath {

    export namespace anotherNS{
        export function print() {
            console.log('Hello Darkness');
        }
    }

    const PI = 3.14;

    // add export keyword to allow usage from outside of namespace
    export function calcCir(d: number): number {
        return (d * PI)
    }

}