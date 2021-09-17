var gid, gqtd, gcomp, glarg, gdesc;

// Verifica se o browser tem suporte ao localStorage
if (typeof (Storage) != 'undefined') {
    if (localStorage.status==1) { //verifica se existe dados salvo no localstorage
        document.write('<p>Você possui rascunho não salvo, se desejar restaurar click no botão</p>');
        document.write('<label>Id do usuário: </label><br><input type="text" name="id_user" id="id_user" size="30"><br><br>');
        document.write('<input type="button" value="Restaurar" onclick="exibir()">');
        document.write('<input type="button" value="Exclir" onclick="excluir()"><br><br>');
    } else {
        document.write('<p>Sem rascunhos !</p><br>');
    }
} else {
    document.write('Sem suporte a Web Storage !');
}

// Salvar no localStorage
function salvar(){
    // gid = document.getElementById('id').value;
    // gqtd = document.getElementById('qtd').value;
    // gcomp = document.getElementById('comp').value;
    // glarg = document.getElementById('larg').value;
    // gdesc = document.getElementById('desc').value;

    gid = document.querySelector('input[name="id"]').value;
    gqtd = document.querySelector('input[name="qtd"]').value;
    gcomp = document.querySelector('input[name="comp"]').value;
    glarg = document.querySelector('input[name="larg"]').value;
    gdesc = document.querySelector('input[name="desc"]').value;
    
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
    // if(!nid) {
    //     var msg = document.getElementById('msg');
    //     // msg.style.color='red';
    //     msg.textContent='Id não encontrado !';
    //     msg.className ='alert alert-danger col-sm-6';
    // }

    // if(nid == '') {
    //     var msg = document.getElementById('msg');
    //     // msg.style.color='red';
    //     msg.textContent='Digite um id válido !';
    //     msg.className ='alert alert-danger col-sm-6';
    // }
    
    var obj2 = JSON.parse(localStorage.getItem('dados_'+nid));

    if(obj2){
        // console.log('Id: ' + nid);
        console.log(obj2[0]);
        
        var id = document.querySelector('input[name="id"]');
        id.value=obj2[0].id;
        var qtd = document.querySelector('input[name="qtd"]');
        qtd.value=obj2[0].qtd;
        var comp = document.querySelector('input[name="comp"]');
        comp.value=obj2[0].comp;
        var larg = document.querySelector('input[name="larg"]');
        larg.value=obj2[0].larg;
        var desc = document.querySelector('input[name="desc"]');
        desc.value=obj2[0].desc;

    } else{
        var nid = document.querySelector('input[name="id_user"]').value;
        
        if(nid == '') {
            var msg = document.getElementById('msg');
            // msg.style.color='red';
            msg.textContent='Digite um id válido !';
            msg.className ='alert alert-danger col-sm-6';
        } else {
            var msg = document.getElementById('msg');
            // msg.style.color='red';
            msg.textContent='Id não encontrado !';
            msg.className ='alert alert-danger col-sm-6';
        }
    }
    
}

function excluir(){
    var nid = document.querySelector('input[name="id_user"]').value;
    if(nid){
        localStorage.removeItem('dados_'+nid);
        localStorage.status=0
    } else {
        var nidd = document.querySelector('input[name="id"]').value;
        localStorage.removeItem('dados_'+nidd);
        localStorage.status=0
    }
}

function func_teste(){
    // var n = document.getElementsByTagName("teste").value;
    // var t1 = document.querySelector('input[name="teste"]').value;
    // var texto = t1.value;
    // console.log(t1);
    // const campo = $(".lb").val()
    // var n = $(this).val($(this).attr("placeholder")).val()
    // console.log(campo)

    
    // var els = $("[name=test]");
    // console.log(els);

    // alert($("[name=teste]").attr("value"))
    
}

$(document).on('click', 'btnTeste', function() {
    if ($(element).hasClass('any_class')) {
        console.log('nao')
    } else {
        console.log('sim')
    }
})

$(document).on('focusout', '.salvar-valor', function(){
    const value = $(this).val()
    const name = $(this).prop('name')
    const classe = 'peca'
    // const nome = name.split('[]')
    localStorage.setItem(nome, value)
    // const obj = localStorage.getItem(nome);
    // console.log(classe, obj)
    // const id_user = "<?=$_SESSION['id']>"
    // const dados = [{classe}, {value}]
    // console.log(dados)
    // dados_json=JSON.stringify(dados)
    // localStorage.setItem('dados', dados_json)
    const json = {
        peca: [{}]
    }

    json[classe][0][name] = value
    console.log(json['peca'][0][name])
    dados_json=JSON.stringify(json)
    localStorage.setItem('dados', dados_json)
    console.log(value, name)
    
})

