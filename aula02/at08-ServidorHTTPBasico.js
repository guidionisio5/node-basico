// importacao do http
const http = require('http')

// cria o servidor
const servidor = http.createServer((req,res)=>{
    // seta o header da resposta
    // retornar o HTML
    res.setHeader('Content-type','text/html')
    // HTML que sera retornado para renderizar no navegador
    res.end(`
        <h1>Olá Mundo!</h1>
    `)
})

// listen do servidor
servidor.listen('3000',()=>{
    console.log(`Servidor rodando: http://localhost:3000`)
})