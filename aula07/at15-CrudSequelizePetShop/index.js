// importa o modulo do express
const express = require('express')

// inicializa o express 
const app = express()

// importa o modulo do usuario do banco
const usuario = new require('./model/usuario')

// porta do servidor
const porta = 5000;

// carrega conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'));

// rota padrao
app.get('/',(req,res)=>{
    // res.status(200)
    res.sendFile(__dirname+'/views/index.html')
})

// rota login
app.get('/login',(req,res)=>{
    // res.status(200)
    res.sendFile(__dirname+'/views/login.html')
})

// rota cadastrar
app.get('/cadastrar',(req,res)=>{
    // res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

// inicia o servidor
app.listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})