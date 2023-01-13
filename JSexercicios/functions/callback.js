//Callback function

function sayMyName (name) {
    console.log('antes de executar a funcao callback')

    name()//nesse bloco temos um pequeno exemplo de condionais

    console.log('depois de executar a funcao callback')
}

sayMyName(
    () => { //function
        console.log('estou em uma callback')
    }
) 

//Aqui poderá ser inserido qualquer tipo de dado, seja string, object, function, number, float, boolean etc...