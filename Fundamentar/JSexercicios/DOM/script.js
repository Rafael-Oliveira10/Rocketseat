//MANIPULANDO ELEMENTOS

/*getElementById()
const element = document.getElementById('blog-title')
console.log(element) */

/*getElementByClassName()
const element = document.getElementsByClassName('one')
console.log(element) */

/*getElementsByTagName()
const element = document.getElementsByTagName('meta')
console.log(element)  */

/*querySelector e querySelectorAll()
const elements = document.querySelectorAll('one')
console.log(elements)
elements.forEach(el => console.log(el)) */

/*Qual usar?

--getElementsById() - element
--getElementByClassName() - HTML Collection
--getElementsByTagName - HTML Collection
--querySelector - element
--querySelectorAll() - NodeList */

//MANIPULANDO CONTEÚDOS

/*textContent
const element = document.querySelector('h1')
element.textContent += " Olá Devs!"
console.log(element.textContent) */

/*innerText
const element = document.querySelector('h1')
element.innerText = "Olá Devs!" */

/*innerHTML 
const element = document.querySelector('h1')
element.innerHTML = "Olá Devs! <small>!!!</small>" */

/*value 
const element = document.querySelector('input')
console.log(element.value)
element.value = "Olá Devs!" sofreu alteração */

/*Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')
header.setAttribute('class', 'bg header') */

/*ALTERANDO ESTILOS 
const element = document.querySelector('body')
element.style.backgroundColor = "#f9f3D2"
console.log(element.style.backgroundColor) */

/* ClassList 
const element = document.querySelector('body')
element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active') adiciona ou remove uma class existente 'turn on off' */

//NAVEGANDO PELOS ELEMENTOS
/*parentNode parentElement
const element = document.querySelector('h1')
console.log(element.parentElement) 

childNodes children
const el = document.querySelector('body')

//firstChild firstElementChild
//lastChild lastElementChild
console.log(el.lastElementChild) */

/*nextSibling nextElementSibling
const el = document.querySelector('header')
console.log(el.nextElementSibling) */
//previousSibling previousElementSibling

//CRIANDO E ADICIONANDO ELEMENTOS
/*createElement
const div = document.createElement('div');
div.innerText = 'Olá Devs!'

-- append prepend
const body = document.querySelector('body')
body.prepend(div) 

const div = document.createElement('div');
div.innerText = 'Olá Devs!'

insertBefore 
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling) */

//EVENTOS -> existem, talvez centenas de tipos de eventos que podem ser adicionados a uma função no js. Seja la por clicar, arrastar ou simplesmente colocar o mouse em cima do atributo do site. (onclick, ondlclick, ondrag etc)
/*const input = document.createElement('input')
input.onkeypress = function () {
    console.log('rodei')
}
const h1 = document.createElement('h1');

h1.addEventListener('click', print) //possibilita varios events

function print() {
    console.log('print')
} 

argumento event

const input = document.querySelector('input')
input.onkeydown = function (event) {
    console.log(event) } */

