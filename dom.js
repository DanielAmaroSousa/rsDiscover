//DOM - document object model
//HTML convertido para JS e serve para manipular o HTML através do JS

//Nó, pai, filho, irmãos, ramificações

//Metodos
//Seleccionar elementos html

console.log(document.getElementById('identificador1')) //resultado Elemento
console.log(document.getElementsByClassName('classe1')) //resultado HTMLcolletion
console.log(document.getElementsByTagName('p'))

const elemento = document.querySelector('.classe1') //seletor css, resultado Elemento
console.log(elemento)
const elementos = document.querySelectorAll('[src]') //resultado NodeList
elementos.forEach(el => console.log(el)) //consigo usar forEach()

//Manipulando elementos html
elemento.textContent = "Porto"
elemento.textContent += " de Mós"
elemento.innerText = "Braga"
elemento.innerHTML = "Amadora <br><small>..nos arredores da</small>"

const elemento2 = document.querySelector('input')

console.log(elemento2.value) //pode servir para pegar
elemento2.value = "Coloque o seu nome" //pode servir para alterar

const elemento3 = document.querySelector('div')
elemento3.setAttribute('id', 'div1')
const divID = document.querySelector('#div1')

console.log(divID.getAttribute('id'))

divID.removeAttribute('id')
console.log(divID.getAttribute('id'))

//Manipulando estilos e classes

const elemento4 = document.querySelector('body')

//elemento4.style.backgroundColor = 'red' //atribuir estilo
console.log(elemento4.style.backgroundColor) //pegar atributo

console.log(elemento3.classList)
elemento4.classList.add('lima')
elemento4.classList.remove('lima')
elemento4.classList.add('lima','laranja')
elemento4.classList.toggle('laranja') //se estiver ativa remove

//Navegar pelos elementos
/*

//pegar os elementos pais
console.log(elemento4.parentElement)
console.log(elemento2.parentNode)

//pegar os elementos filhos
console.log(elemento3.childNodes) //consigo rodar forEach
console.log(elemento3.children) //HTMLcoletion logo elimina o texto
console.log(elemento3.firstChild)
console.log(elemento3.firstElementChild)
console.log(elemento3.lastChild)
console.log(elemento3.lastElementChild)

*/

//pegar os elementos irmãos
console.log(elemento2.nextSibling)
console.log(elemento2.nextElementSibling)

//criar elementos
const nova_div = document.createElement('div')
nova_div.innerHTML = "<br> Bem vindo!"

//append prepend
console.log(elemento4)
elemento4.prepend(nova_div)
//insertBefore
elemento4.insertBefore(nova_div, elemento3)
//como inserir após
elemento4.insertBefore(nova_div, elemento3.nextSibling)

//Eventos
//ver div no html onclick
function PrintJS() {
    console.log("Print")
}

//de teclado
const input = document.querySelector('#testeDOM')
console.log(input)
input.onkeydown = function() { 
    console.log('digitando')
} //outras opções onkeypress onkeyup

//ouvidor de enventos
/*
input.addEventListener('mouseover', rato)

function rato() {
    console.log("detetei o ponteiro do rato")
}

//outra forma
input.onclick = clica() //possivel mas desconsiderada já que a prioridade é do eventListener

function clica() {
    console.log("detetei o click do rato")
}
*/

//deteta qual o evento efetuado
input.onkeydown = function(evento) {
    //console.log(evento)
    console.log(evento.currentTarget.value) //podemos pegar do prototype as funcionalidade
}