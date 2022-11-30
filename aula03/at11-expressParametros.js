const express = require('express')

const app = express()

const porta = 4500

// rota index(raíz)
app.get('/',(req,res)=>{
    res.send('<h2>Página Principal</h2>')
})

// rota que recebe parametros
// http://localhost:4500/cadastrar/parametros
// captura de parametros via GET
app.get('/cadastrar/:pagina/',(req,res)=>{
    // captura a pagina de cadastro
    let pagina = req.params.pagina

    // loucura do mano thiago
    let url = ''
    let statusCode = 404
    if (pagina == 'usuarios') {
        statusCode = 200
        url = '/cadastrar-usuarios.html'
    } else if(pagina == 'produtos') {
        statusCode = 200
        url = '/cadastrar-produtos.html'
    }else{
        url = '/404.html'
    }

    // desenvolve um arquivo
    res.status(statusCode)
   res.sendFile(__dirname+url).status(statusCode)
})

app.get('/consultar',(req,res)=>{
    res.send(req.params)
})

app.listen(porta,() =>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})