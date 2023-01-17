# O que é HTTP?
## HyperText Transfer Protocol
Protocolo de transferência de HyperTexto

## Visão geral
* Permite troca de informações e dados na internet
* Uma troca de mensagens (request e response)
* HTML, CSS, Scripts, Imagens, Vídeo
* Uma chamada para cada um desses recursos

## Conceitos

* Simples
* Cliente/Servidor
* Stateless ----

        - Não guarda informações

        - Não existe relação entre conexões

        - Jogar moeda ( nãoo quer dizer que a requisição será sempre a mesma)

        - Sessões (cookies e storages)

* Extensível ----
                        
        - Através do cabeçalho, podemos fazer diversas trocas de informações entre o cliente-servidor, conforme a necessidade
        - Headers
        - Body

------------------------------------------------------------------
## Cliente

* Quem é o cliente? -> User Agent (Browser, cURL)
    - O cliente sempre inicia a comunicação

* Pedidos -> Ações do cliente 
    - GET
    - POST
    - PUT
    - DELETE

## Servidor

* Se apresenta como uma máquina
* Preparado para ouvir e processar
* Vários servidores em um computador
* Resposta -> Status Code -> 404 ou 500 e muitos outros

## Proxies

* Representantes
* Ficam entre o cliente e o servidor
* Ajudam a fazer o transporte dos dados
* Possuem diversas funções
    - Cache
    - Filtro(tipo antivirus ou controle parental)
    - Load Balancing(distribuição de carga)
    - Autenticação
    - Autorização

---------------------
## URI
* Conceito -> Uniform Resource Identifier
* Resource - Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso
* Locator 
    - URL -> Uniform Resource Locator
    - Compornentes
        - Obrigatórios: Protocolo, domínio
        - Opcionais: Subdomínio, Path, Parametros, Portas, Âncoras
* Name -> URN -> Uniform Resource Name
--------------------------
## HTTP Messages
* HTTP/1.1 -> Legível, texto
* HTTP/2 -> Binário, para otimizações, mesmo sendo de uma estrutura diferente, segue a mesma maneira que a versão 1.1

### Request
* Request Line (curl -v)

            - Method
            - Protocol version
            - URI
* Body
* Headers

### Response
* Protocol Version (curl -i)
* Status Code
* Headers
* Status message
-----------------
## HTTP Methods
* Define um conjunto de métodos HTTP
* Indica a ação que o cliente deseja operar
* Podem ser chamados de verbos HTTP
* Cada um possui a sua semântica
* Características
* Seguro: 

        - Não altera o estado do servidos
        - Somente leitura
        - Cliente não solicita alterações
        - Não há carca extra para o servidor
        - O servidor é responsável em manter o método seguro
        - Quais São?
            - GET
            - HEAD
            - OPTIONS

* Idempotente

        - Ao executar o método, a resposta deverá ser sempre a mesma
        - Quais são?
            - Todos os seguros são idempotente
            - PUT
            - DELETE
        - Status Code poderá ser diferente
        - O servidor tem a responsabilidade de retornar dados da mesma maneira
        - Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente

-------------------
# METHODS

## OPTIONS
* Informação sobre disponibilidade da requisição

* Características
        
        - Seguro: SIM
        - Idempotente: SIM
        - Body: Request: NÃO | Response: NÃO
        - Uso em formulários HTML: NÃO
        - Cacheable: NÃO 
-------------------
## GET
* Pegar um recurso
* Somente recebe dados
* Características:

        - Seguro: SIM
        - Idempotente: SIM
        - Body: Request: NÃO | Response: SIM
        - Uso em formulários HTML: SIM
        - Cacheable: SIM 
-------------------
## HEAD
* Semelhante ao GET, porém...
* ... recebemos somente o cabeçalho -> HEAD/posts
* Características:

        - Seguro: SIM
        - Idempotente: SIM
        - Body: Request: NÃO | Response: NÃO
        - Uso em formulários HTML: NÃO
        - Cacheable: SIM 
-------------------
## POST
* Publicar, Cadastrar um recurso
* Características:

        - Seguro: NÃO (altera dados no serv)
        - Idempotente: NÃO (vem dados diferentes)
        - Body: Request: SIM | Response: SIM
        - Uso em formulários HTML: SIM
        - Cacheable: SIM 
-------------------
## PUT 
* Cria um novo ou atualiza um recurso

        - PUT /profile HTTP/1.1
        - Diferença entre POST?
        - Criação -> Status Code 201
        - Atualização -> Status Code 204 ou 200

* Características:

        - Seguro: NÃO
        - Idempotente: SIM
        - Body: Request: SIM | Response: NÃO
        - Uso em formulários HTML: NÃO
        - Cacheable: NÃO
-------------------
## PATCH
* Modificação parcial de um recurso

       - Diferença entre o PUT? (Pequenas alterações)
       - PATCH/posts/1 HTTP/1.1

* Características:

        - Seguro: NÃO
        - Idempotente: NÃO
        - Body: Request: SIM | Response: SIM
        - Uso em formulários HTML: NÃO
        - Cacheable: NÃO
----------
## DELETE
* Remover um recurso

        - DELETE/posts HTTP/1.1
        - Status Code:
            - 202: Accepted
            - 204: No content
            - 200: OK

* Características:

        - Seguro: NÃO
        - Idempotente: SIM
        - Body: Request: POSSIBILIDADE | Response: POSSIBILIDADE
        - Uso em formulários HTML: NÃO
        - Cacheable: NÃO
----------

# HEADERS
* Cabeçalhos
* Informações adicionais para o pedido ou resposta
* Nome:valor
    * content-type: application/json
    * Content-Type: text/html

## STATUS CODE
* 100:

    * Continue

* 200

        * 200: OK(GET, POST)
        * 201: Created(PUT)
        * 204: No content(DELETE, PUT)
* 300

        * 301: Moved Permanently
        * 308: Permanent Redirect
        * 302: Found
        * 307: Temporary Redirect
* 400

        * 400: Bad Request
        * 401: Unauthorized
        * 403: Forbidden
        * 404: Not Found
        * 405: Method Not Allowed
        * 429: Too Many Requests
* 500

        * 500: Internal Server Error
        * 503: Service Unavailable