// funcao que valida campo vazio
const validaCampoVazio = (campo,nome) =>{
    if(campo == ''){
        return res.json({"retorno":"erro","mensagem":`Campo ${nome} não preenchido!`})
    }
}

module.exports = {
    validaCampoVazio
}