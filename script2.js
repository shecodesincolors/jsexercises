
// Suma Arreglo

const sumaArray=() =>{
    let myArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let randomNumber1 = myArray[Math.floor(Math.random()*myArray.length)];
    let randomNumber2 = myArray[Math.floor(Math.random()*myArray.length)];

    sum=randomNumber1+randomNumber2;
    console.log(`La suma de dos números random en el array es ${sum}`);
    
};

console.log("2. Suma de Array");
sumaArray();
