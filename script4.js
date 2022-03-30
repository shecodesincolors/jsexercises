/* const array=['arbol','cebolla','triste'];
const arrayFiltrado=array.filter(palabra=>{

    const myArrayWord=palabra.split("");
    let haveR=false;
    myArrayWord.forEach((letter)=>{
        if (letter==="r"){
            haveR=true;
        }
    });
   return haveR
});

console.log(arrayFiltrado)

/*
const arrayNumerico=[1,2,3,4,5,6,7,8,1.5,1.6,1.9,];
let valoresEnteros = arrayNumerico.filter(numero=> numero%1===0);
console.log("Enteros",valoresEnteros);*/


// Splitear Fecha

/* const fecha='1996-02-01';
const array= fecha.split('-')
console.log(array)  */

//Promesas Asincronía
/* 
const promise=new Promise((resolve,reject)=>{
    const number=Math.floor(Math.random()*10);

    setTimeout(()=>{
        number>5
        ? resolve(number)
        : reject(new Error("El número es menor o igual a 5"));
    },1000);
    
});

const realizarPromesaAsyncrona=async() => {
    try{const numero=await promise;
    console.log(numero);
}catch(error){
    console.log(error);
}

};

realizarPromesaAsyncrona(); */


//PETICIONES
//normalongs

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>console.log(response))
.catch((error)=>console.log(error)); */

// pidiendo de JSON


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>response.json())
.then((json)=>console.log(json))
.catch((error)=>console.log(error));

