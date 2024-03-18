function salvar_informacoes(event) {
    event.preventDefault();


    const nome = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;

    localStorage.setItem('name', nome);
    localStorage.setItem('idade', idade);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('endereco', endereco);

    window.location.href = "pagina2.html";
}

function salvar_informacoes2(event) {
    event.preventDefault();

    const objetivo = document.getElementById('objetivo').value;


    localStorage.setItem('objetivo', objetivo);

    window.location.href = "pagina3.html"
}

function salvar_informacoes3(event) {
    event.preventDefault();

    const funcao = document.getElementById('funcao').value;
    const empresa = document.getElementById('empresa').value;
    const mes_inicio_profissao = document.getElementById('mes_inicio_profissao').value;
    const ano_inicio_profissao = document.getElementById('ano_inicio_profissao').value;
    const mes_termino_profissao = document.getElementById('mes_termino_profissao').value;
    const ano_termino_profissao = document.getElementById('ano_termino_profissao').value;
    const descricao = document.getElementById('descricao').value;

    localStorage.setItem('funcao', funcao);
    localStorage.setItem('empresa', empresa);
    localStorage.setItem('mes_inicio_profissao', mes_inicio_profissao);
    localStorage.setItem('ano_inicio_profissao', ano_inicio_profissao);
    localStorage.setItem('mes_termino_profissao', mes_termino_profissao);
    localStorage.setItem('ano_termino_profissao', ano_termino_profissao);
    localStorage.setItem('descricao', descricao);

    window.location.href = "pagina4.html"
}

function salvar_informacoes4(event){
    event.preventDefault();

    const competencia = document.getElementById('competencia').value;


    localStorage.setItem('competencia', competencia);

    window.location.href = "pagina5.html"
};


function salvar_informacoes5(event){
    event.preventDefault();

    const mes_inicio_curso = document.getElementById('mes_inicio_curso').value
    const ano_inicio_curso = document.getElementById('ano_inicio_curso').value
    const mes_termino_curso = document.getElementById('mes_termino_curso').value
    const ano_termino_curso = document.getElementById('ano_termino_curso').value
    const idioma = document.getElementById('idioma').value

    localStorage.setItem('mes_inicio_curso', mes_inicio_curso);
    localStorage.setItem('ano_inicio_curso', ano_inicio_curso);
    localStorage.setItem('mes_termino_curso', mes_termino_curso);
    localStorage.setItem('ano_termino_curso', ano_termino_curso);
    localStorage.setItem('idioma', idioma)

    window.location.href = "pagina6.html"
};

function voltar() {
    window.history.back();
};

