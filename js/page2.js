let botaomostra = document.querySelector('.button2')

let inputTelefone = $('.telefone');
console.log(inputTelefone);

function changePage3(){
    page2.style.display = 'none';
    page1.style.display = 'none';
    page3.style.display = 'block';
}

botaomostra.addEventListener('click', function(){
    var itens = JSON.parse(localStorage.getItem('entrada'));
    console.log(itens)
})

let botaoSalva = document.querySelector('.salva');
let telefone = $('.telefone');

botaoSalva.addEventListener('click', function(){
    let fone = telefone.value;
    localStorage.setItem('telefone', fone);
    console.log(telefone.value);
})

function checkInput1(input) {
    var filled = true;
    if(input.value === "") {
        filled = false;
    }
    return filled;
}

function buttonAction1(input){   
        input.addEventListener("keyup", function() {
          if(checkInput1(input)) {
            botaomostra.disabled = false;
            botaomostra.classList.remove('button1');
            botaomostra.classList.add('button1_validated');
          } else {
            botaomostra.disabled = true;
            botaomostra.classList.remove('button1_validated');
            botaomostra.classList.add('button1');
          }
        })}

buttonAction1(inputTelefone);

