function salvar_informacoes(event) {
    event.preventDefault(); // Impede o envio do formulário


    var nome = document.getElementById('name').value;
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;

    localStorage.setItem('name', nome);
    localStorage.setItem('idade', idade);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('endereco', endereco);

    window.location.href = "pagina2.html";
}

function salvar_informacoes2(event) {
    event.preventDefault();

    var objetivo = document.getElementById('objetivo').value;
    var experiencia = document.getElementById('experiencia').value;
    var qualificacao_profissional = document.getElementById('qualificacao_profissional').value;
    
    localStorage.setItem('objetivo', objetivo);
    localStorage.setItem('experiencia', experiencia);
    localStorage.setItem('qualificacao_profissional', qualificacao_profissional);

    window.location.href = "pagina3.html"
}

function voltar(){
    window.history.back();
}