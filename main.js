// Ejercicio 1 //
// Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. //
var numero = 10;
function par(numero) {
    if (numero % 2 === 0) {
        console.log(`el numero ` + numero + ` es par`);
    } else {
        console.log(`el numero ` + numero + ` es impar`);
    }
}

par(numero);


// Ejercicio 2 //
// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. //

const num1 = 19;
const num2 = 7;

function comparacion(num1, num2) {
    if (num1 > num2) {
        console.log("El numero " + num1 + " es mayor a " + num2);
    }
    
    if (num1 < num2) {
        console.log("El numero " + num2 + " es mayor a " + num1);
    }

    if (num1 == num2) {
        console.log("Los numeros son iguales");
    }
}

comparacion(num1, num2);

// Ejercicio 3 //
// Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. //


let mult = 532;

function multiploDe5(mult) {
    if (mult > 0 && mult % 5 == 0) {
        console.log("El numero " + mult + " es multiplo de 5");
    } else {
        console.log("El numero " + mult + " no es multiplo de 5");
    }
}

multiploDe5(mult);

// Ejercicio 4 //
//  Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. //

contador = 0;
final = 6;
function parametro (contador, final) {
    while (contador < final) {
        console.log(contador);
        contador ++;
    }
}

parametro(contador, final);


// Ejercicio 5 //
// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. //

contador1 = 1;
palabra = "Messi";
nmr = 11;
function wordAndNum(palabra, nmr, contador1) {
    while (contador1 < nmr) {
        console.log(palabra);
        contador1++;
    }
}

wordAndNum(palabra, nmr, contador1);

// Ejercicio 6 //
// Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.//

let Hermanos = ["Nicolas", "Tomas", "Santiago"];
function array(Hermanos) {
    console.log(Hermanos);
}
array (Hermanos);

// Ejercicio 7 //
// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".//

function array2(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        if (i !== 4) {
            console.log(arrays[i]);
        }
    }
}

const arrays = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array2(arrays);

// Ejercicio 8 //
// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.//

function multiplicado(array3, nmrs) {
    for (let i = 0; i < array3.length; i++) {
        console.log(array3[i] * nmrs);
    }
}

const array3 = [5, 15, 20, 25, 45];
const nmrs = 2;
multiplicado(array3, nmrs);