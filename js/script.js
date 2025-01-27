
// Global var

var blob;
var nome;
var nomeArquivo;
var textoArquivo;
var extensaoArquivo;
const btnGerarArquivo = document.querySelector('#gerarArquivo');

// Main Function

function gerarArquivo() {
    nomeArquivo = document.querySelector('#nome').value;
    textoArquivo = document.querySelector('#texto').value;
    extensaoArquivo = document.querySelector('#extensao').value;

    blob = new Blob([textoArquivo], {
        type: 'text/plain; charset=utf-8'
    });

    if (nomeArquivo === '') {
        nome = `ChuckSteel]_arquivo_equivoco.${extensaoArquivo}`;
    } else {
        nome = `[ChuckSteel]_${nomeArquivo}.${extensaoArquivo}`;
    }

    saveAs(blob, nome);
}

// Call Main Function

btnGerarArquivo.addEventListener('click', gerarArquivo);
