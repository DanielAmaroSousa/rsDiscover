//js é uma linguagem prototipada

//posso usar protótipos em strings, números, objetos, booleanos, etc..

30.0.__proto__

"Daniel".length

//conversão e coersão de tipos

console.log('9'+5) //coersão 95
console.log(Number('9')+5) //conversão =14

//conversão e manipulação de números e strings

let string = "123"
conslole.log(Number(string))

let number = 55
console.log(String(number))

let number2 = 134509861.98696195
console.log(Number(number2.toFixed(2).replace(".",",")))

