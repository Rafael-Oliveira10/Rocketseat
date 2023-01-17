/**
 * Promise
 * 
 * A promessa que algo irá acontecer
 * Poderá dar certo ou errado,
 * Mas irá acontecer
 

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


fetch('https://api.github.com/users/Rafael-Oliveira10')
.then (response => {
  response.json()
  .then (data => {
    fetch(data.repos_url)
    .then (res => res.json()
      .then(d => console.log(d)))
  })
}) 

const promessa = new Promise(function (resolve, reject) {
    return reject('Erro')
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finalizado')

    }
}
start()
*/

async function start() {
    const url = "https://api.github.com/users/Rafael-Oliveira10";
    const user = await fetch(url).then( r => r.json())
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos);
}
start().catch(error => console.log(error));