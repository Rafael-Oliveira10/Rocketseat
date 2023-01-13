/*
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton'
]

//a indexação (index) começa pelo número 0
console.log(pilotos[0]) //Senna
console.log(pilotos[1]) //Prost
console.log(pilotos[2]) //Schumacher
console.log(pilotos[3]) //Hamilton

//acessar o tamanho do array
console.log(pilotos.length)

//iterável
for (let piloto of pilotos) {
console.log(piloto) }

//adicionar elemento
pilotos.push('Verstappen')
console.log(pilotos)

//encontrar elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)
 
//deletar o elemento
pilotos.splice(1, 1)
console.log(pilotos)
//Matriz é a estrutura que permite colocar um array dentro de outro array
*/

/*Stack ou pilha
// Passo 1: Modelando
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }
    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

//Passo 2: Utilizando
const stack = new Stack()

//adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())
*/

/*Queue ou fila
// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu na fila`)

    }
}
// 2: Utilizando
const fila = new Queue()
fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')
fila.enqueue()
fila.enqueue()
fila.enqueue()
*/
