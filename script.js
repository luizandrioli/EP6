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


function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10 ){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Letra B, O enunciado faz referencia  Terceira lei de Newton: toda açao possui uma reaçao de mesmo valor, mesma direçao, mas sentido oposto."

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "ERRADA!, pois aplicando a Segunda lei de Newton, temos: 101N "

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = " ERRADA!, pois Aplicando a segunda lei de Newton, temos: F.t ÷ (v – v0)"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = " ERRADA!, pois a tendência de um corpo em movimento uniforme é manter seu movimento perpetuamente. O que torna a alternativa errada é o fato de dizer que o movimento uniforme possui aceleração constante. "

        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = " ERRADA!, pois I) Verdadeira. A força resultante é igual à razão entre a quantidade de movimento do corpo e o tempo. II) Falsa. Peso e normal não são par de ação e reação. III) Verdadeira. A massa é a medida quantitativa da inércia. IV) Verdadeira. V) Falsa. Ação e reação sempre possuem mesma direção, mas os sentidos sempre são opostos."

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = " 6"

        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = " 7 "

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = " 8 "

        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = " 9 "

        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = " 0"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}

function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "Olá " + nome_variavel + ", seja bem vindo";
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}
