

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

/////////////// PARTE 2 //////////////////////////////////////////////////// 

//Ejercicio 1 Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor
//Ejercicio 2 Solicitar 3 números (entre el 1 y el 100) y definir cual es el menor

function numMayor(array){
    let temp = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > temp){
            temp = array[i];
        }
    }
    return temp;
}

function numMenor(array){
    let temp = Number.MAX_VALUE;
    for (let index = 0; index < array.length; index++) {
        if(array[index] < temp){
            temp = array[index];
        }
    }
    return temp;
}

let btnResultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click", function(e) {
    e.preventDefault();
    let inputOne = parseInt(document.getElementById("inputOne").value);
    let inputTwo = parseInt(document.getElementById("inputTwo").value);
    let inputThree = parseInt(document.getElementById("inputThree").value);
    let array = [inputOne,inputTwo,inputThree];
    let resultHigh = document.getElementById("resultHigh");
    resultHigh.innerHTML = "El mayor es : "+numMayor(array);
    let inputOneField = document.getElementById("inputOne");
    inputOneField.focus();
    inputOneField.select();
  });

  //Ejercicio 2 Solicitar 3 números (entre el 1 y el 100) y definir cual es el menor

  let btnResultado2 = document.getElementById("btnResultado2");

  btnResultado2.addEventListener("click", function(e) {
      e.preventDefault();
      let inputOne = parseInt(document.getElementById("inputUno").value);
      let inputTwo = parseInt(document.getElementById("inputDos").value);
      let inputThree = parseInt(document.getElementById("inputTres").value);
      let array = [inputOne,inputTwo,inputThree];
      let resultLow = document.getElementById("resultLow");
      resultLow.innerHTML = "El menor es : "+numMenor(array)+"<br>";
      let inputOneField = document.getElementById("inputUno");
      inputOneField.focus();
      inputOneField.select();
    });






  //Ejercicio 4 Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

  let multiplo = document.getElementById("multiplo");

  multiplo.addEventListener("click", function(e) {
    e.preventDefault();
    let inputMultiplo = parseInt(document.getElementById("inputMultiplo").value);
    let multiploResult = document.getElementById("multiploResult");
    if(inputMultiplo >= 100 && inputMultiplo <= 200){
        multiploResult.innerHTML = multipleOfThree(inputMultiplo);
    }else{
        multiploResult.innerHTML = "No es un numero entre 100 y 200"
    }
  });

  function multipleOfThree(number){
    if(number % 3 == 0){
        return "Es multiplo";
    }else{
        return "No es multiplo";
    }
}

//Ejercicio 5 Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let isSum = document.getElementById("isSum");

isSum.addEventListener("click", function(e) {
    e.preventDefault();
    let inputOne = parseInt(document.getElementById("firstInput").value);
    let inputTwo = parseInt(document.getElementById("secondInput").value);
    let inputThree = parseInt(document.getElementById("thirdInput").value);
    let array = [inputOne,inputTwo,inputThree];
    let resultIsSum = document.getElementById("resultIsSum");
    if(isSumFn(array) != -1){
        resultIsSum.innerHTML = "El número es : "+isSumFn(array);
    }else{
        resultIsSum.innerHTML = "No es suma";
    }
    let inputOneField = document.getElementById("inputOne");
    inputOneField.focus();
    inputOneField.select();
  });

function isSumFn(array){
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            if(i == j) continue;
            sum += array[j];
        }
        if(sum == array[i]){
            return array[i];
        }
    }
    return -1;

}

//Ejercicio 6 Elabora un algoritmo para leer un número y determinar si es par o impar

let parImpar = document.getElementById("parImpar");

  parImpar.addEventListener("click", function(e) {
    e.preventDefault();
    let inputPar = parseInt(document.getElementById("inputPar").value);
    let resultPar = document.getElementById("resultParImpar");
    if(inputPar % 2 == 0){
        resultPar.innerHTML = "Es par";
    }else{
        resultPar.innerHTML = "Es impar"
    }
  });








//Ejercicio 2 Solicitar 3 números (entre el 1 y el 100) y definir cual es el menor

   