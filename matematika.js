//varijable------------------------------------------------

var zbrojiJS = document.getElementById ("btnZbroji");
var oduzmiJS = document.getElementById ("btnOduzmi");
var mnozenjeJS = document.getElementById ("btnMnozenje");
var djeljenjeJS = document.getElementById ("btnDjeljenje");

var btnMathResetJS = document.getElementById ("btnMathReset");


var ekranJS = document.getElementById ("ekran");

//listener----------------------------------------------------

zbrojiJS.addEventListener ("click", zbrajanje);
oduzmiJS.addEventListener ("click", oduzimanje);
mnozenjeJS.addEventListener ("click", mnozenje);
djeljenjeJS.addEventListener ("click", djeljenje);


btnMathResetJS.addEventListener ("click", resetMatFun);


//funkcije----------------------------------------------------

function zbrajanje (){
    
    var prviBrojJS = document.getElementById ("prviBroj").value;
    var drugiBrojJS = document.getElementById ("drugiBroj").value;

    var rezultatJS = document.getElementById ("rezultat");
    

    var prviBrojParseJS = parseFloat(prviBrojJS);
    var drugiBrojParseJS = parseFloat(drugiBrojJS);


    var z = prviBrojParseJS + drugiBrojParseJS;
    //rezultatJS.innerHTML = (`Rezultat je <b>${z}</b>`)
    ekranJS.innerHTML = z;
   
}

function oduzimanje (){
    
    var prviBrojJS = document.getElementById ("prviBroj").value;
    var drugiBrojJS = document.getElementById ("drugiBroj").value;

    var rezultatJS = document.getElementById ("rezultat");
    

    var prviBrojParseJS = parseFloat(prviBrojJS);
    var drugiBrojParseJS = parseFloat(drugiBrojJS);


    var z = prviBrojParseJS - drugiBrojParseJS;
    //rezultatJS.innerHTML = (`Rezultat je <b>${z}</b>`)
    ekranJS.innerHTML = z;
   
}

function mnozenje (){
    
    var prviBrojJS = document.getElementById ("prviBroj").value;
    var drugiBrojJS = document.getElementById ("drugiBroj").value;

    var rezultatJS = document.getElementById ("rezultat");
    

    var prviBrojParseJS = parseFloat(prviBrojJS);
    var drugiBrojParseJS = parseFloat(drugiBrojJS);


    var z = prviBrojParseJS * drugiBrojParseJS;
    //rezultatJS.innerHTML = (`Rezultat je <b>${z}</b>`)
    ekranJS.innerHTML = z;
   
}

function djeljenje (){
    
    var prviBrojJS = document.getElementById ("prviBroj").value;
    var drugiBrojJS = document.getElementById ("drugiBroj").value;

    var rezultatJS = document.getElementById ("rezultat");
    

    var prviBrojParseJS = parseFloat(prviBrojJS);
    var drugiBrojParseJS = parseFloat(drugiBrojJS);


    var z = prviBrojParseJS / drugiBrojParseJS;
   //rezultatJS.innerHTML = (`Rezultat je <b>${z}</b>`)
   //var sZ = parseFloat(z);
    ekranJS.innerHTML = z;
   
}

function resetMatFun (){
    //console.log("alo");
    
    var prviBrojJS = document.getElementById ("prviBroj");
    var drugiBrojJS = document.getElementById ("drugiBroj");

    prviBrojJS.value = "";
    drugiBrojJS.value = "";
    
    ekranJS.innerHTML = "0";

}

/************************************************************ */
/*
function kokosBrise() {
    document.getElementById("myForm").reset();
  }
*/

/************************************************************** */

