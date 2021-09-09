var gqtd, gcomp, glarg, gdesc;

// Verifica se o browser tem suporte ao localStorage
if (typeof (Storage) != 'undefined') {
    document.write('Suporte a Web Storage Ativo !');
} else {
    document.write('Sem suporte a Web Storage !');
}

// Salvar no localStorage
function salvar(){
    gqtd = document.getElementById('qtd').value;
    gcomp = document.getElementById('comp').value;
    glarg = document.getElementById('larg').value;
    gdesc = document.getElementById('desc').value;
    localStorage.qtd=gqtd;
    localStorage.comp=gcomp;
    localStorage.larg=glarg;
    localStorage.desc=gdesc;
}

// Exibe os valores no formulario
function exibir(){
    var qtd = document.getElementById('qtd');
    qtd.value=localStorage.qtd;
    var comp = document.getElementById('comp');
    comp.value=localStorage.comp;
    var larg = document.getElementById('larg');
    larg.value=localStorage.larg;
    var desc = document.getElementById('desc');
    desc.value=localStorage.desc;
}