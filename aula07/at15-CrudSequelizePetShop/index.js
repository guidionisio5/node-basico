// importa o modulo do express
const express = require('express')

// inicializa o express 
const app = express()

// importa o modulo do usuario do banco
const usuario = new require('./model/usuario')
const produto = new require('./model/produto')

// porta do servidor
const porta = 5000;

// carrega conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'));

// MIDLEWARE
// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extented: true}))

// converte os valores para formato JSON
app.use(express.json())
// FINAL MIDLEWARE

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
    // comando para inserir registros usando sequelize
    // usuario.create({
    //     nome: "",
    //     email: "",
    //     senha: ""
    // }) 
    // res.status(200)
    res.sendFile(__dirname+'/views/cadastrar-usuarios.html')
})

app.post('/cadastrar/usuarios',(req,res)=>{

    let dados = req.body
    usuario.create(dados)

    .then(respBd=>{
        res.json({"retorno":"ok","mensagem":`Cadastrado com sucesso!`})
    })

    .catch(respBd=>{
          res.json({"retorno":"erro","mensagem":`Erro ao cadastrar! ${respBd}`})  
    })
})

// funcao que lista os usuarios
app.get("/listar/usuarios",(req,res)=>{
    
    usuario.findAll()
    
    .then(respBd=>{
        res.json(respBd)
    })
    .catch(respBd=>{
        res.json({"retorno":"erro","mensagem":`Erro ao listar! ${respBd}`})  
    })
}) 

// funcao que lista os usuarios por id
app.get("/listar/usuarios/:id",(req,res)=>{
    
    let id = req.params.id

    usuario.findOne({where:{id:id}})
    
    .then(respBd=>{
        res.json(respBd)
    })
    .catch(respBd=>{
        res.json({"retorno":"erro","mensagem":`Erro ao listar! ${respBd}`})  
    })
}) 

app.delete('/excluir/usuarios/:id',(req,res)=>{
    
    let id = req.params.id

    usuario.destroy({where:{id:id}})

    .then(respBd=>{
        res.json({"retorno":"ok","mensagem":`Usuário deletado com sucesso!`})
    })
    .catch(respBd=>{
        res.json({"retorno":"erro","mensagem":`Erro ao deletar! ${respBd}`})  
    })
})


// inicia o servidor
app.listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})