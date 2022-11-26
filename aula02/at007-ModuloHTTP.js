// importacao do modulo http
const http = require('http')

// cria o objeto servidor
// req = request(resquisição)
// res = response(reposta)
http.createServer(function(req,res){
    res.write('Olá Mundo!')
    res.end()
}).listen(3000)