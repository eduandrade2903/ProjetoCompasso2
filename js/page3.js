let tabela = document.querySelector('.tabela-body');
let tabela2 = document.querySelector('.tabela-body2');


let botao3 = document.querySelector('.botao3');

botao3.addEventListener('click', function(){
    let itens = JSON.parse(localStorage.getItem('entrada'));
    let linha = document.createElement('tr');

    itens.forEach(function(item){
        let celula = document.createElement('td');
        celula.textContent = item;
        linha.appendChild(celula);
    });

    tabela.appendChild(linha);

    let fo = localStorage.getItem('telefone');
    let linha2 = document.createElement('tr');
    let celula2 = document.createElement('td');
    celula2.textContent = fo;
    linha2.appendChild(celula2);
    tabela2.appendChild(linha2)
    
    
});


