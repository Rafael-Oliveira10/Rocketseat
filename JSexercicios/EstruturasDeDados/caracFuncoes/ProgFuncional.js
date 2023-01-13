/* PROGRAMAÇÃO FUNCIONAL
Funções
- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar dados fora dela
- Pequenas e bem específicas no que fazem

LINGUAGENS FUNCIONAIS
- JavaScript (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell 

PONTOS POSITIVOS
- Fácil manutenção
- Fácil uso de testes
    - Funções isoladas e consistentes
- Códigos mais confiáveis

PRINCÍPIOS

#PARADIGMAS
- Programação imperativa
- Programação declarativa

#DADOS

- Imutabilidade
- Stateless

#FUNÇÕES

- Independentes
- Puras */

/* Função que eleva o número ao quadrado

* Imperativo: Faça da seguinte forma
let number = 2
function square() {
    return number * number
}
number = square()

- O codigo é pensado e gerado em sequencia
- O código é pensado como um passo-a-passo, como uma receita de bolo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a objetos é um tipo de paradigma imperativo

* Declarativa: O que fazer e não como fazer
const square = n => n * n

- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação Funcional é um tipo de paradigma declarativo */

/*
IMUTABILIDADE
- Uma variável não vai variar
- Se você precisar mudar uma variável, você não muda, você cria uma nova 

//Exemplo em JS
    const cart = {
        quantity: 2,
        total: 200
}

//BAD
cart.quantity = 3

//GOOD
const newCart = {...cart, quantity: 3}

//Exemplo em ReactJS
const [amount, setAmount] = useState(0)

//BAD
amount = 2

//GOOD
setAmount(2)
*/

/*
STATELESS
- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não poderá variar 
//statefull function
function square() {
    return number * number
}
number = square()

//stateless function
const square = n => n * n;
*/

/*FUNÇÕES INDEPENDENTES*/