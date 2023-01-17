/**
 * Promise
 * 
 * A promessa que algo irá acontecer
 * Poderá dar certo ou errado,
 * Mas irá acontecer
 **/

let aceitar = false

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Pedido aceito!')
    }

    return reject('Pedido negado!')

})

promessa
.then(result => (console.log(result)))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizado'))

console.log('aguardando')