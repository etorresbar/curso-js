// const segundo = () => {
//     setTimeout(() => {
//         console.log('Llamada a segundo');        
//     }, 2000);
// };

// const primero = () => {
//     console.log('inicio de primero');
//     segundo();
//     console.log('fin de primero');
// };

// primero();

// const getUsuarios = () => {
//     setTimeout(() => {
//         const userIDs = [101, 102, 103, 104];
//         console.log(userIDs);

//         setTimeout((id) => {
//             const usuario = {
//                 email: 'etorresbar@gmail.com',
//                 nombre: 'Eduardo'
//             }

//             console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

//             setTimeout((idPermiso) => {
//                 const permiso = ['admin', 'creador'];
//                 console.log(permiso); 
//             }, 1500, userIDs[1]);

//         }, 1500, userIDs[1]);

//     }, 1500);
// };

// getUsuarios();

//Ejemplo 1

// let promesa = new Promise((resolve, reject) => {
//     if(false){
//         resolve('La operación fue exitosa');
//     } else{
//         reject('Hubo un error');
//     }
// });

// promesa.then( response => {
//     console.log('Response: ' + response);
// }).catch( error =>{
//     console.log('Error: ' + error);
// });

// var miPromesa = Promise.resolve('Comida');
// miPromesa.then((responsxe) => console.log(response));

// var miPromesa2 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve(4), 2000);
// });

// miPromesa2.then(resp => {
//     resp += 5;
//     console.log(resp);
// });



//DE CALLBACK A PROMESAS
// const getPermisos = id => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(id => {
//             const permiso = ['Admin, Creador'];
//             resolve(permiso);
//         }, 1500, id);
//     });
// };

// const getUsuariosIDs = new Promise((response, reject) =>{
//     setTimeout(() => {
//         response([101, 102, 103, 104]);
//     }, 1500);
// });

// getUsuariosIDs
// .then(IDs => {
//     console.log(IDs);
//     return getUsuario(IDs[3]);
// })
// .then(usuario => {
//     console.log(usuario);
//     return getPermisos(usuario.id);
// })
// .then(permisos =>{
//     console.log(permisos);
// })
// .catch(() => {
//     console.log("Error");
// });

// const getUsuario = userID => {
//     return new Promise((resolve, reject) =>{
//         setTimeout( id => {
//             const usuario = {
//                 email: 'etorresbar@gmai.com',
//                 nombre: 'Eduardo Torres'
//             };
//             resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
//         }, 1500, userID);
//     });
// }


// //funcion con asyncawait

// async function getUsauriosAW(){
//     const ids = await getUsuariosIDs;
//     console.log(ids);
//     const usuario = await getUsuario(ids[3]);
//     console.log(usuario);
//     const permisos = await getPermisos(usuario.id);
//     console.log(permisos);

//     return usuario;
// }

// getUsauriosAW().then(resultado => console.log(`${resultado} es un usuario`));


const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos);
    }
});

request.open('GET', 'http://jsonplaceholder.typicode.com/users');
request.send();
        