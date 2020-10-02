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


function evaluarRespuestas(nombreAlumno, respuestasPositivas, respuestasNegativas){ 

    if (respuestasPositivas > 90){
        return (`${nombreAlumno} obtuvo A en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
    }
    else if(respuestasPositivas > 70)
        return (`${nombreAlumno} obtuvo B en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
        
        else if(respuestasPositivas > 45){
            return (`${nombreAlumno} obtuvo C en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
        }
        else{
            return (`${nombreAlumno} obtuvo D en el examen, con un total de ${respuestasPositivas} respuestas positivas y ${respuestasNegativas} respuestas negativas`);
        }
    }

    


mensaje = evaluarRespuestas('Eduardo', 50, 20);
console.log(mensaje);