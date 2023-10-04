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
    var respostausuario = document.querySelector('input[name="resposta"]:checked');
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
    var respostausuario = document.querySelector('input[name="resposta"]:checked');
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
