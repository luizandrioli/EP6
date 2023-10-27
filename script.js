// Função que calcula a aceleração com base na massa e força
function calcular() {
    // Verifica se a massa é igual a zero (evita divisão por zero)
    if (massa.value == 0) {
        alert("Não é possível dividir por zero.");
        forca.value = 0; // Define o valor da força como zero
    } else {
        aceleracao.value = parseInt(forca.value) / parseInt(massa.value); // Calcula a aceleração
    }
}

// Função que calcula a variação de velocidade
function variacaov() {
    deltavelocidade.value = parseInt(deltav.value) - parseInt(deltav2.value); // Calcula a variação de velocidade
}

// Função que calcula a aceleração com base na variação de tempo
function calcularaceleracao() {
    // Verifica se a variação de tempo é igual a zero (evita divisão por zero)
    if (deltataceleracao.value == 0) {
        alert("Não é possível dividir por zero.");
        deltavaceleracao.value = 0; // Define o valor da aceleração da variação de tempo como zero
    } else {
        aceleracaodeltavt.value = parseInt(deltavaceleracao.value) / parseInt(deltataceleracao.value); // Calcula a aceleração da variação de tempo
    }
}

// Função que calcula a força resultante
function forcar() {
    forcaresultante.value = parseInt(massadafr.value) * parseInt(aceleracaodafr.value); // Calcula a força resultante
}

// Função que processa as respostas do questionário
function funcao_resposta() {
    // Obtém as respostas selecionadas
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

    var contador = 0; // Inicializa um contador para registrar as respostas corretas

    // Verifica se todas as questões foram respondidas
    if (resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10) {
        // Questão 1
        if (resp1.value == "correta") {
            document.getElementById("resp_correta_1").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_1").innerHTML = "Letra B, o enunciado faz referência à Terceira lei de Newton: toda ação possui uma reação de mesmo valor, mesma direção, mas sentido oposto.";
        }

        // Questão 2
        if (resp2.value == "correta") {
            document.getElementById("resp_correta_2").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_2").innerHTML = "ERRADA! Pois, aplicando a Segunda lei de Newton, temos: 101N.";
        }

        // Questão 3
        if (resp3.value == "correta") {
            document.getElementById("resp_correta_3").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_3").innerHTML = "ERRADA! Pois, aplicando a segunda lei de Newton, temos: F.t ÷ (v – v0).";
        }

        // Questão 4
        if (resp4.value == "correta") {
            document.getElementById("resp_correta_4").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_4").innerHTML = "ERRADA! Pois, a tendência de um corpo em movimento uniforme é manter seu movimento perpetuamente. O que torna a alternativa errada é o fato de dizer que o movimento uniforme possui aceleração constante.";
        }

        // Questão 5
        if (resp5.value == "correta") {
            document.getElementById("resp_correta_5").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_5").innerHTML = "ERRADA! I) Verdadeira. A força resultante é igual à razão entre a quantidade de movimento do corpo e o tempo. II) Falsa. Peso e normal não são par de ação e reação. III) Verdadeira. A massa é a medida quantitativa da inércia. IV) Verdadeira. V) Falsa. Ação e reação sempre possuem mesma direção, mas os sentidos sempre são opostos.";
        }

        // Questão 6
        if (resp6.value == "correta") {
            document.getElementById("resp_correta_6").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_6").innerHTML = "ERRADA! Uma vez que o corpo desliza com velocidade constante, a aceleração sobre ele é nula, portanto a força resultante sobre esse corpo também é nula. A alternativa correta é a letra B.";
        }

        // Questão 7
        if (resp7.value == "correta") {
            document.getElementById("resp_correta_7").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_7").innerHTML = "ERRADA! Sendo a inércia do segundo corpo quatro vezes menor que a do primeiro corpo, podemos afirmar, com base na 2ª lei de Newton, que a aceleração obtida por esse corpo será quatro vezes maior que aquela desenvolvida pelo corpo 1. A alternativa correta é a letra A.";
        }

        // Questão 8
        if (resp8.value == "correta") {
            document.getElementById("resp_correta_8").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_8").innerHTML = "ERRADA! De acordo com a lei da gravitação universal, a força de atração gravitacional entre dois corpos é sempre atrativa e também inversamente proporcional ao quadrado da distância que os separa. Sendo assim, ao triplicarmos a distância entre esses corpos, a força atrativa entre eles deverá diminuir em nove vezes. A alternativa correta é a letra B.";
        }

        // Questão 9
        if (resp9.value == "correta") {
            document.getElementById("resp_correta_9").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_9").innerHTML = "ERRADA! Por serem elásticos, os para-choques modernos prolongam o tempo das colisões, que, por sua vez, diminuem a aceleração sofrida pelos passageiros, já que tal grandeza é inversamente proporcional ao tempo em que uma colisão ocorre.";
        }

        // Questão 10
        if (resp10.value == "correta") {
            document.getElementById("resp_correta_10").innerHTML = "Correta!";
            contador = contador + 1; // Incrementa o contador se a resposta estiver correta
        } else {
            document.getElementById("resp_errada_10").innerHTML = "Letra A. A soma das forças que atuam sobre o livro é nula, e a tendência do corpo é manter o movimento. A situação do livro é de equilíbrio dinâmico.";
        }

        // Exibe a contagem de respostas corretas
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    } else {
        alert("Não deixe questões em branco!"); // Alerta se alguma questão não foi respondida
    }
}

// Função que muda uma imagem
function mudar(objeto, imagem) {
    carrinho.src = imagem; // Altera a imagem com base no objeto e na URL da imagem
}

// Função que solicita o nome do usuário e o exibe
function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if (nome_variavel) {
        document.getElementById("marcacao_nome").innerHTML = "Olá " + nome_variavel + ", seja bem-vindo";
    } else {
        alert("Nome não atribuído, preencha o nome.");
        inclui_nome();
    }
}
