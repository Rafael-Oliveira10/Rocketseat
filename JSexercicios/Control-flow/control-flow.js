// Control flow

/*if... else

let temperature = 35
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
} */

//Switch

/*function calculate (number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}*/

/*switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break
        case 'b':
            //codigo para expression b
            console.log('b')
            break
        default:
        console.log('default')
            break
} */

//throw
    function sayMyName(name = '') {
        if(name === '') {
            throw 'Nome é obrigatório'
        }
        console.log(name)
    }

//try...catch

try{
    sayMyName('Rafão')
} catch(e) {
    console.log(e)
}
console.log('Após o try/catch')