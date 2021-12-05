function validarusuario() {
    var nome = document.getElementById("txtusuario").value
    
    if (nome !== "" && nome.length > 4) {
        return true;
    }else {
        alert("*preencha o campo usuario corretamente");
        return false;
    } 
}
function validarsenha() {
    var senha = document.getElementById("txtsenha").value
    var confirmarsenha = document.getElementById("txtconfirmarsenha").value
    if (senha !== "" && senha.length > 4 && senha == confirmarsenha) {
        return true;
    }else {
        alert("*preencha o campo senha e/ou confirmar senha corretamente");
        return false;
    } 
}
function validartudo() {
    if (validarusuario() && validarsenha()) {
        alert("dados enviador com sucesso!");
        nome = document.getElementById("txtusuario").value = null;
        senha = document.getElementById("txtsenha").value = null;
        confirmarsenha = document.getElementById("txtconfirmarsenha").value = null;
        return true;
    }else{
        return false;
    }
}