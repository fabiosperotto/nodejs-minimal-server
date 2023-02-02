const view = require('../helpers/pageProcess');
const helper = require('../helpers/dataProcess');
const crypto = require('crypto');

const routerUser = function (request, response){

    if(request.url === "/login" && request.method === "POST"){

        helper.collectDataRequest(request, result => {
    
            let dados = {};
            //verifica por campos obrigatorios nao preenchidos
            if( (result.login === '') || (result.senha === '') ){
                dados.erro1 = true;
                return view.render(response, 'index', 200, dados);
            }

            let senha = result.senha;
            //para gerar hashes de senhas, abaixo um exemplo para verificacao simples do informado pelo cliente e o que existe no backend (BD, outros)
            let hash = crypto.createHash('sha256', 'app-key').update(senha).digest('hex');
            //1234 = 03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4
            //se a senha nao confere:
            if(hash !== '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'){
                dados.erro2 =  true;
                return view.render(response, 'index', 200, dados);
            }

            //se usuario existe, senha confere, exemplo:
            if(hash === '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'){
            
                let user = {
                    nome : 'Nome do Usuario',
                    email: result.login,
                    logged: true
                };
                request.minhaSessao.user = user;                

                response.statusCode = 302;
                response.setHeader('Location','/');             
                response.end();
            }
      
        });
    }

    //session destroy:
    if(request.url === "/logout" && request.method === "GET"){
        
        request.minhaSessao.reset();
        return view.render(response, 'index', 200, { fimsessao: true });
    }

};

module.exports = routerUser;