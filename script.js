function josefa(){
    fernanda.value = parseInt(aram1.value) + parseInt(aram2.value);
}
function subtrair(){
    fernanda.value = parseInt(aram1.value) - parseInt(aram2.value);
}
function multiplicacao(){
    fernanda.value = parseInt(aram1.value) * parseInt(aram2.value);
}
function divisao(){
    if(aram2.value == 0)
        alert("coloque algo!");
    else{
        fernanda.value = parseInt(aram1.value) / parseInt(aram2.value);
    }
}

function equacao1grau(){
    var resposta = x.value;
    var caculo = -b.value/a.value;

    if(a.value == 0){
        alert("A deve ser diferente de 0");
    }
    else{
        if(calculo == reposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
    }
}
function equacao1grau2(){
    var resposta = x2.value;
    var caculo = -b2.value/a2.value;

    if(a2.value == 0){
        alert("A deve ser diferente de 0");
    }
    else{
        if(calculo == reposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
    }
}
function equacao1grau3(){
    var resposta = x3.value;
    var caculo = -b3.value/a3.value;

    if(a3.value == 0){
        alert("A deve ser diferente de 0");
    }
    else{
        if(calculo == reposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
    }
}




function funcaoresposta(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno").textContent = "acertou";
        }
        else{
            document.getElementById("retorno").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta2(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta2"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno2").textContent = "acertou";
        }
        else{
            document.getElementById("retorno2").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta3(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta3"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno3").textContent = "acertou";
        }
        else{
            document.getElementById("retorno3").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta4(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta4"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno4").textContent = "acertou";
        }
        else{
            document.getElementById("retorno4").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta5(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta5"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno5").textContent = "acertou";
        }
        else{
            document.getElementById("retorno5").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta6(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta6"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno6").textContent = "acertou";
        }
        else{
            document.getElementById("retorno6").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta7(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta7"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno7").textContent = "acertou";
        }
        else{
            document.getElementById("retorno7").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta8(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta8"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno8").textContent = "acertou";
        }
        else{
            document.getElementById("retorno8").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta9(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta9"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno9").textContent = "acertou";
        }
        else{
            document.getElementById("retorno9").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}
function funcaoresposta10(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta10"]:checked');
    if(respostausuario){
        if(respostausuario.value === respostacorreta){
            document.getElementById("retorno10").textContent = "acertou";
        }
        else{
            document.getElementById("retorno10").textContent = "errou";
        }
    }
    else{
       alert("ESCOLHA UMA RESPOSTA!")
    }
}