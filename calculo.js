// let resto = 14 % 2;
// console.log(resto);

// if (resto == 0) {
//   console.log('Es par');
// } else console.log('no es par');

// while (resto < 5) {
//   console.log(resto + 1);

//   resto += 1;
// }

// for (let i = 0; i < 5; i++) {
//   resto += 1;
//   console.log(resto);
// }
// switch (numero) {
//   case 0:
//     console.log('Bonificacion 0');
//     return;
//   case 3:
//     console.log('Bonificacion 3');
//     break;
//   case 5:
//   case 7:
//     console.log('Bonificacion 5');
//     return;
//   case 8:
//     console.log('bonificacion 8');
//     break;
//   default:
//     console.log('default');
//     return;
// }

// function calcular() {
//   let empleados = [10000, 5000, 2000];
//   console.log(empleados.length);
//   var suma = 0;

//   return empleados.reduce((acumulador, valor, indice) => {
//     console.log('Indice:', indice);
//     console.log('Acumulador', acumulador);
//     console.log('valor', valor);
//     return acumulador - valor, 0;
//   }, 0);
// }

// console.log(calcular());

// // function myFunc(valor) {
// //   valor = 5;
// //   return valor;
// // }

// // console.log(myFunc());

// function recibirPaquete(callback) {
//   console.log('Esperando el paquete...');

//   setTimeout(() => {
//     console.log('El paquete ha llegado.');
//   }, 2000);

//   setTimeout(() => {
//     callback();
//   }, 5000);
// }

// function abrirPaquete() {
//   console.log('Abriendo el paquete...');
// }

// recibirPaquete(abrirPaquete);

// function hola(callback) {
//   "callback" es un parámetro
//   console.log('Hola');
//   saludo(); // Se ejecuta la función pasada
// }

// function saludo() {
//   console.log('¿Cómo estás?');
// }

// hola();
// (saludo); // "saludo" es el argumento que pasamos

// console.log(0.1 + 0.2); // 0.30000000000000004 (¡No es exactamente 0.3!)

// function Fibo(A, B) {
//   console.log(A);
//   console.log(B);
//   C = A + B;
//   console.log(C);

//   while (C < 300) {
//     A = B;
//     B = C;
//     C = A + B;
//     console.log(C);
//   }
// }

// Fibo(0, 1);

// console.log((0.1).toString(2)); // "0.00011001100110011001100110011001100110011001100110011..."
// console.log((0.2).toString(2)); // "0.0011001100110011001100110011001100110011001100110011..."
// console.log((0.3).toString(2)); // "0.0100110011001100110011001100110011001100110011001101..."

// var binario = '1101000';
// console.log(binario);

// var entendible = parseInt(binario, 2);
// console.log(entendible);

// if (number == 1) {
//   console.log('Yes - definitely.');
// } else if (number == 2) {
// }

// let aqi;

// if (!aqi) {
//   console.log('Check your regional AQI');
//   return;
// }

// if (aqi <= 50) {
//   console.log('Good.');
// } else if (aqi <= 100) {
//   console.log('Moderate.');
// } else console.log('Unhealthy.');

// !let i = 0;
// while (i != 1) {
//   i++;
//   if (i == 1) {
//     continue;
//   }
//   console.log(i);
//!
