/* Function() constructor 

* expressão new
*criar um novo objeto
*this keyword
*/

/*let name = new String("Isabelle") bom saber que aqui ele captura até a lenght do object
console.log(name)*/

let date = new Date("2022-12-31") //ponto interessante sobre isso é que nesse modo ele captura e apresenta a data
console.log(date)


/*function Person(name){ //*criar um novo objeto
    this.name = name //*this keyword
    this.walk = function() {
        return this.name + " está andando" 
        //concatenando uma função ao objeto
    }
}

const rafa = new Person("Rafa") // expressão new
const isa = new Person("Isa")

console.log(rafa.walk())
console.log(isa.walk()) //instanciando um novo objeto*/