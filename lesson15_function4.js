//Function scope

let assunto = 'create video'

function createThink() {
    assunto = 'study'
    return assunto
} //função sem parâmetros vai alterar a minha variavel do escopo anterior

console.log(createThink())
console.log(assunto)

function createThink2() {
    assunto = 'subject'
} //função sem parâmetros vai alterar a minha variavel do escopo anterior mas como não tem return a saída da função é undefined

console.log(assunto)
console.log(createThink2(assunto))

function createThink3(subject) {
    return assunto = subject
} //função com parâmetros não altera a minha variavel pq ela não é a mesma que existe dentro da função

console.log(assunto)
console.log(createThink3(assunto))