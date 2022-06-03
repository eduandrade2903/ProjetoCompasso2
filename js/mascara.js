let $ = document.querySelector.bind(document);


    let input = $("#date");
    input.addEventListener("keypress", function()  {
    let inputLength = input.value.length;
    console.log(inputLength);


    if(inputLength == 2 || inputLength == 5){
        input.value += "/"
    }
})



    let inputNumber = $("#number")
    inputNumber.addEventListener("keypress", function(){
    let inputLength = inputNumber.value.length;
    console.log(inputLength);

    if(inputLength == 0 )
    {
        inputNumber.value += "("
    }else
    if(inputLength ==3 ){
        inputNumber.value += ")"
    }else if(inputLength == 9)
    {
        inputNumber.value += "-"
    }
})
