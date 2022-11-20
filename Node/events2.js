const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter) //herdamos para o Character todas as opções do EventEmitter

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')

chapolin.emit('help')

