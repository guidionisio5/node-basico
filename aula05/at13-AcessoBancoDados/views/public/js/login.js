// funcao que validar login

const validarLogin = () =>{
    
    let email =  $('#email').val()
    let senha =  $('#senha').val()

    if(email == '' || senha == ''){
        Swal.fire({
            icon: 'error',
            title: 'Atenção!',
            text: 'Preencha todos os campos!',
        })
        return
    }

    const result = fetch('/validar/login',{
        method: 'POST',
        body: `email=${email}&senha=${senha}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
        }
    })
    .then((response) => response.json())
    .then((result)=>{
        if(result.retorno == 'ok'){
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: result.mensagem,
            })
            // limpa o formulario
            $('#form-login')[0].reset()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Atenção!',
                text: result.mensagem,
            })
        }
    })

}