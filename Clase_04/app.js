const formulario = document.querySelector('form');
const txtNombre = document.querySelector('#txtNombre');
const txtTel = document.querySelector('#txtTel');
const listaHTML = document.querySelector('#listAgenda');
const btnGET = document.querySelector('#btnGET');
const btnGETJSON = document.querySelector('#btnGETJSON');

const msg = document.querySelector('#msg');


btnGET.addEventListener('click', () => {
    console.log('Inicio del GET...');
    const endPoint = 'https://reqres.in/api/users';

    fetch(endPoint)
    .then( response => response.json())
    .then( json => {
        console.log(json);
    }).catch( error => {
        console.error(error);
        msg.classList.remove('oculto')
    })
    

    console.log('Fin del GET...');

})

btnGETJSON.addEventListener('click', () => {
    const endPoint = 'data.json';
    fetch(endPoint).then( res => res.json())
    .then( json => {
        console.table(json)
    })
})