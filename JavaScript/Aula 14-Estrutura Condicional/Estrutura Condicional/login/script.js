function verificarLogin() {
    let usuario =
        document.getElementById("usuario").value;
    let senha =
        document.getElementById("senha").value;
    let mensagem =
        document.getElementById("mensagem")

    if (usuario === "admin" && senha === "1234") {
        mensagem.innerHTML = "Usuario Valido"
        mensagem.style.color = "Green";
    }
    else if (usuario === "admin") {
        mensagem.innerHTML = "Senha inválida"
        mensagem.style.color = "red"
    }

    else {
        mensagem.innerHTML = "Login Incorreto";
        mensagem.style.color = "red";

    }



}


