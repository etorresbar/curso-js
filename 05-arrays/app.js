// function bienvenido() {
//     return 'Hola mundo';
// }

// var mensaje = bienvenido();
// console.log(mensaje)

// function convertirFAhaCelcius(gradoFa){
//     var celcius = (gradoFa - 32 ) * 5 / 9;
//     return celcius;
// }

// var tempUno = convertirFAhaCelcius(32);
// var tempDos = convertirFAhaCelcius(68);
// console.log(tempUno);
// console.log(tempDos);


// function calcularEdad(yearNacimiento){
//     return 2020 - yearNacimiento;
// }

// var edad = calcularEdad(1996);
// console.log(edad);


// function calcularJuvilacion(yearNacimiento, nombrePersona){
//     var mensaje =  ('A ' + nombrePersona + ' le faltan ' + ( 65 - (2020 - yearNacimiento) ) + ' años para juvilarse');
//     return mensaje;
// }

// console.log( calcularJuvilacion(1996, 'Eduardo') );

// var prueba = function(nombre){
//     console.log('Prueba ${nombre}');
// }

// prueba('Eduardo');
// var sumar = function(a, b){
//     return a + b;
// }

// console.log( sumar(10, 4) );


// function evaluarRespuestas(nombreAlumno, respuestasPositivas, respuestasNegativas){ 

//     if (respuestasPositivas > 90){
//         return (`${nombreAlumno} obtuvo A en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
//     }
//     else if(respuestasPositivas > 70)
//         return (`${nombreAlumno} obtuvo B en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
        
//         else if(respuestasPositivas > 45){
//             return (`${nombreAlumno} obtuvo C en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
//         }
//         else{
//             return (`${nombreAlumno} obtuvo D en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
//         }
//     }

    


// mensaje = evaluarRespuestas('Eduardo', 50, 20);
// console.log(mensaje);

// var nombre = ['Pablo', 'Carlos', 'Ana', 'Teresa'];

// var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

// console.log(nombre[2]);
// console.log(vegetales[1]);

// nombre[1] = 'José';
// console.log(nombre[1]);

// var frutas = ['pera', 'manzana', 'uva', 'sandía'];
// console.log(frutas);


// for (var i = 0; i<=frutas.length - 1; i++){
//     console.log( frutas[i] );
// }

// frutas.forEach(function (elemento, indice, array) {
//     console.log(elemento, indice);
// });

// frutas.push('melón');

// console.log(frutas);

// frutas.unshift('fresa');

// console.log(frutas);

// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// var posUva = frutas.indexOf('uva');
// console.log(posUva);

// frutas.splice(1,2)
// console.log(frutas);

// //Areglo con elementos de diferentes tipos
// var persona = ['Pablo', 'Vasquez', 34, '6421610495', 1.75];

// console.log(persona);

//Objetos literales 

 var persona = {
   nombre: "Pablo",
   apellido: "Vásquez",
   gustos: ["Fútbol", "Películas", "Inglés"],
   trabajo: "Instructor",
   esCasado: true,
   yearNacimiento: 1996,
   calcularEdad: function(){
       this.edad = 2020 - this.yearNacimiento;
   }
 };

 persona.calcularEdad();

 persona.calcularEdad();
 console.log(persona);

// console.log(persona);
// console.log(persona.apellido);

// persona.esCasado = false;

// console.log(persona.esCasado);

// var persona2 = new Object();
// persona2.nombre = 'Ana';
// persona2.apellido = 'Pinedo';
// persona2['trabajo'] = 'WebDeloper';
// console.log(persona2);

