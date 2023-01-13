/*
    Prototype

    *prototype-based language
    *prototype chain
    *__proto__
*/

    /*Manipulando strings e numeros
    - Transformando string em numero e vice e versa
    let string = "123"
    console.log(Number(string))
    let number = 321
    console.log(String(number)) */

    /* Contando quantos caracteres tem uma palavra e quantos digitos tem um numero
    let word = "paralelepipedo"
    console.log(word.length)
    let number = 1234
    console.log(String(number).length) Necessario converter number to string */

    /*Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula
    let number = 345.33452345
    console.log(number.toFixed(2).replace(".", ",")) */

    /*Transforme letras minusculas em maiusculas e vice e versa
    let word = "programar é muito legaal!"
    console.log(word.toLowerCase or toUpperCase()) */

    /*Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ")
    let phraseWithUnderscore = myArray.join("_")
    console.log(phraseWithUnderscore.toUpperCase()) 
    
    BONUS = Para verificar se o texto contem um dado especifico se usa a função INCLUDES()*/

    /* Manipulando Arrays
    - Criar array com construtor
    let myArray = new Array('a', 'b', 'c')
    console.log(myArray) 
    
    -Contar elementos de um array
    console.log([
    "a", 
    {type: "array"}, 
    function() {return "ola"},
    ] [2] ()) */ 

    /*Transformar uma cadeia de caracteres em elementos de um array
    let word = "manipulacao"
    console.log(Array.from(word)) */

    let techs = ["html", "css", "js"]

    /*Adicionar um item no fim
    console.log(techs.push("nodejs"))
    --adicionar no começo
    techs.unshift("sql")
    --remover do fim
    techs.pop()
    --remover do começo
    techs.shift()
    --pegar somente alguns elementos do array
    console.log(techs.slice(1, 3))
    --remover 1 ou mais itens em qualquer posição do array
    techs.splice(1, 2)
    --encontrar a posição de um elemento do array
    let index = techs.indexOf ('css')
    techs.splice(index, 1)

    console.log(techs) */