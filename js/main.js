

//Ejercicio 1 Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista.

Math.max(5,8,4,9,30,5,7,45,32,34,24,14,19)
console.log(Math.max(5,8,4,9,30,5,7,45,32,34,24,14,19));


//Ejercicio 2 María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: 
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

Math.min(-1, 3, 4, 2, 6)
console.log(Math.min(-1, 3, 4, 2, 6));

//Ejercicio 3 Escribir una función que permita saber si un número se repite dentro de un arreglo.

//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]

const numeros1  = [1, 22, 5, 17, 10, 5, 40, 5];
let duplicados1 = [];
 
const tempArray1 = [...numeros1].sort();
 
for (let i = 0; i < tempArray1.length; i++) {
  if (tempArray1[i + 1] === tempArray1[i]) {
    duplicados1.push(tempArray1[i]);
  }
}
 
console.log(duplicados1);


//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

const numeros2  = [7, 41, 5, 7, 10, 13, 2];
let duplicados2 = [];
 
const tempArray2 = [...numeros2].sort();
 
for (let i = 0; i < tempArray2.length; i++) {
  if (tempArray2[i + 1] === tempArray2[i]) {
    duplicados2.push(tempArray2[i]);
  }
}
 
console.log(duplicados2);


//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

const numeros3  = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let duplicados3 = [];
 
const tempArray3 = [...numeros3].sort();
 
for (let i = 0; i < tempArray3.length; i++) {
  if (tempArray3[i + 1] === tempArray3[i]) {
    duplicados3.push(tempArray3[i]);
  }
}
 
console.log(duplicados3);



//Ejercicio 4 Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado 
//Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

Array.prototype.shuffle = function() {
    for ( var i = this.length-1; i > 0; i-- ) {
        var j = Math.floor( i * Math.random() );
        var tmp = this[ j ];
        this[ j ] = this[ i ];
        this[ i ] = tmp;
    }
    return this;
}
var foo = [1, 2, 5, 14, 24, 31, 50, 105 ];
 
console.log( foo.shuffle() ); 

