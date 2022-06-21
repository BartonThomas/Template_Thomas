function ordenar(){
    var nomes = document.getElementById("nomess").value;
    var ordenado = nomes.split(" ");
    nomes = ordenado.sort();
    console.log(ordenado)
    if(ordenado.length != 3){
        document.getElementById("nomes").textContent = "SEM DISCOTECA PARA VOCÊ!!!";
        return(0)
    }
    document.getElementById("nomes").textContent = "";
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB44C7" }, 500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#8F2AF5" }, 1000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#3145DE" }, 1500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#2ABBF5" }, 2000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#37EBAF" }, 2500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB44C7" }, 3000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#8F2AF5" }, 3500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#3145DE" }, 4000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#2ABBF5" }, 4500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#37EBAF" }, 5000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB44C7" }, 5500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#8F2AF5" }, 6000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#3145DE" }, 6500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#2ABBF5" }, 7000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#37EBAF" }, 7500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB44C7" }, 8000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#8F2AF5" }, 8500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#3145DE" }, 9000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#2ABBF5" }, 9500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#37EBAF" }, 10000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB44C7" }, 10500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#8F2AF5" }, 11000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#3145DE" }, 11500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#2ABBF5" }, 12000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#37EBAF" }, 12500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB44C7" }, 13000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#8F2AF5" }, 13500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#3145DE" }, 14000);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#2ABBF5" }, 14500);
    setTimeout(() => { document.getElementById("body").style.backgroundColor="#37EBAF" }, 15000);
    for(i=0; i<3; i++){
        document.getElementById("nomes").textContent += nomes[i] + " ";
    }
}