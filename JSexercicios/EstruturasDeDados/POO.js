/*
OBJECTS

Todo objeto possui:
- Propriedades e Funcionalidades
- Estado e Comportamentos
- Atributos e Métodos

CLASSES EM JS

- Sintactical Sugar
- Prototype

ENCAPSULAMENTO

- Colocar numa cápsula
- Agurpamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos


//Estrutural
let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

//Orientado a Objetos
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//criando o poligono
let poligono = new Poligono(50, 60)
console.log(poligono.area)
*/

//Confusão vs Solução esse codigo esta disponivel no arquivo esturturalvspoo

/* 
HERANÇA 

class Veiculo {
    rodas = 4;

    mover(direcao) { }
    virar(direcao) { }
}

class moto extends Veiculo {
    constructor() {
        super() //puxar atributos e métodos do pai
        this.rodas = 2
    }
}
*/

/* POLIMORFISMO 
Recriação de um método ou mais da classe herdada

ABSTRAÇÃO
Template ou identidade de uma classe que será construída no futuro*/