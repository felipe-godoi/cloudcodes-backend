# Cloudcodes Backend
Uma API Rest clone do Pastebin feita em NodeJS.


## Instalando dependências
* Instale primeiramente o NodeJS caso não tenha instalado. Você pode instalar ele [clicando nesse link.](https://nodejs.org/pt-br/download/)

* Depois o MongoDB para a conexão com o banco de dados. [Baixe o server nesse link.](https://www.mongodb.com/download-center/community)

* Por ultimo, entre no diretório e execute o comando `npm install` ou `yarn install` no terminal ou prompt de comando e espere até que todas as dependências sejam instaladas.

## Como usar
Com todas as dependências instaladas, execute `npm run start` ou `yarn start` para iniciar o servidor.

## Rotas
* #### /cadastrar (post)
  Recebe um **usuário**, um **email** e uma **senha** e cadastra no banco de dados. Retorna um **JSON** informando se foi cadastrado e caso algum campo esteja faltando ele também é retornado.

* #### /auth (post)
  Recebe um **usuário** e uma **senha** e retorna um **JSON** informando se foi conectado e uma mensagem.
  
* #### /salvar (post)
  Recebe uma **colagem** para salvar e o **nome** dela no corpo e o **usuário** no cabeçalho. Retorna um **JSON** informando se foi armazenado e uma mensagem.
  
* #### /codigos (get)
  Recebe o **usuário** no cabeçalho e retorna um **JSON** com as colagens atribuídas a esse usuário.
  
* #### /excluir/{id} (delete)
  Recebe o **usuário** pelo cabeçalho e o **id** da colagem pelos parâmetros. Retorna um **JSON** informando se foi deletado e uma mensagem.
  
* #### /update/{id} (put)
  Recebe o **id** pelos parâmetros e o **código**, o *nome* e o **usuário** pelo corpo da requisição. Retorna um **JSON** informando se foi atualizado e uma mensagem.
