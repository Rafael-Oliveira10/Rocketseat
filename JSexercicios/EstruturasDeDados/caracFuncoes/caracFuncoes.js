/* 
CARACTERÍSTICAS DAS FUNÇÕES:
* FUNÇÕES INDEPENDENTES 
* FUNÇÕES PURAS
* FIRST-CLASS FUNCTIONS
* HIGHER-ORDER FUNCTIONS
* COMPOSIÇÃO DE FUNÇÕES 

FUNÇÕES INDEPENDENTES 
- Deverá ter ao menos um argumento
- Deverá retornar algo
- Nada que acontecer lá dentro afeta o mundo externo
    - dados imutáveis
    - não guardar estado
- Não faremos uso de loops(for, while), mas se houver necessidade de tal, usaremos recursão(a função chama ela mesmo (callback??))

const random = (number, Math) =>
Math.floor(Math.random() * number);

//recursive
//Find the factorial of a number
const factorial = x => {
    //if number is 0
    if (x === 0) {
        return 1;
    }
    return x * factorial(x -1);
}
*/

/*FUNÇÕES PURAS
- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
- Não deverá sofrer nenhuma interferência do mundo externo a ela
- Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
- Não terá nenhum efeito colateral no seu código
    - Não irá modificar nenhum dado
    - Não irá guardar nenhum estado

Função impura

Exemplo 1: Está dependendo de dado externo que não foi passado como parâmetro 
function calculateCircumference(radius) {
    return Math.PI * (radius * radius)
}

Exemplo 2: Está alterando um dado externo
let person = {
    name: 'Rafael Camarada'
    age: 'jovem'
}

function changeName(name){
    person.name = name
}

Função pura 
//Exemplo 1:
const calculateCircumference = function (pi, radius) {
    return pi * (radius * radius)
}

//Com arrow function
const calculateCircumferences = (pi, radius) =>  pi * (radius * radius)


//Exemplo 2:
const changePersonName = (person, name) => ({...person, name})
*/

/*FIRST-CLASS FUNCTION
- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
- A função poderá ser entendida como uma variável 

const sayMyName = () => console.log('Mayk')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))
*/

/*HIGHER-ORDER FUNCTION
- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções 

//Exemplo com .map() JS
const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumbers = numbers.map(square)

//Exemplo de um retorno de função
//(currying ou aplicação parcial de função)
const pause = wait => fn =>setTimeout(fn, wait)

pause(600)( () => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1s'))
*/

/*COMPOSIÇÃO DE FUNÇÕES
- Um encadeamento de funções
- Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna... 

const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStarsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase()) */
