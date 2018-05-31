/*Ejercicio 1:
Crear una función que acepta una oración de tipo string como parámetro y busca
la palabra que tiene mayor longitud.
Ejemplo entrada: 'El desarrollo Web es entretenido' 
Salida: 'entretenido'*/ 

function buscarPalabra(oracion){

    const palabras = oracion.split(" ");
    let lml = " ";

    for (let p in palabras) {

        const pa = palabras [p];
        if(lml.length< pa.length){
            lml=pa;
        }
    }
    return lml;
} 

console.info(buscarPalabra("La programacion web es entretenida"));