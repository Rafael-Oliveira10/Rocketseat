## Command Line Interface
### Gui
* Graphical User Interface
* Janelas, botões, menus, mouse
* Ver vídeos, jogar, trabalhar com imagens e edição de vídeo
        
### CLI
* Command Line Interface
* Enviar comandos
* Ver resultados dos comandos
* Shell ou interpretador é o ambiente
    * Executa os comandos
    * Conversa com o Kernel
    * Bash: Bourne-again shell
    * por padrão, existe em ambientes linux

### Command
* programa que você está rodando
* Obrigatório
    
### Option(s)
* Mudar o comportamento
* Explicar ao comando como deve funcionar
* geralmente, começa com um traço
* geralmente, uma letra somente
* a maioria dos comandos oferecem muitas opções
    
### Argument(s)
* Onde o comando irá operar
* Caminho do arquivo ou diretório
----------------------------------------------------------------------------

## Lista de comandos
### Conseguindo ajuda
* man = manual dos comandos
* apropos = pesquisa algum comando exemplo "list"

### ls
* Listagem de arquivos e pastas
   * -l = mais info
   * -a = all
   * -h = human
   * -R = recursive
   * -S = ordenar pelo tamanho

### Outros comandos
* pwd identifica o diretório atual
* cd change directory
    * mudar diretório cd , voltar diretórios ../, voltar de onde veio -

* file - tipo de arquivo, informações
* stat - dono, modificações
* mkdir - cria um diretório - -p cria multiplos diretórios
* touch - cria um ou mais arquivos, altera registro de data e hora de arquivos ou pastas
* cp - copiar para copiar completamente usar o -r(recursivo)
* mv - move um ou mais arquivos ou renomeia arquivos
* rm - remove um arquivo permanentemente para remover multiplos arquivos de um mesmo diretório usar o -r(recursivo). Para remover sem ter a pergunta de segurança, usar -f(force)

* ver conteúdo de arquivos
    * less
    * cat

* find - Encontrar arquivos ou diretórios
    * find < path > arg [ expression ]
    * type < dlf >
    * name 

* editar arquivos
    * nano
    * vim

#### wildcards(curinga)
* Essa propriedade vai servir para facilitar a cópia ou a movimentação de arquivos ou diretórios sem precisar escrever a palavra inteira
* * -1 ou mais caracteres
* ? - 1 caracter
