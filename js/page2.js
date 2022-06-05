let navBasic = $('#item-basic');
let nextButtonPage2 = $('#next-button-page2');
let inputLinkedln = $('#input-linkedin');
let ierrorLinkedin = $('#ierror-linkedin');
let errorLinkedin = $('#error-linkedin');
let inputGit = $('#input-github');
let ierrorGit = $('#ierror-git');
let errorGit = $('#error-github');
let navCertificates = $('#item-certificates');

inputLinkedln.classList.remove('input-error');
ierrorLinkedin.classList.remove('icon-error');
errorLinkedin.classList.remove('message-error');

inputGit.classList.remove('input-error');
ierrorGit.classList.remove('icon-error');
errorGit.classList.remove('message-error');

function changePage1(){
  page2.style.display = 'none';
  page1.style.display = 'block';
  page3.style.display = 'none';
}

navBasic.addEventListener('click',function(){
  changePage1();
})

function changePage3(valida){
    if(valida){
      page2.style.display = 'none';
      page1.style.display = 'none';
      page3.style.display = 'block';
    }

}

nextButtonPage2.addEventListener('click',function(event){
  event.preventDefault();
  changePage3(validaPage2());
})

function validaGit(){
  let padraoGit = /^[https]+:[//]+[a-z]+\.[a-z]+[/]+[A-Za-z0-9]/gi
  let linkGit = inputGit.value;
  if(padraoGit.test(linkGit) && linkGit){
    inputGit.classList.remove('input-error');
    ierrorGit.classList.remove('icon-error');
    errorGit.classList.remove('message-error');
    return true;
  }else{
    inputGit.classList.add('input-error');
    ierrorGit.classList.add('icon-error');
    errorGit.classList.add('message-error');
    return false;
  }
}

inputGit.addEventListener('keyup', ()=>{
  validaGit();
})

function validaLink(){    
    let padraolink = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]/gi;
    let padraoLink2 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]+[-]+[0-9]/gi;
    let padraoLink3 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]/gi
    let padrao = inputLinkedln.value;
    console.log(padrao);
    if(padraolink.test(padrao)|| padraoLink2.test(padrao)|| padraoLink3.test(padrao)){
      console.log('assou')
      inputLinkedln.classList.remove('input-error');
      ierrorLinkedin.classList.remove('icon-error');
      errorLinkedin.classList.remove('message-error');
      return true;
    }else{
      inputLinkedln.classList.add('input-error');
      ierrorLinkedin.classList.add('icon-error');
      errorLinkedin.classList.add('message-error');
      return false;
    }
}

inputLinkedln.addEventListener('keyup', ()=>{
  console.log('hahaha')
  validaLink();
})

function validaPage2(){
  if(validaGit() && validaLink()){
    let socialData = [inputLinkedln.value, inputGit.value];
    localStorage.setItem('socialData', JSON.stringify(socialData));
    page3Permited = true;
    return true;
  } else{    
    page3Permited = false;
    return false;
  }
}

navCertificates.addEventListener('click', ()=>{
  changePage3(validaPage2());
});






/*
botaomostra.addEventListener('click', function(){
    var itens = JSON.parse(localStorage.getItem('entrada'));
    console.log(itens)
}) */

/*
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

*/