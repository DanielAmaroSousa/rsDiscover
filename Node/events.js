//const eventos = require('events')
//console.log(eventos)

//utilizar eventos

//criar o core
const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Ouvi!', message)
}) //ouvir sempre que o evento é emitido

//ev.once - ouvir uma única vez

ev.emit('saySomething', "Mayk") //emitir
ev.emit('saySomething', "Joana") //emitir

