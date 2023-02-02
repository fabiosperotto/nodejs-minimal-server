const fs = require('fs');
const ejs = require('ejs');

/**
 * 
 * @param http.serverResponse response 
 * @param string viewname nome do arquivo HTML, sem extensao
 * @param int httpstatus http status code desejado
 * @param object data contendo dados a serem inseridos dinamicamente no HTML
 */
function render(response, viewname, httpstatus, data){

    //caso nao existir um title para a pagina, setar como default:
    if(typeof data.title === 'undefined' ) data.title = 'Titulo da Pagina'; //title html tag
    
    //definicao de qual view a ser chamada pelo nome do aquivo
    const template = fs.readFileSync(__dirname + '/../../views/' + viewname + '.ejs');
    const html = ejs.render(template.toString(), data);
    response.statusCode = httpstatus;
    response.setHeader('Content-Type', 'text/html');
    response.end(html);

}

module.exports = {render};