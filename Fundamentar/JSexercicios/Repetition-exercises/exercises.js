/* Nota dos arrombado
let nota = 90
function getNotas(nota){

let notaA = nota >=90 && nota <= 100;
let notaB = nota >= 80 && nota <= 89;
let notaC = nota >= 70 && nota <= 79;
let notaD = nota >= 60 && nota <= 69;
let notaF = nota <= 60 && nota >= 0;

let notaFinal;

if (notaA) {
    notaFinal = "A"
} else if (notaB) {
    notaFinal = "B"
} else if (notaC) {
    notaFinal = "C"
} else if(notaD) {
    notaFinal = "D"
} else if(notaF) {
    notaFinal = "F"
} else {
    notaFinal = "nota inválida"
}
return notaFinal
}

console.log(getNotas(101))
console.log(getNotas(-1))
console.log(getNotas(0))
console.log(getNotas(1))
console.log(getNotas(45))
console.log(getNotas(60))
console.log(getNotas(61))
console.log(getNotas(75))
console.log(getNotas(85))
console.log(getNotas(95))
*/

/* Balanço familiar!
let familia = {
    receitas: [2000, 3500, 400.33, 250.65],
    despesas: [1000, 1500, 200.63, 3500.25]
}

function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateReceita = sum(familia.receitas)
    const calculateDespesas = sum(familia.despesas)

    const total = calculateReceita - calculateDespesas

    const itsOk = total >= 0

    let message = "negativo"
    if (itsOk) {
        message = "positivo"
    }
    console.log(`Seu saldo é ${message}: ${total.toFixed(2)}R$`)
}

calculateBalance() */

/*transformDegree ('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit -32) * 5/9
    let degreeSign = 'C'

    //fluxo alternatico C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
} catch (error) {
console.log(error.message)
}
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai  rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countNames() {
    let names = [];

    for (let category of booksByCategory) {
        for (let number of category.number) {
            if (names.indexOf(number.name) == -1) {
                names.push(number.name)
            }
        }
    }
    console.log("Total de nomes:", names.length)
}
countNames();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor: ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')