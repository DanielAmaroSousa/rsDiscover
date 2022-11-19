//Programação Orientada a Objetos

//classe -> molde para criar o objeto
//1.encapsulamento -> não necessito saber qual o código que está dentro da classe
//2.herança -> herança de classe herdada
//3.polimorfismo -> herança de metodos de outras classes herdadas
//4.abstração -> superclasse abstrata não pode ser instanciada (não pode ser um objeto) 
// só pode ser extendida serve de regra para a criação de novas classes a partir dela

//Programação Funcional

//não altera dados fora da função 
//não tem estado
//linguagens funcionais: JS, PHP, Elixir, Haskell
//Principios: paradigmas (imperativa, declarativa), imutabilidade, stateless

//IMPERATIVO - faça da seguinte forma (como deve fazer)
//exemplo1:
let number = 2
function square() {
    return number * number
}
number = square()

//DECLARATIVO - o que fazer e não como fazer
//função que recebe um valor e retorna um resultado (após a arrow já tenho o return)
//exemplo2:
const square = n => n*n

//IMUTABILIDADE
uma variável não vai variar - será uma constante - os objetos serão constantes

//exemplo3:
const cart = {
    quantity: 2,
    tota:200
}
//Não: cart.quantity = 3
//Sim: const newCart = {...cart, quantity = 3}

//exemplo4 ReactJS:
const [amount, setAmount] = useState(0)
//Não: amount = 2
//Sim: setAmount(2)

//STATELESS
//não guarda estado, só conhece os dados entegues a ela (exemplo2)
//ao contrário de exemplo1

//Fcs Independentes - deverá ter pelo menos 1 argumento e retornar algo, só utiliza o que eu passo para ela (variáveis), não guarda estado (só existe durante a sua execução), se necessitar de loops terei de fazer uma recursão (uso if, não pode ter for ou while)

//Fcs Puras - não depende de dados externos só utiliza o que eu passo para ela (variáveis), o retorno será sempre o mesmo quando os argumentos forem os mesmos, não guarda estado

//First-class - serve como parâmetro para outras fcs
//exemplo5:
const sayMyName = () => console.log('Mayk')
const runFunction = fn => fn()

runFunction(sayMyName)
//ou
runFunction(() => console.log('discover'))

//Higher-order - recebe fcs como argumento, pode retornar outras fcs
const FcHigherOrder = fc(OutraFc)
ou currying:
const FcHigherOrder = argumento => OutraFc => fc(OutraFc, argumento)

//Composição ou encadeamento de fcs - uma fc recebe como argumento o resultado de outra, ou seja, vou ter fcs dentro de fc


