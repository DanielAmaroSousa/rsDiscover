//arrow function - mais moderno

const sayMyName = (name) => {
    console.log(name)
}

sayMyName()

//callback funcion

function sayMyName2(name2) {
    console.log('antes da função de volta')

    name2()

    console.log('depois da função de volta')

}

sayMyName2( 
    () => {
        console.log('esta é uma callback')
    }
) // crio a função fora da função raiz e esta é passada como argumento à mesma

//função construtora (uso letra grande no inicio destas funções)(esta função funciona como protótipo ou molde)

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk") //instanciar um novo objecto
const john = new Person('John')

console.log(mayk.walk())
console.log(john.walk())
console.log(mayk)
console.log(john)

// existem várias funcções construtoras já criada dentro do js como Date, String, Num