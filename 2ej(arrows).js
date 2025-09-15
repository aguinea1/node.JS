/*function esPar(num) {
    let bool = false;
    if(num % 2 = 0)
        bool = true;
    console.log(bool);
}-> normal function*/

const   esPar = num => num % 2 === 0;

console.log(esPar(7));
console.log(esPar(4));