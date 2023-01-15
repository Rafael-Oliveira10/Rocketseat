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
