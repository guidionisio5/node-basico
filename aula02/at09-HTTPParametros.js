// importacao do http
const http = require('http')
// importacao do url
const url = require('url')

// cria o servidor
const servidor = http.createServer((req,res)=>{
    // captura os parametros enviados via GET
    let parametros = url.parse(req.url, true)
    // console.log(parametros)

    let nome = parametros.query.nome

    // seta o header da resposta
    // retornar o HTML
    res.setHeader('Content-type','text/html')
    // HTML que sera retornado para renderizar no navegador
    res.end(`
        <form>
            <label for="nome">Digite seu nome:</label>
            <input type="text" name="nome" id="nome">
            <button type="submit">Enviar</button>
        </form>

        <h1>${nome != null ? `Olá ${nome}` : ''}</h1>
    `)
})

// listen do servidor
servidor.listen('3000',()=>{
    console.log(`Servidor rodando: http://localhost:3000`)
})