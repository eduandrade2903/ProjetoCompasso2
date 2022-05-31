let $ = document.querySelector.bind(document);

let display = $('.container');
let page1 = $('.page1');
let page2 = $('.page2');
let page3 = $('.page3');

page2.style.display = 'none';
page3.style.display = 'none';

let nome = $('.nome');
let sobrenome = $('.sobrenome');
let botao = $('.button1');

function validar(){
    if(nome.value && sobrenome.value){
        return true;
    } else {
        return false;
    }
}

function changePage2(){
    if(validar()){
        page2.style.display = 'block';
        page1.style.display = 'none';
        page3.style.display = 'none';
        console.log(validar());
    }
}

function changePage3(){
    page2.style.display = 'none';
    page1.style.display = 'none';
    page3.style.display = 'block';
}

inputs_page1 = [nome, sobrenome];

function checkInputs(inputs) {
    var filled = true;
    inputs.forEach(function(input) {
    console.log(input.value)

    if(input.value === "") {
        filled = false;
    }
    });
    return filled;
}

function buttonAction(inputs){
    inputs.forEach(function(input) {      
        input.addEventListener("keyup", function() {
          if(checkInputs(inputs)) {
            botao.disabled = false;
            botao.classList.remove('button1');
            botao.classList.add('button1_validated');
          } else {
            botao.disabled = true;
          }
        });
      });
}

buttonAction(inputs_page1);














