function redirectPage(url) {
    window.location.href = url;
}

/*Funcao criar conta*/
let nome_btn = false;
let email_btn = false;
let senha_btn = false;
let senha_confirmar_btn = false;

const nome_user = document.getElementById('nome_user');
const nome_alert = document.getElementById("nome_alert");

nome_user.addEventListener('input', function(event) {
    let name = event.target.value;
    if (name.length >= 4) {
        nome_btn = true;
        nome_alert.style.display = 'none';
    } else {
        nome_btn = false; // Certifique-se de ajustar a lógica do seu botão de acordo com seu requisito
        nome_alert.style.display = 'block';
    }
    ativador_registre_se();
});

const email_registrese = document.getElementById("email");
email_registrese.addEventListener("input", function(event) {
    const email = event.target.value;
    const alert_email_registre_se = document.getElementById("alert_email_registre-se");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        alert_email_registre_se.style.display = 'none';
        email_btn = true;
    } else {
        alert_email_registre_se.style.display = 'block';
        email_btn = false;
    }
    ativador_registre_se();
});

const password = document.getElementById("password");
const caixa_exigencias = document.querySelector('.caixa_exigencia');

password.addEventListener('focus', function() {
    caixa_exigencias.style.display = 'block';
});
password.addEventListener('blur', function() {
    caixa_exigencias.style.display = 'none';
});


password.addEventListener('input', function(event) {
    senha = event.target.value;

    if (/[A-Z]/.test(senha) && /[a-z]/.test(senha)) {
        document.getElementById("password_exigencia_maiuscula").style.color = "#369200";
    } else {
        document.getElementById("password_exigencia_maiuscula").style.color = "#ff0000";
    }

    if (/[0-9]/.test(senha) && senha.length >= 6) {
        document.getElementById("password_exigencia_num").style.color = "#369200";
    } else {
        document.getElementById("password_exigencia_num").style.color = "#ff0000";
    }

    senha_btn = /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[0-9]/.test(senha) && senha.length >= 6;
    ativador_registre_se();
});

const password_confirm = document.getElementById("confirme");
password_confirm.addEventListener("input", function(event) {
    let senha_confirmar = event.target.value;
    if (senha === senha_confirmar) {
        document.getElementById("password_confirm").style.display = 'none';
        senha_confirmar_btn = true;
    } else {
        document.getElementById("password_confirm").style.display = 'block';
        senha_confirmar_btn = false;
    }
    ativador_registre_se();
});

document.addEventListener("DOMContentLoaded", function() {
    ativador_registre_se();
    ativador_conect()
});

const registre_se = document.getElementById("registre_se");

function ativador_registre_se() {
    if (nome_btn && email_btn && senha_btn && senha_confirmar_btn) {
        registre_se.disabled = false;
    } else {
        registre_se.disabled = true;
    }
}
/*FIM Funcao criar conta*/


/*Funcao conectarse*/
let user_conect_btn = false
let password_conect_btn = false

const user_conect = document.getElementById("user_conect");
const alert_user_conect = document.getElementById('alert_user_conect');

user_conect.addEventListener("input", function(event) {
    let email_conect = event.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email_conect)) {
        alert_user_conect.style.display = 'none';
        user_conect_btn = true
    } else {
        alert_user_conect.style.display = 'block';
        user_conect_btn = false
    }
    ativador_conect()
});

const password_conect = document.getElementById("password_conect")

password_conect.addEventListener('input', function(password) {
    let password_controle = password.target.value
    if (password_controle.length >= 6) {
        password_conect_btn = true
    } else {
        password_conect_btn = false
    }
    ativador_conect()
})

const conectar_se = document.getElementById('conectar_se')

conectar_se.addEventListener('click', function() {
    let password_conect_verificar = document.getElementById('password_conect').value
    if (password_conect_verificar === senha) {
        window.location.href = 'index.html';
    } else {
        window.alert('Verifque seu usuario e senha')
    }
})

function ativador_conect() {
    if (user_conect_btn && password_conect_btn) {
        conectar_se.disabled = false;
    } else {
        conectar_se.disabled = true;
    }
}

/*FIMFuncao conectarse*/

let email = localStorage.getItem('email') || '';
let senha = localStorage.getItem('senha') || '';
let usuario = localStorage.getItem('usuario') || '';

registre_se.addEventListener("click", function() {

    senha = document.getElementById('confirme').value;
    email = document.getElementById('email').value;
    usuario = document.getElementById('nome_user').value;

    localStorage.setItem('senha', senha);
    localStorage.setItem('email', email);
    localStorage.setItem('usuario', usuario);
    window.location.href = 'index.html';
});
