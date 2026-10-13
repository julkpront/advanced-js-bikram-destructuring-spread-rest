//RESUELVE LOS EJERCICIOS AQUÍ

//1.- Dado el objeto **empleados**, extrae la empleada Ana completa.

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;
console.log(ana);

//2.- Dado el objeto *empleados*, extrae el email del empleado Luis-->Luis@gmail.com

const [{ email: emailLuis }] = empleados;
console.log(emailLuis);

//3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
// let a = 5;
// let b = 3;

// Al final
// let a = 3;
// let b = 5;

const { a = 5, b = 3 } = { a: 3, b: 5 };
console.log(a);
console.log(b);

//4.- Dado el objeto **HIGH_TEMPERATURES**

//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

//5.- Escribe una función llamada **sumEveryOther** que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...numeros) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
}

sumEveryOther(6, 8, 2, 3, 1);
sumEveryOther(11, 3, 12); //26

//6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).

function addOnlyNums() {
  let suma = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      suma = suma + arguments[i];
    }
  }

  return suma;
}

addOnlyNums(1, "perro", 2, 4); //7

//7.- Escribe una función llamada **countTheArgs** que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...args) {
  return args.length;
}

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

// 8.- Escribe una función llamada **combineTwoArrays**
// que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

//9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques(...args) {
  const uniques = [];
  for (let valor of args) {
    if (!uniques.includes(valor)) {
      uniques.push(valor);
    }
  }
  return uniques;
}

// function onlyUniques(...args) {
//   return [...new Set(args)];
// }

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); // ["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); // [1, 2, 3, 6, 7, 8]

// 10.- Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays
// como argumentos y los combine todos en un solo array.

function combineAllArrays(...arr) {
  const resultado = [];

  for (const miniArray of arr) {
    for (const item of miniArray) {
      resultado.push(item);
    }
  }

  return resultado;
}

console.log(combineAllArrays([1, 2], [3, 4], [5])); // [1, 2, 3, 4, 5]

// 11.- Escriba una función llamada **sumAndSquare** que reciba cualquier número de argumentos,
// los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...args) {
  let suma = 0;

  for (let i = 0; i < args.length; i++) {
    suma += args[i] * args[i];
  }
  return suma;
}
