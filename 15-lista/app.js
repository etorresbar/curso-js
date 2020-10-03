class Contacto{

    constructor(nombre, direccion, telefono, email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }

}

class UI {

    static mostrarContacto(){
        const contactos = Datos.traerContactos();
        contactos.forEach((contacto) => UI.agregarContactoLista(contacto));
    }

    static agregarContactoLista(contacto){
        const lista = document.querySelector('#contacto-list');

        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${contacto.nombre}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.direccion}</td>
        <td>${contacto.email}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        lista.appendChild(fila);
    }

    static eliminarContacto(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alter-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#contacto-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static limpiarCampos(){
        document.querySelector('#nombre').value = '';
        document.querySelector('#direccion').value = '';
        document.querySelector('#telefono').value = '';
        document.querySelector('#email').value = '';
    }

}

class Datos{
    
    static traerContactos(){
        let contactos;
        if (localStorage.getItem('contactos') === null){
            contactos = [];
        } else{
            contactos = JSON.parse(localStorage.getItem('contactos'));
        }
        return contactos;  
    }

    static agregarContacto(Contacto){
        const contactos = Datos.traerContactos();
        contactos.push(Contacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));
    }

    static removerContacto(email){
        const contactos = Datos.traerContactos();

        contactos.forEach((contacto, index) => {
            if (contacto.email === email){
                contactos.splice(index, 1);
            }
        });

        localStorage.setItem('contactos', JSON.stringify(contactos));
    }
}

document.addEventListener('DOMContentLoader', UI.mostrarContacto());


document.querySelector('#contacto-form').addEventListener('submit', (e) =>{
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const telefono = document.querySelector('#telefono').value;
    const direccion = document.querySelector('#direccion').value;
    const email = document.querySelector('#email').value;

    if (nombre === '' || telefono === '' || direccion === '' || email === ''){
        UI.mostrarAlerta('Por favor ingrese todos los datos.', 'danger');
    } else{
        const contacto = new Contacto(nombre, direccion, telefono, email);
        Datos.agregarContacto(contacto);
        UI.agregarContactoLista(contacto);
        UI.mostrarAlerta('Contacto agregado a la lista.', 'success');
        UI.limpiarCampos();
    }

});

document.querySelector('#contacto-list').addEventListener('click', (e) =>{
    UI.eliminarContacto(e.target);
    Datos.removerContacto(e.target.parentElement.previousElementSibling.textContent);
    UI.mostrarAlerta('Contacto eliminado de la lista.', 'success');
});