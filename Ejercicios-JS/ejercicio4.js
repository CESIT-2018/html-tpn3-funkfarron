/*Ejercicio 4:
Dado dos arrays con valores individuales, hacer una función que retorne un array con la suma de cada valor individual del mismo índice de cada array.
Ejemplo : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Salida : 
[4, 5, 8, 10, 12, 13] 


function  (array1, array2)
*/


function sumaArrays(array1, array2) {
    var array3 = [];
    var minLength = Math.max(array1.length, array2.length);
    for ( var i = 0; i < minLength; i++) {
        array3[i] = array1[i] + array2[i];
    }
    return array3;
}

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
var array3 = sumaArrays(array1, array2);

console.info(sumaArrays(array1, array2));


