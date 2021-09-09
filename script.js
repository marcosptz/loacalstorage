var gid, gqtd, gcomp, glarg, gdesc;

// Verifica se o browser tem suporte ao localStorage
if (typeof (Storage) != 'undefined') {
    if (localStorage.status==1) { //verifica se existe dados salvo no localstorage
        document.write('<p>Você possui rascunho não salvo, se desejar restaurar click no botão</p>');
        document.write('<label>Id do usuário: </label><br><input type="text" name="id_user" id="id_user" size="30"><br><br>');
        document.write('<input type="button" value="Restaurar" onclick="exibir()"><br><br>');
        // document.write('<input type="button" value="Exclir" onclick="excluir()"><br><br>');
    } else {
        document.write('<p>Sem rascunhos !</p><br>');
    }
} else {
    document.write('Sem suporte a Web Storage !');
}

// Salvar no localStorage
function salvar(){
    gid = document.getElementById('id').value;
    gqtd = document.getElementById('qtd').value;
    gcomp = document.getElementById('comp').value;
    glarg = document.getElementById('larg').value;
    gdesc = document.getElementById('desc').value;
    
    let dados = [
        {"id":gid, "qtd":gqtd, "comp":gcomp, "larg":glarg, "desc":gdesc}
    ]

    dados_json=JSON.stringify(dados)
    localStorage.setItem('dados_'+gid, dados_json);
    localStorage.status=1
}

// Exibe os valores no formulario
function exibir(){
    var nid = document.getElementById('id_user').value;
    if(nid) {
        var msg = document.getElementById('msg');
        // msg.style.color='red';
        msg.textContent='Id não encontrado !';
        msg.className ='alert alert-danger col-sm-6';
    }

    if(nid == '') {
        var msg = document.getElementById('msg');
        // msg.style.color='red';
        msg.textContent='Digite um id válido !';
        msg.className ='alert alert-danger col-sm-6';
    }
    var obj2 = JSON.parse(localStorage.getItem('dados_'+nid));
    // console.log('Id: ' + nid);
    console.log(obj2[0]);
    
    var id = document.getElementById('id');
    id.value=obj2[0].id;
    var qtd = document.getElementById('qtd');
    qtd.value=obj2[0].qtd;
    var comp = document.getElementById('comp');
    comp.value=obj2[0].comp;
    var larg = document.getElementById('larg');
    larg.value=obj2[0].larg;
    var desc = document.getElementById('desc');
    desc.value=obj2[0].desc;
}

function excluir(){
    var nid = document.getElementById('id_user').value;
    localStorage.removeItem('dados_'+nid);
    localStorage.status=0;
}