function mostrar(){
    var array = document.getElementById("intervalo").value;
    var array1 = array.split(",")
    var arrayPrimos = [];
    var num1 = 0;
    var num2 = 0;
    var superArray = [];
    if(array1[0] < array1[1]){
        num1 = array1[0];
        num2 = array1[1];
    };
    if(array1[1] < array1[0]){
        num1 = array1[1];
        num2 = array1[0];
    };
    for(var i = num1; i <= num2; i++){
        var somador = 0; 
        for(var j = 1; j <= i; j++){
            var primo = i%j
            if(primo == 0){
                somador += 1
            };
        };
        if(somador == 2){
            document.getElementById("body").innerHTML += "<h4 " + " id='" + i + "' </h4>";
            document.getElementById(i).style.display = "none";
            document.getElementById(i).innerHTML = i + " ";
            setTimeout(() => { 
                for(var a = num1; a<=num2; a++){
                    var somador2 = 0; 
                    for(var b = 1; b <= a; b++){
                        var primo2 = a%b
                        if(primo2 == 0){
                            somador2 += 1
                        };
                    }
                        if(somador2 == 2 && !superArray.includes(a)){
                            console.log(superArray)
                            console.log(a)
                            document.getElementById(a).style.display = 'block'
                            superArray.push(a);
                            setTimeout(() => { document.getElementById("body").style.backgroundColor="#EB" + a + a + "C" + a }, 500);
                            setTimeout(() => { document.getElementById("body").style.backgroundColor="#F" + a + "AF" + a}, 1000);
                            setTimeout(() => { document.getElementById("body").style.backgroundColor="#" + a + a + a + "DE" }, 1500);
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
                        }
                }
            }, 2000);
        };
    };
};