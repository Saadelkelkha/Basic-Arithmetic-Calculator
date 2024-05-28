function calculer(){
    var nombre = document.getElementsByTagName("input");
    var n = parseFloat(nombre[0].value);
    var n2 = parseFloat(nombre[1].value);
    var op = document.getElementsByTagName("select");
    if(op[0] == "+"){
        var re = n + n2;
        document.getElementsByTagName("p")[0].innerHTML = "Resultat: "+ re;
    }else{
        if(op[0] == "-"){
        var re = n - n2;
        document.getElementsByTagName("p")[0].innerHTML = "Resultat: "+ re;
        }else{
            if(op[0] == "x"){
                var re = n * n2;
                document.getElementsByTagName("p")[0].innerHTML = "Resultat: "+ re;
            }else{
                var re = n / n2;
                document.getElementsByTagName("p")[0].innerHTML = "Resultat: "+ re;
            }
        }
    }
};