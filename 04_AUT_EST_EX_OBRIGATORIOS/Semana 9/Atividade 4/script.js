function mostrar(){
    document.getElementById("sequencia").textContent = ""
    var num = document.getElementById("valor").value;
    var anterior = 0;
    var atual = 1;
    if (num > 0){
        document.getElementById("sequencia").textContent +=  atual + ", "
    }
    for(var i = 1; i < num; i++){
        var n3 = atual + anterior;
        anterior = atual;
        atual = n3;
        document.getElementById("sequencia").textContent +=  n3 + ", "
    }
}