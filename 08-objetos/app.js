// let miLibro = {
//     titulo: 'El libro de JavaScript',
//     autor: 'Eduardo Torres',
//     paginas: 385,
//     publicado: false
// }

// let miLibroB = {
//     titulo: 'Programación en PHP',
//     autor: 'Pablo Vásquez',
//     paginas: 700,
//     publicado: true
// }

// // console.log(miLibro.publicado);
// // console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);
// // miLibro.paginas = 320;
// // console.log(miLibro.paginas);

// let getResumen = (libro) => {
//     return {
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`
//     }
// }

// let persona = {
//     nombre: 'Eduardo Torres',
//     edad: 23, 
//     ciudadActual: 'Navojoa'
// };

// persona.edad = 24;

// console.log(`${persona.nombre} tiene ${persona.edad} años y actualmente vive en ${persona.ciudadActual}`);

// let libroAResume = getResumen(miLibro);
// let libroBResumen = getResumen(miLibroB);

// console.log(libroBResumen.resumen);
// console.log(libroBResumen.resumenPaginas);

// console.log(libroAResume.resumen);
// console.log(libroAResume.resumenPaginas);

// let persona = {
//     nombre: 'Pablo',
//     edad: '30',
//     sueldo: 1200,
//     metodoPrueba: function(){
//          //console.log('Mensaje de prueba');
//          return 'Result desde prueba';
//     },
//     cambiarEdad: function(edad){
//         this.edad = edad;
//     }
// };

// let result = persona.metodoPrueba();
// console.log(result);

// persona.cambiarEdad(23);

// let cambiarSueldo = (person, monto) => {
//     person.sueldo = person.sueldo + monto;
//     console.log(person); 
// }

// cambiarSueldo(persona, 500);
// console.log(persona); 

const getPersonaDatos = () => {
    const respuesta = [
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: 'Pablo',
                    direccion: {
                        ciudad: 'Lima',
                        pais: 'Perú'
                    }
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: 'Ana',
                    direccion: {
                        ciudad: 'Santiago',
                        pais: 'Chile'
                    }
                }
            }
        },
        {
            codigo: 400,
            data: {
                persona: {
                    nombre: 'Pedro',
                    direccion: {
                        ciudad: 'Nogotá',
                        pais: 'Colombia'
                    }
                }
            }
        }
    ];
    return respuesta;
};

for ( const { codigo : status, data : { persona : { nombre } } } of getPersonaDatos() ){
    console.log(nombre);
}
