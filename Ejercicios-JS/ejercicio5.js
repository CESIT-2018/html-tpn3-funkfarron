/*Ejercicio 5:
Crear las siguientes funciones:
- Función que retornar un arrya todos los números pares que hay entre 1 y X
- Función quer retornar un array con todos los números impares entre 1 y X
- Función que retorna un array con todos los números primos entre 1 y X
- Función que retorna un array con todos los números no primos entre 1 y X
- Una función llamada integradora que recibe un número entero X y una función,  (par, impar, primo, no primo) y muestra el contenido del resultado de la función que le pasamos. 
*/

let pares=[];
let impares=[];
let primos=[];
let noprimos=[];
let conta=0;

let retornarPares=function (num){ 
    for (let i = 0; i < num; i++) {
        if(i%2==0){
         pares[conta++]=i;
        }
    }
    return pares;
}

let retornarImpares=function (num){
  
  
    for (let i = 0; i < num; i++) {
        if(i%2!=0){
         impares[conta++]=i;
        }
    }
    return impares;
}

let retornarNumPrimos=function (num){
    let primos=[];
    
    for (let i = 1; i <= num; i++) {
        let conta=0;
        for (let j= 1; j <= i; j++) {
            if((i%j)==0){
               conta++;
            }
        }
        if(conta==2){
            primos.push(i);
        }
    }
    return primos;
}

let retornarNumNoPrimos=function (num){  
    for (let i = 1; i <= num; i++) {
        let conta=0;
        for (let j= 1; j <= i; j++) {
            if((i%j)==0){
               conta++;
            }
        }
        if(conta!=2){
            noprimos.push(i);
        }
    }
    return noprimos;
}

function conCallback(num,Callback){
    return Callback(num);
}
let num=20;
console.info(retornarPares(num));
console.info(retornarImpares(num));
console.info(retornarNumPrimos(num));
console.info(retornarNumNoPrimos(num));

console.info(conCallback(num,retornarPares));
console.info(conCallback(num,retornarImpares));
console.info(conCallback(num,retornarNumPrimos));
console.info(conCallback(num,retornarNumNoPrimos));