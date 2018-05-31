/*Ejercicio 3:
Crear una función que retorne el primer elemento de un array. Si a la función le pasamos un segundo 
parámetro n (entero) nos retornará los n primeros elementos.
Datos de prueba : 
console.log(primer([7, 9, 0, -2])); 
console.log(primer([],3));
console.log(primer([7, 9, 0, -2],3));
console.log(primer([7, 9, 0, -2],6));
console.log(primer([7, 9, 0, -2],-3));
Salida : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
*/

function primElem(arr,m) {
    if(!n && arr && arr.length>0){
        return arr[0];
    }else if(n && arr && arr.length > 0 && arr.length <= n){

        return arr.slice(0,n);
        
    }else{

        return null;
    }
    
}