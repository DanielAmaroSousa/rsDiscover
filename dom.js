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
