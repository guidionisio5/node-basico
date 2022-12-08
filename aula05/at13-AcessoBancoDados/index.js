// importação express
const express = require('express')
const con = require("./conexao")
const validaCampoVazio = require("./validaCampoVazio");
const app = express()

const porta = 3900


app.use(express.static('views/public'));


// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended: true}))

// converte os valores para o formato json
app.use(express.json())



app.get('/',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/login.html')
})


app.get('/cadastrar',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

app.get('/consultar/:id?',(req,res)=>{   
    res.status(200)
   
    try {

        let id = req.params.id
        if(typeof id == 'undefined'){
            var sql = `SELECT nome,email,ativo,data_cadastro FROM tb_login`
        }else{
            var sql = `SELECT nome,email,ativo,data_cadastro FROM tb_login WHERE id = ${id}`
        }
        
        con.query(sql,(error,result)=>{
         if (error) {
            res.send(`Não foi possivel listar os registros ${error}`)
            
           
         }
         res.send(result)
        })

    } catch (error) {
        res.send(`Não foi possivel listar os registros ${error}`)

    }
    
})


app.post('/cadastrar/login',(req,res)=>{
    
    let {nome,email,senha,confirmar} = req.body

    // funcao valida os campos vazios
    // validaCampoVazio(nome,'nome')
    if(nome == '' || email == '' || senha || '' || confirmar == ''){
        res.json({"retorno":"erro","mensagem":"Campo obrigatório vazio!"})
        return
    }

    if(senha != confirmar){
        res.json({"retorno":"erro","mensagem":"Senhas não conferem!"})
        return
    }

    try {
        let sql = `INSERT INTO tb_login(nome,email,senha)
                VALUES('${nome}','${email}','${senha}')`


        con.query(sql,(error,result)=>{
            if (error) {
                return res.json({"retorno":"erro","mensagem":`Erro ao cadastrar ${error}`})
            }
        })

        res.json({"retorno":"ok","mensagem":"Cadastrado com sucesso!"})

    }catch (error){

        res.json({"retorno":"erro","mensagem":`Erro ao cadastrar ${error}`})
    
    }
})


app.patch('/atualizar/login',(req,res)=>{
    
    let {nome,email} = req.params

    try {
        let sql = `UPDATE tb_login SET nome=${nome}, email=${email}
        WHERE id = ${id}`
        con.query(sql,(error,result)=>{
            if (error) {
                return res.send(`Não foi possivel atualizar os dados`)
            }

            res.send(`Dados atualizados com sucesso!`)

        })
    } catch (error) {
        return res.send(`Não foi possivel realizar a ação!`)
    }

})

app.delete('/deletar/login',(req,res)=>{

    let id = req.body.id

    try{
        // comando que sera executado
        let sql = `DELETE FROM tb_login WHERE id = ${id}`

        con.query(sql,(error,result)=>{
            
            if (error) {
                return res.send(`Não foi possivel deletar o registro! ${error}`)
            }
            res.send(`Registro deletado com sucesso!`)

        })

    }catch (error){
        return res.send(`Não foi possivel deletar o registro!`)
    }
})

app.post('/validar/login',(req,res)=>{

    let {email,senha} = req.body

    try{

        let sql = `SELECT email FROM tb_login WHERE email='${email}' AND BINARY senha = '${senha}' AND ativo = 1 `;
        
        con.query(sql,(error,result)=>{
            if (error) {
                return res.json({"retorno":"erro","mensagem":`Erro ao validar usuário ${error}`})
            }

            if(result == ''){
                res.json({"retorno":"erro","mensagem":"E-mail e senha inválidos!"})
            }else{
                res.json({"retorno":"ok","mensagem":"Aguarde estamos logando!"})
            }
        })

    }catch (error) {
        res.json({"retorno":"erro","mensagem":`Erro ao cadastrar ${error}`})
    }
})

// rota para retorno da pagina de erro
// importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1> Página não encontrada! </h1>')
})

app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})