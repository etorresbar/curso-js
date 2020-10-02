// localStorage.setItem('nombreUsuario', 'etorresbar');
// console.log(localStorage.getItem('nombreUsuario'));

// localStorage.removeItem('nombreUsuario');

/////////  notacion json //////////
localStorage.clear();
const usuario = {
    nombre: 'Eduardo',
    edad: 23
};

const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem('usuario', usuarioJSON);

const userJSON = localStorage.getItem('usuario');

const usuario2 = JSON.parse(userJSON);
console.log(`${usuario2.nombre}: ${usuario2.edad}`);
