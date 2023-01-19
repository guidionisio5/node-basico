document.querySelector("#btn-cadastrar").addEventListener('click',()=>{

    // prevencao de envio padrao
    window.event.preventDefault() 

    cadastrar()

})

const cadastrar = () =>{

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmar = document.getElementById('confirmar').value


    if(nome == '' || email == '' || senha == '' || confirmar == ''){
        Swal.fire({
            icon: 'error',
            title: 'Atenção!',
            text: 'Campo obrigatório vazio!',
        })
        return
    }

    if(senha != confirmar){
        Swal.fire({
            icon: 'error',
            title: 'Atenção!',
            text: 'Senhas diferentes!',
        })
        return
    }

    const result = fetch('/cadastrar/usuarios',{
        method: 'POST',
        body:`nome=${nome}&email=${email}&senha=${senha}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
        }
    })
    .then(response=>response.json())
    .then(result=>{
        
        // aqui tremos a resposta do backend node
        if(result.retorno == 'ok'){
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: result.mensagem,
            })
            // limpa o formulario
            $('#form-usuarios')[0].reset()
            // reseta o formulario sem JQuery 
            // document.getElementyById('form-usuarios').reset()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Atenção!',
                text: result.mensagem,
            })
        }

    })
}