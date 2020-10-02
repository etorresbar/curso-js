// const ahora = new Date();

// const timestamp = ahora.getTime();

// console.log(timestamp.toString());
// console.log(ahora.toString());

// const fechaActual = new Date(timestamp);
// console.log(fechaActual);

// const fecha1 = new Date("December 17, 1995 06:20:00");
// console.log(fecha1.toString());

// console.log(`Año: ${ahora.getFullYear()}`);
// console.log(`Mes: ${ahora.getMonth()}`);
// console.log(`Dia: ${ahora.getDate()}`);
// console.log(`Dia: ${ahora.getDay()}`);

// console.log(`Hora: ${fecha1.getHours()}`);
// console.log(`Minutos: ${fecha1.getMinutes()}`);
// console.log(`Segundos: ${fecha1.getSeconds()}`);


let fecha1 = new Date();
let fecha2 = new Date('December 5, 1996');

if(fecha2 > fecha1){
    console.log(`${fecha2.toString()} es mayor que ${fecha1.toString()}`);
} else{
    console.log(`${fecha1.toString()} es mayor que ${fecha2.toString()}`);
}