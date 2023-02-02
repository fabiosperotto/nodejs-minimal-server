
# Minimal Node.js Server
Projeto para fins de estudos acadêmicos de como implementar uma aplicação web funcional com [Node.js](https://nodejs.org/) com o mínimo possível de dependências. É uma framework mínimo para o desenvolvimento de sites. O propósito é para que estudantes tenham contato com aplicações web com Node.js antes de desenvolver aplicações profissionais com Express, Axios ou outros frameworks, do ecossistema do Node.js.

[Click here to README in english](README-en.md)

## Instalação
Efetuar o download do projeto na última versão e:
```bash
$ npm install
```

Para rodar a aplicação:
```bash
$ node server.js
```


## Estrutura
A estrutura deste framework mínimo procura se orientar pela arquitetura [MVC](https://pt.wikipedia.org/wiki/MVC):
- /app: possui implementações de controllers, models e alguns helpers para auxiliar no processamento de dados;
- /views: contém as páginas HTML da aplicação.
- routes.js: implementa uma parte do processamento de rotas da aplicação, chamando os controllers;
- server.js: configurações e ativação da aplicação.



## Como utilizar
O presente projeto já possui páginas de exemplos. Para criar uma página:
1. Crie o seu HTML no diretório /views, os arquivos possuem a extensão .ejs;
2. Crie uma entrada no arquivo routes.js para tratar a requisição HTTP e chame um controller responsável;
3. Crie o controller responsável em /app/controllers que finaliza o processamento da requisição + verbo HTTP e retorna a view deseja (criada no passo 1).



## Gerenciamento de Template
Para o presente projeto é utilizado para o gerenciamento de template o [EJS](https://ejs.co/). Em /app/helpers/pageProcess.js possui um exemplo de como realizar um HTTP response realizando a chamada do EJS para informar dados ao HTML. A partir deste arquivo, é possível trocar facilmente para outros gerenciadores de template.


## Sessões
Para o gerenciamento de sessões é utilizado o componente [client-sessions](https://github.com/mozilla/node-client-sessions). Configure a sessão e os cookies conforme exemplo em server.js. Depois poderá criar e acessar objetos em sessão, além de realizar a destruição da mesma. Verifique exemplos em /app/controllers/user.js


## Pré-requisitos e Compatibilidade
- Node.js 12+;


## Contribuições
Não é necessário abrir uma issue para realizar discussões antes de entregar o seu pull request. Mas é importante apenas para deixar registrado para outros que está trabalhando em alguma funcionalidade. Sugestões de melhoria para este projeto:
- Mecanismo para retornar página de 404 quando alguma requisição inexistente for solicitada;
- Melhor tratamento de erros;
- Melhoria de qualidade de código ou da arquitetura de toda a aplicação;
- Melhoria nas documentações;
- Outros, fique a vontade em contribuir.
