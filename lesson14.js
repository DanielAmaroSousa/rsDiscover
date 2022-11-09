// comentário em linha
/* comentário multi linha
*/

/*
console.log("logs na consola F12 do navegador")

var nome
b= "Coloque o seu nome"
let idade, sexo
nome = window.prompt("qual o seu nome?", b)
idade = window.prompt("qual a sua idade?")
sexo = window.prompt("qual o seu sexo?")
window.alert(`Bem-vindo de ${nome} e de ${idade} do sexo ${sexo}`)
/*

// var é global , let e const é local 
// hoisting: podem existir várias variaveis com o mesmo nome 
// em escopos diferentes e serão variàveis diferentes "O João de um escopo é outro João do outro escopo"
// se definir uma variavel João global só pode haver um João --> evitar usar var

*/

function soma() {
    var tn1= window.document.getElementById("txt1")
    n1 = Number(tn1.value)
    var tn2= window.document.getElementById("txt2")
    n2 = Number(tn2.value)
    var res= window.document.getElementById("res")
    s= n1+n2
    console.log(n1, n2, s)
    res.innerHTML = `Total ${s}`
}



//var weight = 50

//res.innerhtml = `o peso será ${weight} kg`