//function scope
let subject

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)

//o escopo das funções podem confundir, prestar bastante atenção ao declarar uma variavel. Caso faça errado ela pode assumir um escopo indesejado e atrapalhar na entrega do projeto.