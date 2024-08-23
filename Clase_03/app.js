class Persona {
    // Atributos
    id = '';
    nombre = '';
    tel = ''
    constructor(id, nombre, tel){
        this.id = id
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

const formulario = document.querySelector('form');
const txtNombre = document.querySelector('#txtNombre');
const txtTel = document.querySelector('#txtTel');
const listaHTML = document.querySelector('#listAgenda');
const chkModo = document.querySelector('#chkModo');
const body = document.querySelector('body');

const agenda = [];

const modo = localStorage.getItem('modo');
if ( modo == 'n'){
    body.classList.add('dark');
    chkModo.checked = true;
} else {
    body.classList.remove('dark');

}


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    console.log('Click')
    const id = crypto.randomUUID();
    const nombre = txtNombre.value;
    const tel = txtTel.value;

    const persona = new Persona(id, nombre, tel);

    agenda.push(persona);
    redenrizarAgenda(agenda);
    // limpiamos los input
    txtNombre.value = '';
    txtTel.value = '';

})

// Recorre el array y crea los li dentro de listAgenda
function redenrizarAgenda(agenda) {
    // Limpiar el area donde renderizo las li
    listaHTML.innerHTML = '';

    agenda.forEach( persona => {
        listaHTML.innerHTML += // html
                    `<li class="list-group-item d-flex justify-content-between">
                        <strong>📕 ${persona.nombre}</strong>
                        <span> ${persona.tel}</span>
                    </li>`
    });
} 

// Cambia el modo
chkModo.addEventListener( 'change', () => {
    const modo = chkModo.checked;
    if( modo ){
        body.classList.add('dark');
        localStorage.setItem('modo', 'n')
    } else {
        body.classList.remove('dark');
        localStorage.setItem('modo', 'd')
    }
})


const objeto = {
    nombre: 'Josefina',
    edad: 27,
    empleado: false
}

// PAra Guardar un objeto lo convierto a texto
let texto = JSON.stringify( objeto)
localStorage.setItem('persona', texto);


// Para leer un texto plano y pasarlo a objeto
let datoTexto = localStorage.getItem('persona');
let datos = JSON.parse(datoTexto);
console.log(datos);