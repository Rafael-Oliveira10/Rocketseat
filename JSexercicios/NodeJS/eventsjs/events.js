/*
const { EventEmitter } = require('events')
const ev = new EventEmitter()
//once no lugar do on serve pra ouvir uma única vez
ev.on('SaySomething', (message) => {
    console.log('To ouvindo vocêee: ', message)
})

ev.emit('SaySomething', "Rafa")
ev.emit('SaySomething', "Isabé")
ev.emit('SaySomething', "Bebel")
*/

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')