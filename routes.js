const siteController = require('./app/controllers/site');
const userController = require('./app/controllers/user');

function next(request, response){
    
    if(request.url === "/" || request.url.startsWith("/contato")){

        siteController(request, response);
    }

    if(request.url.startsWith("/login") || request.url.startsWith("/logout")){
        
        userController(request, response);

    }

}

module.exports = {next};