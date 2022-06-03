var $ = document.querySelector.bind(document);

let botao = $("#submit");


 // "$1/$2/$3" /
//  "($1)$2-$3" /
$

botao.addEventListener("click",ValidaLink);

function validadoEmail(){
    let email = $("#text");  
    var padraoEmail = /^[\w._-]+@[\w_.-]+\.[\w]/gi;

    var texto = email.value;
        if(padraoEmail.test(texto))
        {
            console.log("Email validado");
        }
        else{
            console.log("Email invalido");
        }
}

function validaNumero(){
    let numero = $("#number")
    
    var padraoTelefone = /^[(]+\d{2}[)]+\d{5}[-]+\d{4}/gi;
    var telefone = numero.value;
      
    
     if(padraoTelefone.test(telefone))
        {
            console.log("Telefone validado");
        }
        else
        {
            console.log("Telefone invalido");
        }  
}
function validaAniversario(){
    let data = $("#date");
    
    var padraoData = /\d{2}[/]+\d{2}[/]\d{4}/gi;
    var d = data.value;
        if(padraoData.test(d))
        {
            console.log("data validado");
        }
        else{
            console.log("data invalido");
        }
        
}
function validaGit(){
    let link = $("#git");

    let padraoGit = /^[https]+:[//]+[a-z]+\.[a-z]+[/]+[a-z0-9]+/gi
    let padrao = link.value;
    if(padraoGit.test(padrao))
    {
        console.log("git valido");
    }
    else{
        console.log("git invalido");
    }

}
function ValidaLink(){
    let link = $("#link");
    
    let padraolink = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]+/gi;
    let padraoLink2 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]+[-]+[0-9]+/gi;
    let padraoLink3 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]/gi
    let padrao = link.value;
    if(padraolink.test(padrao)|| padraoLink2.test(padrao)|| padraoLink3)
    {
        console.log("link valido");
    }
    else{
        console.log("link invalido")
    }
}
   
   
       