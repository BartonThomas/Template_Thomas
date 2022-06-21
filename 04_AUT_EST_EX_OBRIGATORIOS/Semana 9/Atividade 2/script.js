function calcular(){
    var a = document.getElementById("numero").value.toString().length;
    var result = 0;
    var bonk = parseInt(document.getElementById("numero").value);
    if(a>16){
        document.getElementById("resultado").textContent = "Insira um valor com até 16 números";
        return(0);
    }
    for(var i = 0; i<a; i++){
        result += Math.floor(Number(String(bonk)[i]));
    }
    document.getElementById("resultado").textContent = "Total: " + result;
}