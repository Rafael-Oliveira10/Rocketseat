/*Estruturas de repetição
for
break - para a execução do loop
continue - pula a execução do momento

for (let i = 10; i > 0; i--) {
   if(i === 5) {
        continue;
   } 
   console.log(i)
} */

/*While

let i = 0;
while(i < 10) {
    console.log(i) //Pode ser usado quando não sabemos o momento de parada do programa
    i++;
} */

/* for...of

let name = 'rafa'
let names = ['João', 'Paulo', 'Pedro']

for (let name of names) {
    console.log(name)
} */

/* for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
} */

/*const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element)); */

let numeros = [1, 2, 3, 4, 5, 6];
let total = numeros.reduce(function (total, numero) {
    return total + numero;
}, 0);
console.log(total);