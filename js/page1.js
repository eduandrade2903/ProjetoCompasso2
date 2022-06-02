let $ = document.querySelector.bind(document);

// Referência das divs das páginas no DOM
let page1 = $('.page1');
let page2 = $('.page2');
let page3 = $('.page3');

// Referência dos inputs e botões da page1
let nome = $('.nome');
let sobrenome = $('.sobrenome');
let botao = $('.button1');

// Inícia a página mostrando a page1
page2.style.display = 'none';
page3.style.display = 'none';

// Valida os inputs. Usado para mudança de página e salvar dados no localstorage
function validar(){
    if(nome.value && sobrenome.value){
        return true;
    } else {
        return false;
    }
}

// Função para mudar para page2, condicionada a validação
function changePage2(){
    if(validar()){
        page2.style.display = 'block';
        page1.style.display = 'none';
        page3.style.display = 'none';
        console.log(validar());
    }
}

// Salva os dados dos inputs e executa a mudança de página
botao.addEventListener('click', function(){
    let arr = [nome.value, sobrenome.value];
    localStorage.setItem('entrada', JSON.stringify(arr));
    changePage2();
})

// Array com os dados dos inputs da page1
inputs_page1 = [nome, sobrenome];

// Funções que liberam o botão para mudança de páginas e salvam os dados no localstorage
function checkInputs(inputs) {
    var filled = true;
    inputs.forEach(function(input) {
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
            botao.classList.remove('button1_validated');
            botao.classList.add('button1');
          }
        });
      });
}

// Executa a função que libera o botão
buttonAction(inputs_page1);




























