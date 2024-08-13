/*function validarSenha(senha) {
    const temComprimentoSuficiente = senha.length >= 8;
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    
    return temComprimentoSuficiente && temLetraMaiuscula && temCaractereEspecial && temNumero;
}


function validarFormulario(senha, validarFormulario){

    if (!validarSenha(senha)) {
        ("Senha inválida. A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um caractere especial e um número.");
        return false;
    }

    if (senha !== confirmarSenha) {
        ("As senhas não coincidem. Por favor, verifique e tente novamente.");
        return false;
    }

    ("Senha válida e confirmada com sucesso!");
    return true;

}

module.exports ={validarSenha, validarFormulario};
*/

function validarSenha(senha) {
    if (!/.{8,}/.test(senha)) {
        return false
    }

    if (!/[A-Z]/.test (senha)) {
        return false
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        return false
    }

    if (!/[0-9]/.test(senha)) {
        return false
    }
    else{
        return true
    }}
    
    function validarFormulario(senha, validarFormulario){
    if (senha === validarFormulario) {
        ("As senhas coincidem!");
        return true;
    } else {
        ("As senhas não coincidem. Tente novamente.");
        return false;
    }
}
    // Atualiza os itens da lista com base nas regras
    Object.keys(regras).forEach(id => {
        const item = document.getElementById(id);
        if (regras[id]) {
            item.classList.add('valid');
            item.classList.remove('invalid');
        } else {
            item.classList.add('invalid');
            item.classList.remove('valid');
        }
    });

     // Atualiza os itens da lista com base nas regras
     Object.keys(regras).forEach(id => {
        const item = document.getElementById(id);
        if (regras[id]) {
            item.classList.add('valid');
            item.classList.remove('invalid');
        } else {
            item.classList.add('invalid');
            item.classList.remove('valid');
        }
    });

    // Verifica se todas as regras são atendidas
    const todasRegrasAtendidas = Object.values(regras).every(Boolean);

    // Atualiza a lista com base em todas as regras
    const listaRegras = document.getElementById('password-rules');
    if (todasRegrasAtendidas) {
        listaRegras.classList.add('all-valid');
    } else {
        listaRegras.classList.remove('all-valid');
    }

    // Verifica se as senhas coincidem
    const passwordMatchMessage = document.getElementById('passwordMatch');
    if (senha !== senhaRepetida) {
        passwordMatchMessage.style.display = 'block';
        passwordMatchMessage.style.color = 'red';
    } else {
        passwordMatchMessage.style.display = 'none';
    }


// Adiciona um evento de input aos campos de senha
document.getElementById('senha').addEventListener('input', validatePassword);
document.getElementById('senhaRepetida').addEventListener('input', validatePassword);

module.exports = { validarSenha, validarFormulario};

