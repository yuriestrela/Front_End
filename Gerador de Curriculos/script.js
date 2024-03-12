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

function salvar_informacoes4(event){
    event.preventDefault();

    let competencia = document.getElementById('competencia').value;


    localStorage.setItem('competencia', competencia);

    window.location.href = "pagina5.html"
};

function salvar_informacoes5(event){
    event.preventDefault();

    document.addEventListener('DOMContentLoaded', function() {
        const nivelOutput = document.getElementById('nivel-output_idioma');
        const nivelDescricao = document.getElementById('nivel-descricao');
    
        const niveis = {
            0: 'Escolha uma opção',
            1: 'Iniciante',
            2: 'Básico',
            3: 'Pré Intermediário',
            4: 'Intermediário',
            5: 'Avançado',
            6: 'Fluente'
        };
    
        document.getElementById('nivel_idioma').addEventListener('input', function () {
            const nivel_idioma = this.value;
            nivelOutput.textContent = niveis[nivel_idioma];
            nivelDescricao.textContent = niveis[nivel_idioma]; 
        });
     
        // Valor que inicia
    
        document.getElementById('nivel_qualificacao').value = 0;
        nivelOutput.textContent = niveis[0];
    });

}

function voltar() {
    window.history.back();
}

