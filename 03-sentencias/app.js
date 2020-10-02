// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }


//sentencia while

// var i = 1;
 
// while (i <= 10){
//     console.log(i);
//     i++;
// }

var pablo = [14, 8, 16];
var maria = [12, 18, 10];

function calcularPromedio(calificaciones){
    var promedio = 0;
    for (var i = 0; i < calificaciones.length; i++){
        promedio += calificaciones[i]; 
    }
    return promedio / 3;
}

function validarCalificacion(promedio, nombreAlumno){
    if (promedio > 13) console.log(nombreAlumno + " aprobó con un promedio de " + promedio);
    else console.log(nombreAlumno + " reprobó con un promedio de " + promedio);
}

var promedioPablo = calcularPromedio(pablo);
var promedioMaria = calcularPromedio(maria);

validarCalificacion(promedioPablo, 'Pablo');
validarCalificacion(promedioMaria, 'María');

if (promedioMaria > promedioPablo) console.log("El promedio de Maria es mayor " );
else console.log("El promedio de Pablo es mayor");
