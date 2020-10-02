const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
];

// console.log(ceviche.pop());
// ceviche.push('Limón');

// console.log(ceviche.shift());
// ceviche.unshift('Papas');

// console.log(ceviche);

// ceviche.forEach(function(item, index){
//     console.log(index);
//     console.log(item);
// });

// for(let i = 0; i < ceviche.length;  i++){
//     console.log(`Indice ${i} ${ceviche[i]}`);
// }

// ceviche.splice(1,1);

// console.log(ceviche);

const filtrarIngredientes = ceviche.filter(function(ing, index){
    const ingredientes = ing.titulo.includes('mar');
    return ingredientes;
});

// console.log(filtrarIngredientes);
console.log(ceviche);

const buscarIngrediente = function(ceviche, titulo){
    const index = ceviche.findIndex(function(ing, index){
        return ing.titulo === titulo;
    });
    return index;
};

ceviche.sort(function(a, b){
    if (a.titulo > b.titulo){
        return 1;
    }
    if (a.titulo < b.titulo){
        return -1;
    }
    return 0;
});

console.log(ceviche);
// const paises  = ['Colombia', 'Ecuador', 'México', 'España', 'Perú'];
// console.log( paises.filter( pais => pais.includes('o') ) );

// const index = ceviche.findIndex(function(ing, index){
//     console.log(ing);
//     return ing.titulo === 'mariscos';
// });
//console.log(ceviche[buscarIngrediente(ceviche, 'pescado')]);