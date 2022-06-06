let buttonResultNext = $('#results-next-button');
let result2 = $('#results-container-certificates');
let result1 = $('#results-container-basic');
let buttonBack = $('#results-back-button');
let newUser = $('#results-new-user-button');



buttonResultNext.addEventListener('click', ()=>{
    result2.classList.remove('hidden');
    result1.classList.add('hidden');
})

buttonBack.addEventListener('click', ()=>{
    result2.classList.add('hidden');
    result1.classList.remove('hidden');
})

newUser.addEventListener('click', ()=>{
    window.location.reload();
})