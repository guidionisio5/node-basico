// importacao do express
const express = require('express')

// inicializa o express
const app = express()

// porta do servidor 
const porta = 3660

// define a pasta public com o conteudo static (CSS,JS,IMG)
app.use(express.static('views/public'))

// cria a rota
app.get('/',(req,res)=>{
    res.status(200)
    res.send('<h1>Index - Rotas</h1>')
})

// cria a rota cadastrar
app.get('/cadastrar',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

// cria a rota consultar
app.get('/consultar',(req,res)=>{
    res.status(200)
    res.send('<h1>Consultar</h1>')
})



// rota para retorno da pagina de erro
// super mega importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1>Página não encontrada!</h1>')
})


app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})