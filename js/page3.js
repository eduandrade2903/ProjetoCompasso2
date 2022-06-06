let navSocialPage3 = $('#item-social-page3');
let inputCertificate = $('#input-certificate');
let inputTeamName = $('#input-team-name');
let inputInstitution = $('#input-institution');
let inputGraduation = $('#input-graduation');
let buttonMore = $('#more-certificate-btn');
let buttonFinish = $('#finish-button');
let coracaoPreto = $('#inactive-heart-icon');
let coracaoAzul = $('#active-heart-icon');
let errorLimiter = $('#error-limiter-certificate');
let errorLimiterClose = $('#close-error-limiter');
let certificateContainer = $('.certificate-container');
let errorCertificate = $('#error-certificate');
let errorTeamName = $('#error-team-name');
let errorInstituiton = $('#error-institution');
let errorGraduation = $('#error-graduation');


let ierrorCertificate = $('#ierror-certificate');
let ierrorTeamName = $('#ierror-team-name');
let ierrorInstituiton = $('#ierror-institution');
let ierrorGraduation = $('#ierror-graduation');

let certificados = [];

let certificadoFavorito = false;

function returnPage2(){
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
    page3.classList.add('hidden');
}

navSocialPage3.addEventListener('click', () => {
    returnPage2();
});

coracaoPreto.addEventListener('click', () => {
    if (!certificadoFavorito){
        coracaoPreto.classList.add('hidden');
        coracaoAzul.classList.remove('hidden');        
        certificadoFavorito = true;
        console.log("favorito");
    }
});

coracaoAzul.addEventListener('click', () => {
    if (certificadoFavorito){
        coracaoPreto.classList.remove('hidden');
        coracaoAzul.classList.add('hidden');        
        certificadoFavorito = false;
        console.log("desfavorito");
    }
});


function validaLinkCertificate(){    
    let padraolink = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]/gi;
    let padraoLink2 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]+[-]+[0-9]/gi;
    let padraoLink3 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]/gi
    let padrao = inputCertificate.value;
    console.log(padrao);
    if(padraolink.test(padrao)|| padraoLink2.test(padrao)|| padraoLink3.test(padrao)){
      errorCertificate.classList.remove('message-error');
      inputCertificate.classList.remove('input-error');
      ierrorCertificate.classList.remove('icon-error');
      return true;
    }else{
      errorCertificate.classList.add('message-error');
      inputCertificate.classList.add('input-error');
      ierrorCertificate.classList.add('icon-error');
      return false;
    }
}

// Adicionar vertificado

inputCertificate.addEventListener('keyup', () => {
    validaLinkCertificate();
})

buttonMore.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(certificados.length < 5){

        
        if(validaLinkCertificate()){

            if(certificadoFavorito){
                certificados.unshift(inputCertificate.value);
                certificadoFavorito = false;
                coracaoPreto.classList.remove('hidden');
                coracaoAzul.classList.add('hidden');
                inputCertificate.value = '';
    
            } else {
                certificados.push(inputCertificate.value);
                inputCertificate.value = ''; 
            }
        } else{
            inputCertificate.value = ''; 
        }

        /*
        let div = document.createElement('div');
        div.classList.add('more-input-certificate');
        certificateContainer.appendChild(div);
        */
       
    }else{
        errorLimiter.classList.add('message-error-limiter');
    }
    } 
);

errorLimiterClose.addEventListener('click', ()=>{
    errorLimiter.classList.remove('message-error-limiter');
});

function validaLinkTeam(){    
    let padraolink = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]/gi;
    let padraoLink2 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]+[-]+[a-z]+[-]+[0-9]/gi;
    let padraoLink3 = /^[https]+:[//]+[www]+\.linkedin\.+[a-z]+[/]+in[/]+[a-z]/gi
    let padrao = inputTeamName.value;
    console.log(padrao);
    if(padraolink.test(padrao)|| padraoLink2.test(padrao)|| padraoLink3.test(padrao)){
      errorTeamName.classList.remove('message-error');
      inputTeamName.classList.remove('input-error');
      ierrorTeamName.classList.remove('icon-error');
      return true;
    }else{
      errorTeamName.classList.add('message-error');
      inputTeamName.classList.add('input-error');
      ierrorTeamName.classList.add('icon-error');
      return false;
    }
}

// Finalizar

let team = [];

inputTeamName.addEventListener('keyup', () => {
    validaLinkTeam();
})

function validaInstition(){
    if(inputInstitution.value == ''){
        errorInstituiton.classList.add('message-error');
        inputInstitution.classList.add('input-error');
        ierrorInstituiton.classList.add('icon-error');
        return false;
    } else{
        errorInstituiton.classList.remove('message-error');
        inputInstitution.classList.remove('input-error');
        ierrorInstituiton.classList.remove('icon-error');
        return true;
    }
}

inputInstitution.addEventListener('keyup', () => {
    validaInstition()
})

function validaGraduation(){
    if(inputGraduation.value == ''){
        errorGraduation.classList.add('message-error');
        inputGraduation.classList.add('input-error');
        ierrorGraduation.classList.add('icon-error');
        return false;
    } else{
        errorGraduation.classList.remove('message-error');
        inputGraduation.classList.remove('input-error');
        ierrorGraduation.classList.remove('icon-error');
        return true;
    }
}

inputGraduation.addEventListener('keyup', ()=>{
   validaGraduation();
})

inputTeamName.addEventListener('keyup', () => {
    validaLinkTeam();
})

function changePageResults(){
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page3.classList.add('hidden');
    pageResult.classList.remove('hidden');
}

let resultFullName = $('#result-full-name');
let resultNickname = $('#result-nickname');
let resultEmail = $('#result-email');
let resultPhone = $('#result-phone');
let resultAge = $('#result-age');
let resultLinkedin = $('#result-linkedin');
let resultGit = $('#result-github');
let resultCertificates = $('#result-certificate');
let resultTeam = $('#result-team');
let resultInstitution = $('#result-intitution');
let resultGraduation = $('#result-graduation');


buttonFinish.addEventListener('click', (event) => {
    event.preventDefault();

        let validains = validaInstition();
        let validalink = validaLinkTeam();
        let validagrad = validaGraduation();
        let validacert = certificados.length;

        if( validains && validalink && validagrad && validacert){
            team.push(inputTeamName.value, inputInstitution.value, inputGraduation.value);
            localStorage.setItem('certificatesData', JSON.stringify(certificados));
            localStorage.setItem('teamData', JSON.stringify(team));
    
            var arrBasic = JSON.parse(localStorage.getItem('basicData'));
            console.log(arrBasic);
            var arrSocial = JSON.parse(localStorage.getItem('socialData'));
            console.log(arrSocial);
            var arrCertificates = JSON.parse(localStorage.getItem('certificatesData'));
            console.log(arrCertificates);
            var arrTeam = JSON.parse(localStorage.getItem('teamData'));
            console.log(arrTeam);

            resultFullName.textContent = arrBasic[0];
            resultNickname.textContent = arrBasic[1];
            resultEmail.textContent = arrBasic[2];
            resultPhone.textContent = arrBasic[3];
            resultAge.textContent = arrBasic[7];
            resultLinkedin.textContent = arrSocial[1];
            resultGit.textContent = arrSocial[0];
            resultTeam.textContent = arrTeam[0];
            resultInstitution.textContent = arrTeam[1];
            resultGraduation.textContent = arrTeam[2];

            arrCertificates.forEach((certificado) => {
                let c = document.createElement('span');
                c.textContent = certificado + '\n';
                resultCertificates.appendChild(c);
            }

            );

            changePageResults();
            
        }else {
            console.log('Faltam dados');
        }
    
})





