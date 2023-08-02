let guardar_Dados = [];

let conter = 0;
var chamar_busca = 0;


let editar = function(){
    let aside_edit = window.document.getElementById('aside_border_lateral_edit');
    let fechar_aside = window.document.getElementById('fechar_edit_aside');

    aside_edit.style.left = '40%';

    fechar_aside.addEventListener('click', fechar_asider_box);

    function fechar_asider_box() {
        aside_edit.style.left = '-100%';
    }
};


function button_click () {
    var Nome = window.document.getElementById('nome').value;
    var Idade = window.document.getElementById('idade').value;
    var Cidade = window.document.getElementById('cidade').value;

    if(Nome !== '' && Idade !== '' && Cidade !== ''){
        
        let pessoa = {
            'nome' : Nome,
            'idade' : Idade,
            'cidade' : Cidade,
            'chamar_edit' : function() {
                let editer = document.createElement('td');
                let img = document.createElement('i');
    
                img.classList.add('bi', 'bi-pencil-fill');
                editer.appendChild(img);

                editer.addEventListener('click', editar);
    
                let enviar_edit = window.document.getElementById('enviar_edit');
    
                let editar_new_value = function() {
                    pessoa.editar_objeto();
                }
    
                enviar_edit.addEventListener('click', editar_new_value);
    
                return editer;
            },
            'editar_objeto' : function(){
                var Nome_edit = window.document.getElementById('nome_edit').value;
                var Idade_edit = window.document.getElementById('idade_edit').value;
                var Cidade_edit = window.document.getElementById('cidade_edit').value;
    
                pessoa.nome = Nome_edit;
                pessoa.idade = Idade_edit;
                pessoa.cidade = Cidade_edit;
    
                tdnome.textContent = Nome_edit;
                tdidade.textContent = Idade_edit;
                tdcidade.textContent = Cidade_edit;
                
                console.log(guardar_Dados)
            }
        }

        guardar_Dados.push(pessoa);

        while(conter < guardar_Dados.length){
            var tabela = window.document.getElementById('tabela_elements');
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
            tr.appendChild(guardar_Dados[conter].chamar_edit())

            tabela.appendChild(tr);

            console.log(guardar_Dados)
            conter++
        }
    }
}
