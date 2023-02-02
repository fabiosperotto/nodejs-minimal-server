const http = require('http');
const sessions = require('client-sessions'); //https://github.com/mozilla/node-client-sessions
var routes = require('./routes');

//configurando a sessao
var requestSessionHandler = sessions({
    cookieName: 'minhaSessao', //nome do cookie que sera o objeto a ser manipulado
    secret: 'segredo-string-aletoria', //informar uma string que nao seja facil de adivinhar, se possivel, use variavies de ambiente para inserir a string aqui
    duration: 1 * 60 * 60 * 1000, //tempo de vida da sessao em ms (1h * 3600000 ms)
    cookie: {
        httpOnly: true, //se true os cookies nao sao acessiveis via javascript (session hijacks)
        ephemeral: true //se true, sessao expira quando o navegador fecha
    }
});

//configurando o servidor
const servidor = http.createServer( (request, response) => {

    console.log(request.method + ' ' + request.url);

    requestSessionHandler(request, response, function (){
        //inicialize itens de sessao aqui caso precisar
        //qualquer definicao de propriedade da sessao aqui vai disparar a criacao do cookie
    });

    //encaminhando as requisicoes para controllers
    routes.next(request, response);
    
});

//geralmente a 8080 eh a utilizada
servidor.listen(3000, () => {
    console.log('servidor ativo');
});