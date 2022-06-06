let $ = document.querySelector.bind(document);

// Referência das divs das páginas no DOM
let page1 = $('#basic-page');
let page2 = $('#social-page');
let page3 = $('#certificates-page');
let pageResult = $('#results-page');

// Referência dos inputs e botões da page1
let fullName = $('#input-name');
let nickName = $('#input-nickname');
let email = $('#input-email');
let phone = $('#input-tel');
let birthDay = $('#selection-days');
let birthMonth = $('#selection-months');
let birthYear = $('#selection-years');
let age = $('#text-age-result');
let check = $('#check-terms');
let botao = $('#basic-next-button');
let botaoClicked = false;
let page2Permited = false;
let page3Permited = false;
let navSocial = $('#item-social');

// Inícia a página mostrando a page1

page2.classList.add('hidden');
page3.classList.add('hidden');
pageResult.classList.add('hidden');

(function(){
           
    let start_year = 2010;
    let html = '<option value="">-</option>';
    for (let i = start_year; i > start_year - 61; i--) {
    html += '<option value="'+i+'">'+i+'</option>';
    }
    document.getElementById("selection-years").innerHTML = html;
})();
(function(){
    let start_month = 1;
    let html ='<option value="">-</option>';
    for (let i = start_month; i < start_month + 12; i++) {
    html += '<option value="'+i+'">'+i+'</option>';
    }
    console.log(html);
    document.getElementById("selection-months").innerHTML = html;
})();
(function(){
    let start_day = 1;
    let html ='<option value="">-</option>';
    for (let i = start_day; i < start_day + 31; i++) {
    html += '<option value="'+i+'">'+i+'</option>';
    }
    console.log(html);
    document.getElementById("selection-days").innerHTML = html;
})();

// Validação Nome

let errorName = $('#error-name');
let ierrorName = $('#ierror-name');

function validaNome(){
    var padraoNome = /^[a-zA-Z\u00C0-\u00FF ]*$/gi;
    let nome = fullName.value;
    let valNome = padraoNome.test(nome);

    if(fullName.value && valNome){
        fullName.classList.remove('input-error');
        errorName.classList.remove('message-error');
        ierrorName.classList.remove('icon-error');
        return true;
    } else {
        fullName.classList.add('input-error');
        errorName.classList.add('message-error');
        ierrorName.classList.add('icon-error');
        return false;
    }
}

fullName.addEventListener('keyup', ()=>{
    if(email.value && birthDay.value && birthMonth.value && birthYear.value && check.checked && fullName.value){
        botao.classList.remove('empty-data');
    }else{
        botao.classList.add('empty-data');
        console.log('vazio');
    }
    validaNome();
});

// Validação Email

let errorEmail = $('#error-email');
let ierrorEmail = $('#ierror-email');

function validadoEmail(){
    var padraoEmail = /^[\w._-]+@[\w_.-]+\.[\w]/gi;
    var texto = email.value;
    let valida= padraoEmail.test(texto);
    console.log(valida + '@@');
    if(valida && email.value){
        email.classList.remove('input-error');
        errorEmail.classList.remove('message-error');
        ierrorEmail.classList.remove('icon-error');
        return true;
    } else {
        email.classList.add('input-error');
        errorEmail.classList.add('message-error');
        ierrorEmail.classList.add('icon-error');
    }
} 

email.addEventListener("keyup", ()=>{
    if(email.value && birthDay.value && birthMonth.value && birthYear.value && check.checked && fullName.value){
        botao.classList.remove('empty-data');
    }else{
        botao.classList.add('empty-data');
    }
    validadoEmail();
});

// Validação Telefone

let errorPhone = $('#error-phone');
let ierrorPhone = $('#ierror-phone');

function validaNumero(){    
    var padraoTelefone = /^[(]+\d{2}[) ]+\d{4}[-]+\d{4,5}$/gi;
    var telefone = phone.value;
    if(padraoTelefone.test(telefone) || telefone ==''){
        phone.classList.remove('input-error');
        errorPhone.classList.remove('message-error');
        ierrorPhone.classList.remove('icon-error');
        return true;
    } else {
        phone.classList.add('input-error');
        errorPhone.classList.add('message-error');
        ierrorPhone.classList.add('icon-error');
        return false;
    }
}

phone.addEventListener("keyup", ()=>{
    validaNumero();
});

phone.addEventListener("keypress", function(){
    let inputLength = phone.value.length;
    console.log(inputLength);

    if(inputLength == 0 )
    {
        phone.value += "("
    }else
    if(inputLength ==3 ){
        phone.value += ") "
    }else if(inputLength == 9)
    {
        phone.value += "-"
    }
});

// Validação Data de Nascimento

function validaBirthDay(){
    if(birthDay.value){
        birthDay.style.border = '';
        return true;
    } else {
        birthDay.style.border = '2px solid red';
        return false;
    }
}

birthDay.addEventListener("click", ()=>{
    if(email.value && birthDay.value && birthMonth.value && birthYear.value && check.checked && fullName.value){
        botao.classList.remove('empty-data');
    }else{
        botao.classList.add('empty-data');
    }
    validaBirthDay();
});

function validaBirthMonth(){
    if(birthMonth.value){
        birthMonth.style.border = '';
        return true;
    } else {
        birthMonth.style.border = '2px solid red';
        return false;
    }
}

birthMonth.addEventListener("click", ()=>{
    if(email.value && birthDay.value && birthMonth.value && birthYear.value && check.checked && fullName.value){
        botao.classList.remove('empty-data');
    }else{
        botao.classList.add('empty-data');
    }

    validaBirthMonth();
});

function validaBirthYear(){
    if(birthYear.value){
        birthYear.style.border = '';
    } else {
        birthYear.style.border = '2px solid red';
    }
}

birthYear.addEventListener("click", ()=>{
    if(email.value && birthDay.value && birthMonth.value && birthYear.value && check.checked && fullName.value){
        botao.classList.remove('empty-data');
    }else{
        botao.classList.add('empty-data');
    }
    validaBirthYear();
});

check.addEventListener('click', () => {
    if(email.value && birthDay.value && birthMonth.value && birthYear.value && check.checked && fullName.value){
        botao.classList.remove('empty-data');
    }else{
        botao.classList.add('empty-data');
    }
})

// Valida os inputs. Usado para mudança de página e salvar dados no localstorage

function validar(){
    if(validaNome() && validaNumero() && validadoEmail() && birthDay.value && birthMonth.value && birthYear.value && check.checked){
        return true;
    }
}

function changePage2(validar){
    if(validar){
        let basicData = [fullName.value, nickName.value, email.value, phone.value, birthDay.value, birthMonth.value, birthYear.value, age.textContent];
        localStorage.setItem('basicData', JSON.stringify(basicData));
        page2.classList.remove('hidden');
        page1.classList.add('hidden');
        page3.classList.add('hidden');
        page2Permited = true;
        var arr = JSON.parse(localStorage.getItem('basicData'));
        console.log(arr);
    } else {
        page2Permited = false;
    }
}


navSocial.addEventListener('click', () => {
    changePage2(validar());
})


function idade() {
    let hoje = new Date();

    if(birthYear.value && birthMonth.value && birthDay.value){
        let nascimento = new Date(birthYear.value, (birthMonth.value - 1), birthDay.value);    
        let diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
        if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
             new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) )
            diferencaAnos--;
            return diferencaAnos;
    } else{
        return "";
    }
    
}

birthYear.addEventListener('click', function(event){
    idade();
    let spamAge = $('#text-age-result');
    spamAge.textContent = idade();
});

birthMonth.addEventListener('click', function(event){
    idade();
    let spamAge = $('#text-age-result');
    spamAge.textContent = idade();
});

birthDay.addEventListener('click', function(event){
    idade();
    let spamAge = $('#text-age-result');
    spamAge.textContent = idade();
});

// Função para mudar para page2, condicionada a validação

// Salva os dados dos inputs e executa a mudança de página
botao.addEventListener('click', function(event){
    event.preventDefault();
    validadoEmail();
    validaNumero();
    changePage2(validar());
    validaBirthDay();
    validaBirthMonth();
    validaBirthYear();
    botaoClicked = true;
})

































