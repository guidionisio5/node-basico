const express = require("express") // import
const app = express() // inicia express

const porta = 4200

app.get('/',(req,res)=>{
    res.json({"rota":"index"})
})

app.get('/cadastrar/login',(req,res)=>{
    res.json({"rota":"Cadastrar login"})
})

app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})