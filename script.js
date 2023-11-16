function soma_seq(){
     
    var n=parseInt(numero.value);
    var soma=n;
    
    while(n>1){
        soma=soma+(n-1);
        n=n-1;
    }

    alert(soma);
}

function fat_seq(){
    var n=parseInt(camila.value);
    var fat=n;

    while(n>1){
        fat=fat*(n-1);
        n=n-1;
    }
    alert(fat)
}

function potencia(){
    let n=parseInt(numero3.value);
    let pote = n;

    if (n<0){
        alert("numero negativo");
    }
    else if(n==0){
        alert("1");
    }
    while (n>1){
        pote =Math.pow(2,n);
        n = n - 1;
        alert(pote);
    }

}

function cor(){
    let n=3;

    while(n>=1){
        alert("cuidado");
        n=n-1;
    }
}

function somatoria(){
    let n=5;
    let fat=n;
    let pote=0;
    let i=n;

    while(n>=1){
        pote= Math.pow(2,n);
        i=n;
        while(n>1){
            fat=fat*(i-1);
            i=i-1;
        }
        soma=soma+(pote*fat);
        n=n-1;
    }
}


