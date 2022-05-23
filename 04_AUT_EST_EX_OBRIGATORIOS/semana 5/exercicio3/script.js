function ordenado(lista){
    for (var i = 0; i < lista.length; i++){
        for (var j = 0; j < lista.length; j++){
            if (lista[j] > lista[j+1]){
                var auxiliar = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = auxiliar
            }
        }
    }
    return lista
}
function ordenar(){
    var lista = document.getElementById("lista").value;
    console.log(lista)
    lista = lista.split(',');
    var ordenaLista = lista.map(Number)
    console.log(ordenaLista)
    ordenado(ordenaLista);
    document.getElementById("listaOrdenada").textContent = ordenaLista
    binarySearch(ordenaLista)
}
function binarySearch(lista){
    var max = lista.length - 1
    var min = 0
    var bonk = bonk
    while(min <= max){
        bonk = Math.floor((min + max)/2)
        console.log(document.getElementById("valor-foco").value)
        console.log(min)
        console.log(max)
        console.log(bonk)
        if (lista[bonk] == document.getElementById("valor-foco").value){
            document.getElementById("posicaoVF").textContent = (bonk + 1)
            return bonk
        }
        else if (lista[bonk] < document.getElementById("valor-foco").value){
            min = bonk + 1
        }
        else if (lista[bonk] > document.getElementById("valor-foco").value){
            max = bonk - 1
        }
    }
}