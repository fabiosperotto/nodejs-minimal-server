const view = require('../helpers/pageProcess');
const helper = require('../helpers/dataProcess');

const routerSite = function (request, response){

    dados = {};
    if(request.minhaSessao.user){ //recuperando dados de sessao
        dados.user = request.minhaSessao.user;
    }

    //processando rotas:

    if(request.url === '/' && request.method === 'GET'){
        return view.render(response, 'index', 200, dados);
    }

    if(request.url === "/contato" && request.method === "GET") {

        dados.title = 'Fale Conosco';
        return view.render(response, 'fale-conosco', 200, dados);
    }

    //exemplo de tratamento para requisicoes POST
    if (request.url === "/contato" && request.method === "POST") { 

        //recebendo os dados, pegando dados do corpo da requisicao:
        helper.collectDataRequest(request, result => {

            console.log(result);
            let dados = {};
      
            if( (result.nome === '') || (result.mensagem === '') ){
              dados.erro1 = true;
            }else{
              dados.nome = result.nome;
            }
      
            return view.render(response, 'fale-conosco', 200, dados);
            
          });
        
      }
    
      //exemplo de processamento de requisicao com parametros (use expressoes regulares): /post/{id}:
      if (request.url.match(/\/post\/([0-9]+)/) && request.method === "GET") {

        // console.log(req.url.split("/"));
        const id = request.url.split("/")[2]; //pegando o argumento id
      
      }

};

module.exports = routerSite;