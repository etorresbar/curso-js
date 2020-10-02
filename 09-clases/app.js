class Persona {
    constructor(nombre, edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }

    getBiografia(){
        let biografia = `${this.nombre}, ${this.edad} años. Profesiones: `;

        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}, `;
        });
        return biografia;
    }
}

class Empleado extends Persona {
    constructor(sueldo, puesto, nombre, edad, profesiones = []){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;

        
    }

    get puesto(){
        return this._puesto;
    }

    set puesto(valor){
        this._puesto = valor;
    }

    getBiografia(){
        return  super.getBiografia() +  `puesto: ${this.puesto}, salario: ${this.sueldo}`;
    }
}

const persona1 = new Empleado( 1500, 'Gerente', 'Pablo', 30, ['Arquitecto', 'Doctor'] );
const persona2 = new Empleado( 1000, 'Programador', 'Eduardo', 23, ['Programador', 'Profesor'] );
const persona3 = new Persona( 'Dania', 23, ['Ingeniero', 'Profesor'] );

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());

persona2.puesto = 'Arquitecto de software';

console.log(persona2.getBiografia());

const datos = {
    get ubicacion(){
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
};

datos.ubicacion = 'Buenos Aires';

console.log(datos);
