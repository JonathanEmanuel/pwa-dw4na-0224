class Persona {
    // Atributos
    nombre = '';
    tel = ''
    constructor(nombre, tel){
        this.nombre = nombre;
        this.tel = tel;
    }
    setName(nombre){
        this.nombre = nombre;
    }
    getName(){
        return `${this.nombre} ${this.tel}`
    }
}

const btnGuardar = document.querySelector('#btnGuardar');
const txtNombre = document.querySelector('#txtNombre');
const txtTel = document.querySelector('#txtTel');


const agenda = [];


const p1 = new Persona('Julieta', '11-2222-3333');
const p2 = new Persona('Carlos', '00000');


btnGuardar.addEventListener('click', () => {
    const nombre = txtNombre.value;
    const tel = txtTel.value;

    const persona = new Persona(nombre, tel);

    agenda.push(persona);
    redenrizarAgenda(agenda);

})

// Recorre el array y crea los li dentro de listAgenda
function redenrizarAgenda(agenda) {
    
} 