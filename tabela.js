let guardar_Dados = [];

let conter = 0;
var chamar_busca = 0;

var button_click = function() {
    var nome = window.document.getElementById('nome').value;
    var idade = window.document.getElementById('idade').value;
    var cidade = window.document.getElementById('cidade').value;

    let pessoa = {
        'nome' : nome,
        'idade' : idade,
        'cidade' : cidade,
        'edit' : function() {
            var edit = document.createElement('td');
            var img = document.createElement('i');
            img.classList.add('bi', 'bi-pencil-fill');

            edit.appendChild(img);

            return edit;
        }
    }
    
    if(pessoa.nome !== '' && pessoa.idade !== ''){
        guardar_Dados.push(pessoa);

        var tabela = window.document.getElementById('tabela_elements');

        var tr = document.createElement('tr');


        while(conter < guardar_Dados.length){
            var tr = document.createElement('tr');
                    /*CreatElement serve para criar um elemento tipo, crie um tr de html*/
            var tdnome = document.createElement('td');
            tdnome.textContent = guardar_Dados[conter].nome;  /*Vai pegar todos o elementos que esta dentro do array[0] vai pegar e mostrar o nome do objeto dentro desse array*/

            var tdidade = document.createElement('td');
            tdidade.textContent = guardar_Dados[conter].idade;

            var tdcidade = document.createElement('td');
            tdcidade.textContent = guardar_Dados[conter].cidade;



            tr.appendChild(tdnome);     /*Vai adicionar o elemento filho no pai*/
            tr.appendChild(tdidade);
            tr.appendChild(tdcidade);
            tr.appendChild(pessoa.edit());

            tabela.appendChild(tr);
            console.log(guardar_Dados)

            conter++

        }
    }else{
        alert('preencha o formulario!!!')
    }
}

button_click();