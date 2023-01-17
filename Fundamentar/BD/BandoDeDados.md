# COMANDOS DE BANCO DE DADOS
## Aula de BD da RocketSeat
* O banco de dados como sabemos é um sistema de armazenamento de informações, dados que precisam ser guardados para uma futura consulta. Essa consulta é feita por um sistema, para apresentar posteriormente ao cliente que fez essa requisição. Todos os aplicativos atuais utilizam dessa ferramente para armazenar todo tipo de informação. Seja lá relacional "SQL" ou não relacional "NOSQL".

* -SELECT: Seleciona um ou mais dados para ser apresentado pelo atributo FROM (usa-se * para mostrar todos)
* -FROM Seleciona o campo do qual se quer mostrar o dado
* -WHERE onde se tem o dado
* -like seguido de "%" ou "%%" para mostrar um caractere específico que determinada informação possui 

## Um primeiro exemplo:

SELECT * FROM aluno WHERE matricula = 1

SELECT * FROM aluno WHERE nome like "%G%"

SELECT matricula, cpf FROM aluno WHERE nome like "%G%"

Nesse caso estou pedindo para o banco de dados me retornar um valor onde o aluno tem o valor G em qualquer lugar no nome dele. Se eu colocar G% ele vai me retornar alunos que começam com essa letra.

o sinal '=' so funciona em dados do tipo number
o sinal '=' pode ser usado também junto com operadores matemáticos +, -, *, / e %(resto)
para dados do tipo texto se usa a tag 'like' e é necessário utilizar aspas simples ''

SELECT * FROM aluno WHERE nome like 'Mariano Garcia'

operador <> não igual a
operador != diferente de 

## Operadores lógicos
* AND:

SELECT * FROM aluno WHERE nome like "%J%" AND matricula < 2
Aqui inicialmente será apresentado os nomes que começam com J (dois nomes) mas ai irá filtrar mais uma vez por causa do comando AND e resultará só em quem tem a matricula de valor 2. AND junta duas condições

* OR:

SELECT * FROM aluno WHERE matricula > 1 OR nome like "%J%"
Traga todos alunos que matricula maior que 1 ou nomes que tenham a letra J

* BETWEEN(NOT BETWEEN ignora os dados selecionados):

SELECT * FROM funcionarios 
WHERE id_funcionario BETWEEN 4 and 7

* IN e NOT IN(procura os funcionarios dentro de cada departamento e not in procura quem não está dentro dos departamentos designados):

SELECT * FROM funcionarios 
WHERE id_departamento IN (1, 3, 5)

* IS NULL e IS NOT NULL:

SELECT * FROM funcionarios 
WHERE id_departamento IS NULL(trará os funcionarios que o departamento for = a null)

SELECT * FROM funcionarios 
WHERE id_departamento IS NOT NULL (trará todos os funcionarios que o departamento não for = a null)

## Outros comandos

* INSERT INTO aluno(nome, cpf, responsavel) VALUES ("Rafael Oliveira", 11122233345, "Maria do Carmo")

* UPDATE aluno SET nome='Rafael Santana', responsavel='Fabio Oliveira' WHERE matricula = 4

* DELETE FROM aluno WHERE matricula = 4