//  let nombre = 'Eduardo';
//  let apellido = 'Torres';
//  const ciudad = 'Ensenada';
//  const nacimiento = 1996;
//  function calcularEdad(year){
//      return 2020 - year;
//  }

//  console.log(nombre + ' ' + apellido + ', nació en ' + ciudad + ' y su edad es: ' + calcularEdad(nacimiento));

//  //es6
//  console.log(`${nombre} ${apellido}, nació en ${ciudad} y su edad es ${calcularEdad(nacimiento)}`)

// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);
// console.log(`${nombre} `.repeat(5));
// console.log(nombre.includes('ua'));
// console.log(nombreCompleto.startsWith('Adu '));

// const years = [2000, 2005, 2008, 2012];

// //es5
// var edad5 = years.map(function(el){
//     return 2019 - el;
// });
// console.log(edad5);


// //es6
// let edad6 = years.map(el => 2020 - el);
// console.log(edad6);

// edad6 = years.map((el, index) => `Edad ${index + 1}: ${2020- el}`);
// console.log(edad6);

// edad6 = years.map(
//     (el, index) => {
//         const yearActual = new Date().getFullYear();
//         const edad = yearActual - el;
//         return `Edad ${index + 1}: ${edad}`;
//     }
// );
// console.log(edad6);

// const cuadrado = (num ) => num * num;
// console.log(cuadrado(10));

// const personas = [
//     {
//         nombre: 'Pablo',
//         edad: 20
//     },
//     {
//         nombre: 'Ana',
//         edad: 25
//     },
//     {
//         nombre: 'Carlos',
//         edad: 30
//     },
//     {
//         nombre: 'Pepe',
//         edad: 35
//     }
// ]

// const menores30 = personas.filter(function(persona){
//     return persona.edad < 30;
// });

// const menores30 = personas.filter((persona) => persona.edad < 35);

// console.log(menores30)

// //es5
// var datos = ['Pablo', 25];

// //es6
// var [nombre, edad] = ['Pablo', 25];
// console.log(nombre);
// console.log(edad);

// const persona = {
//     nombre1: 'Carlos',
//     edad1: 30
// }

// const {nombre1, edad1} = persona;
// console.log(nombre1);
// console.log(edad1);

// const {nombre1: n, edad1: e} = persona;
// console.log(n);
// console.log(e);
// calcMayoriaEdad = (year) => {
//     console.log(year);
//     let edad = new Date().getFullYear() - year;
//     console.log(edad);
//     const mayoriaEdad = edad >= 18 ? true : false;
//     return (edad, mayoriaEdad);
// };

// const {edad, mayoriaEdad} = calcMayoriaEdad(1990);
// console.log(edad);
// console.log(`Es mayor de edad: ${mayoriaEdad}`);

// const datos = new Map();

// datos.set('nombre', 'Eduardo');
// datos.set('edad', 23);
// datos.set(1, 'etorresbar@gmail.com');

// datos.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });

// //datos.clear()

//spread operator
var suma = function(a, b, c, d){
    return a + b + c +d;
}

var ope1 = suma(10, 20, 30, 40);
console.log(ope1);

var valores = [10, 20, 30, 40];
const ope2 = suma(...valores);
console.log(ope2);

const rrhh = ['Pedro', 'Pablo', 'Ana'];
const contabilidad = ['Felipe', 'Carlos', 'Maria'];

const emp = [...rrhh, ...contabilidad];
console.log(emp);