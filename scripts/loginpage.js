var userError = document.getElementById("userError")
var passwordError = document.getElementById("passwordError")

function confirmar(){
    var usuario = document.getElementById("userType").value
    var senha = document.getElementById("userPassword").value
    
    var usuario_cadastrado = "1234"
    var senha_cadastrada = "1234"

    if (usuario == usuario_cadastrado && senha == senha_cadastrada){
        window.location.href = "/pages/home.html"
    }

    else if(usuario != usuario_cadastrado){
        userError.innerText = 'usuário inválido, tente novamente!'
    }

    else if(senha != senha_cadastrada){
        passwordError.innerText= 'senha incorreta, tente novamente!'
    }

    else{
        userError.innerText = 'usuário inválido, tente novamente!'
        passwordError.innerText= 'senha incorreta, tente novamente!'
    }
}
