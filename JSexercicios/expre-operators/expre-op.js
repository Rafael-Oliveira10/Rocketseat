/* new

    *left-hand-side expression
    *criar novo objeto


let name = new String('Rafa')
name.surName = 'Brito'
let age = new Number(25)
console.log(name.surName, age) */

/* Operadores unários
    typeof
    delete
    const person = {
        name: 'Rafa',
        age: 25,
    }
    delete person.age

    console.log(person)
*/

 /*Operadores aritméticos
//--multiplicação = *
console.log(3.2 * 5.5)

//--divisão = /
console.log(12 / 2)

//--soma = +
console.log(34 + 67)

//--subtração = -
console.log(34 - 23)

//--resto da divisão = %
let remainder
remainder = 11 % 3
console.log(remainder)

//--incremento = ++
let increment = 0
console.log(++increment)
console.log(increment++) //Aqui se o ++ for posto depois o valor sera adicionado após a execução e se for antes, ele jogará o valor imediatamente na operação

//--decremento = --
let decrement = 0
console.log(decrement++)
console.log(++decrement)

//--exponencial
console.log(2 ** 2) */

/* Grouping operator ()

let total = (2 + 3) * 5 //Aqui os parenteses alteram a fila de prioridade na equação ou em qualquer outro tipo de dado. No caso a adição vai ser feita primeiro que a multiplicação(a regra da matemática: primeiro multi depois add) */

/*Operadores de comparação

Irá comparar valores e retornar um boolean como resposta à comparação 

let one = 1
let two = 2

console.log( two == 1)
 == igual a
console.log(one == "1")

console.log(one != two)
 != diferente de
console.log(one != 1)
console.log(one != "1//")

console.log (one === "1")
 === estritamente igual a
console.log(one === 1)

 !== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2) 

 > maior que
console.log (one > two)

 >= maior ou igual a
console.log( one >= 1)
console.log( two >= 1)

 < menor que
console.log(one < two)

 <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0) */

/*Operadores de atribuição (assingnment)

let x
console.log(x)

 assingment
 x = 1

 addition assignment
 x = x + 1
 += 2

subtraction assignment
 x = x - 1
 x -= 1

 multiplication assignment
 x = x * 2
 x *= 2

 division assignment
 x = x * 2
 x /= 2

 remainder, exponentiation
 x %= 2
 x **= 2 */

 /*Operadores lógicos (logical operators) - 2 valores booleanos, quando verificados resultará em verdadeiro ou falso

 let pao = true
 let queijo = true

 AND &&
 console.log(pao && queijo)

 OR ||console.log(pao || queijo)

 NOT !
console.log(!pao) //troca o valor da variável, se tiver true se tornará false */

//Operador condicional (Ternário)

/*Dependendo da condição, nós receberemos valores diferentes

Condição então valor 1 se não valor 2
condition ? value1 : value2

Exemplos
Café da manhã top
let pao = false // Café ruim, se fosse true ia ser top
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast) */

/*maior de 18

let age = 18

const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive) */

/*Operador de String (String Operator)

comparison 
 console.log ('a' == 'a' = true)

Concatenation
Retorna a união de duas Strings
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha) */

/* FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
    false, 0, -0, "", null, undefined, NaN 
*/
//console.log(NaN ? 'verdadeiro' : 'falso') (NaN ou qualquer outro dado citado acima)

/* TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
    true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity
*/
//console.log("0" ? 'verdadeiro' : 'falso')

/*Operator precedence

* grouping                      ()
*negação e incremento           ! ++ --    
*multiplicação e divisão         * /
*adição e subtração             + -
*relacional                     < <= > >=
*igualdade                      == != === !==
*AND                            &&
*OR                             ||
*condicional                    ? :
*assignment                     = += -= *=
*/
