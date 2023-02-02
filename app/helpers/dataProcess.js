const querystring = require('querystring');

/**
 * Exemplo de coleta de dados
 * @param http.ClientRequest request 
 * 
 */
collectDataRequest = function(request, callback){
    let dados = '';
    request.on("data", (pedaco) => {
      dados += pedaco.toString();
    });

    request.on("end", () => {
     
      callback(querystring.parse(dados));

    });
}

/**
 * Verifica se a sessao esta ativa. Redireciona para a pagina se sessao expirou
 * @param http.ClientRequest request 
 * @param http.serverResponse response 
 * @returns boolean true se sessao ativa, false do contrario
 */
function isSessionActive(request, response){
  if(request.minhaSessao.user){
      return true;
  }
  response.statusCode = 302;
  response.setHeader('Location','/logout');             
  response.end();
  return false;
}
module.exports = {collectDataRequest, isSessionActive};