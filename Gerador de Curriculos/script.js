function salvar_informacoes(event) {
    event.preventDefault(); // Impede o envio do formulário


    let nome = document.getElementById('name').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;

    localStorage.setItem('name', nome);
    localStorage.setItem('idade', idade);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('endereco', endereco);

    window.location.href = "pagina2.html";
}

function salvar_informacoes2(event) {
    event.preventDefault();

    let objetivo = document.getElementById('objetivo').value;


    localStorage.setItem('objetivo', objetivo);

    window.location.href = "pagina3.html"
}

function salvar_informacoes3(event) {
    event.preventDefault();

    let funcao = document.getElementById('funcao').value;
    let empresa = document.getElementById('empresa').value;
    let mes_inicio = document.getElementById('mes_inicio').value;
    let ano_inicio = document.getElementById('ano_inicio').value;
    let mes_termino = document.getElementById('mes_termino').value;
    let ano_termino = document.getElementById('ano_termino').value;
    let descricao = document.getElementById('descricao').value;

    localStorage.setItem('funcao', funcao);
    localStorage.setItem('empresa', empresa);
    localStorage.setItem('mes_inicio', mes_inicio);
    localStorage.setItem('ano_inicio', ano_inicio);
    localStorage.setItem('mes_termino', mes_termino);
    localStorage.setItem('ano_termino', ano_termino);
    localStorage.setItem('descricao', descricao);

    window.location.href = "pagina4.html"
}

// Tentando fazer a barrinha que retorna o nível da competência //

const nivelOutput = document.getElementById('nivel-output_qualificacao');
const descricao = document.getElementById('descricao');
const nivelDescricao = document.getElementById('nivel-descricao');

const niveis = {
    1: 'Iniciante',
    2: 'Intermediário',
    3: 'Bom',
    4: 'Muito bom',
    5: 'Excelente',
};

document.getElementById('nivel_qualificacao').addEventListener('input', function () {
    const nivel_qualificacao = this.value;
    nivelOutput.textContent = niveis[nivel_qualificacao];
    descricao.value = niveis[nivel_qualificacao]
});

// fim da tentativa //

function salvar_informacoes4(event){
    event.preventDefault();

    let qualificacao_profissional = document.getElementById('qualificacao_profissional').value;
    let nivel_qualificacao = document.getElementById('nivel_qualificacao').value;
   
   localStorage.setItem('qualificacao_profissional', qualificacao_profissional);
   localStorage.setItem('nivel_qualificacao', nivel_qualificacao);

   window.location.href = "pagina5.html"
}


function voltar() {
    window.history.back();
}