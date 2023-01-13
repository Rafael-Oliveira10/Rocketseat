//function hoisting

sayMyName()

function sayMyName() {
    console.log('Rafão')
}

//aqui caso a função seja declarada como const, var etc ela retornara como um erro uma vez que não será possivel o js fazer o hoisting da função para cima da primeira declaração 'SayMyName'