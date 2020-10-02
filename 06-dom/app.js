//analizando el dom
//console.dir(document);

// //console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// //console.log(headerTitle);

// headerTitle.textContent = 'Hola';


// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hola mundo';

// var boton = document.querySelector('input[type="submit"');
// boton.value = 'Enviar';

// var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// var items = document.querySelectorAll('.list-group-item');

// // for(i = 0; items.length; i++){
// //     items[i].style.color = 'red';
// // }

// //items.style.color = 'red';

// var title = document.querySelectorAll('.title');
// console.log(title);

// var impar = document.querySelectorAll('li:nth-child(odd)');
// var par = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < impar.length; i++){
//     impar[i].style.backgroundColor = '#ccc';
//     par[i].style.backgroundColor = '#f4f4f4';

// }

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// var itemList = document.querySelector('#items');
// console.log(itemList);


// var nuevoDiv = document.createElement('div');

// nuevoDiv.className ='Hola';
// nuevoDiv.id = 'div_hola';
// nuevoDiv.setAttribute('title', 'Hola mundo');


// console.log(nuevoDiv);


// var nuevoNodoText = document.createTextNode('holaMundo');
// nuevoDiv.appendChild(nuevoNodoText);

// var contenedor = document.querySelector('header.container');


// var h1 = document.querySelector('h1');

// document.getElementById('boton').addEventListener('click', hacerClick);



// function hacerClick(){
//     //console.log('Usted hizo click');
//     document.getElementById('header-title').textContent = 'Texto cambiado';
// }

//agregar elemento a la lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//evento submit del formulario
form.addEventListener('submit', agregarItem);

//evento click de la lista
lista.addEventListener('click', eliminarItem);

//evento del telcado en el campo del filtro
filtro.addEventListener('keyup', filtrarItems);

//funcion para agregar
function agregarItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var buttonDel = document.createElement('button');
    buttonDel.className = 'btn btn-danger float-right btn-sm eliminar';
    buttonDel.appendChild(document.createTextNode('X'));

    li.appendChild(buttonDel);

    lista.appendChild(li);
}

//funcion para elminar item de la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}

//funcion para filtrar elementos de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'None';
        }
    });
}