//Array

const Pilotos = ['Ayrton','Prost','Piquet','Alonso']

//indexação começa em 0
console.log(Pilotos[0])
console.log(Pilotos[1])
console.log(Pilotos[2])
console.log(Pilotos[3])

//adicionar
Pilotos.push('Daniel')
console.log(Pilotos)

//retirar
Pilotos.pop()
console.log(Pilotos)
Pilotos.splice(1,1)
console.log(Pilotos)

//tamanho
console.log(Pilotos.length)

//iteravel
for (let piloto of Pilotos) {
    console.log(piloto)
}

//encontar
const find_piloto = Pilotos.find(piloto => piloto === 'Ayrton')
console.log(find_piloto)

//Matriz (arrays dentro de arrays)

const Alunos = [['Daniel',43],['Letícia',6]]

console.log(Alunos[0][1])

//Stack -> FILO (push, pop, peek, size)
//modelando
class Pilha {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(valor) {
        this.top++
        this.data[this.top] = valor
    }

    pop() {
        if (this.pop<0) return undefined
        const popedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return popedTop
    }

    peek() {
        return this.top>=0 ? this.data[this.top] : undefined 
    }

}

//instanciar
const pilha1 = new Pilha()

//adicionar dados
pilha1.push('livro1')
pilha1.push('livro2')
pilha1.push('livro3')
pilha1.push('livro4')

//utilizando
console.log(pilha1)
console.log(pilha1.peek())
pilha1.pop()
console.log(pilha1.peek())

// Fila -> FIFO (enqueue, dequeue, size, front) não é necessário modelar em JS

class Fila {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} entrou na fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}

//instanciar

const fila1 = new Fila

//utilizar

fila1.enqueue('Jo')
fila1.enqueue('Marcos')
fila1.enqueue('Zé')

console.log(fila1)

fila1.dequeue()

console.log(fila1.data)
