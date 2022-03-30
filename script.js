//1  Suma numeros enteros


let num1 = window.prompt("Ingresa un número: ");
let num2 = window.prompt("Ingresa segundo número: ");

const sumaEnteros=() => {
    
let x = parseInt(num1);
let y = parseInt(num2);

sum=x+y;
console.log(`La suma es ${sum}`);
};

console.log("1. La Suma Enteros va a pedir un input");
sumaEnteros();



