// importando express
// npm i express -- save
// npm i nodemon --save(nesse deu merdinha)
const express = require('express')

// inicializando o express
const app = express()

// define a porta de funcionamento do servidor(pode ser qualquer numero acima de 1000)
const porta = 3300

// criar rotas
// a / chama o index(a raíz)
// req = requisição e res = resposta
// cria a rota / -> raiz da aplicacao
app.get('/',(req,res) => {
    res.send('Index - Aplicação Express!')
})

app.get('/login',(req,res)=>{
    res.send('Login - Sistema Express!')
})

app.get('/cadastrar',(req,res)=> {
    res.send('<h1>Cadastrar Usuários - Express</h1>')
})

// lista o servidor
app.listen(porta,() =>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})

