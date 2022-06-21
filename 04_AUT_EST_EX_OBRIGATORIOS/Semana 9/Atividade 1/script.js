function calcular(){
    var a = parseInt(document.getElementById("number").value/100);
    if(a>=10 || a<=0){
        document.getElementById("result").textContent = "Por favor insira um número com 3 dígitos";
    }
    else if(a%2 == 0){
        document.getElementById("result").textContent = "A centena é par!";
    }
    else if(a%2 != 0){
        document.getElementById("result").textContent = "A centena é ímpar!";
    }
}