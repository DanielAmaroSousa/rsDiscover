//js é uma linguagem prototipada

//posso usar protótipos em strings, números, objetos, booleanos, etc..

30.0.__proto__

"Daniel".length

//conversão e coersão de tipos

console.log('9'+5) //coersão 95
console.log(Number('9')+5) //conversão =14

//conversão e manipulação de números e strings

let string = "123"
console.log(Number(string))

let number = 55
console.log(String(number))

let number2 = 134509861.98696195
console.log(number2.toFixed(2).replace(".",","))

//uppercase  e lowercase
let word = "Programar é muito bacana!"
console.log(word.toLowerCase())

//texto para array
let texto = "Programar é fixe pois é?"
let myArray = texto.split(" ")
console.log(myArray)
let frase = myArray.join("_")
console.log(frase)

//verificar se a frase contém a palavra Amor

let frase2 = "eu procuro o amor"
console.log(frase2.includes("Amor"))
console.log(frase2.includes("amor"))

//criar array com construtor

let myArray2 = new Array(10)
let myArray3 = new Array(1, 2, 3)
console.log(myArray2)
console.log(myArray3)

//contar elementos de um array

console.log(["a","b","c"].length)

//transformar uma cadeia de caracteres em elementos 
//de um array

let word2 = "manipulação"
console.log(Array.from(word2))

//manipulando arrays

let techs = ["html", "css", "js"]
//adicionar no fim
techs.push("nodejs")
//adicionar no inicio
techs.unshift("sql")
//remover do fim
//techs.pop()
//remover do inicio
//techs.shift()
//pegar somente alguns elementos
console.log(techs.slice(0,2))
//remover 1 ou mais items do array
//techs.splice(1, 2)
//encontrar a posição do elemento no array
let index = techs.indexOf("css")
console.log(index)
console.log(techs)
techs.splice(index,1)
console.log(techs)
