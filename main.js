//varijable------------------------------------------------
var nameJS = document.getElementById ("name");
var oMeniParagrafJS = document.getElementById ("oMeniParagraf");
var omeniJS = document.getElementById ("omeni");
var infoJS = document.getElementById ("info");
var bojaPozadineJS = document.getElementById ("bojaPozadine").value;
var wrappJS = document.getElementById ("wrapp");
var btnPromjeniBojuJS = document.getElementById ("btnPromjeniBoju");
var carJS = document.getElementById ("car");








//varijable btn ----------------------------------------------
var btnLogoJS = document.getElementById ("btnLogo");
var btnImeJS = document.getElementById ("btnIme");
var btnResetJS = document.getElementById ("btnReset");
var btnOkviriJS = document.getElementById ("btnOkviri");
var bojaPozadineDivJS = document.getElementById ("bojaPozadineDiv");



//listener----------------------------------------------------
btnLogoJS.addEventListener ("click", naslovPromjena);
btnImeJS.addEventListener ("click", imaBojaPromjena);
btnOkviriJS.addEventListener ("click", okvirBojaPromjena);
btnResetJS.addEventListener ("click", reset);
btnPromjeniBojuJS.addEventListener ("click", bojaPozadineJSFun);


//funkcije----------------------------------------------------

function naslovPromjena (){
    var noviNaslov = prompt ("Unesi novo ime naslova");

    if (noviNaslov == "") {
        nameJS.innerHTML = (`Božidar Ćudina`);       
    }else {
        nameJS.innerHTML = (noviNaslov);
        oMeniParagrafJS.innerHTML = (`Moje ime je <b>${noviNaslov}</b> i ja učim HTML, CSS i Java Script.`);
    }   
;}

function imaBojaPromjena (){

    var boje = ["#D9043D", "#4C4659", "#4EABBF", "#F2E205", "#F2CB05","#F23A29","#70731F","#C2D2F2"];

                var bojeRandom = Math.floor(Math.random() * boje.length) ;
                var izborBoja = boje[bojeRandom];
                nameJS.style.color = (izborBoja);
}

function okvirBojaPromjena (){

    var boje = ["#D9043D", "#4C4659", "#4EABBF", "#F2E205", "#F2CB05","#F23A29","#70731F","#C2D2F2"];
                

                var bojeRandom = Math.floor(Math.random() * boje.length) ;
                var bojeRandom2 = Math.floor(Math.random() * boje.length) ;

                var izborBoja = boje[bojeRandom];
                var izborBoja2 = boje[bojeRandom2];

                omeniJS.style.background = (izborBoja);
                infoJS.style.background = (izborBoja2);

                if(izborBoja == izborBoja2) {
                    alert ("Smiri dozivljaj!!");
                }else{
                    
                }
}

function reset (){
    nameJS.innerHTML = ("Božidar Ćudina");
    nameJS.style.color = "black";
    oMeniParagrafJS.innerHTML = (`Moje ime je Božidar Ćudina i ja učim HTML, CSS i Java Script.`);
    omeniJS.style.background = "#ffffcc";
    infoJS.style.background = "#ffffcc";
    wrappJS.style.background = "#f5f5f0";
    carJS.innerHTML = ("");


}

function bojaPozadineJSFun (){
    //jos je nejasno zašto var dolati ovdje, a ne gore
    var bojaPozadineJS = document.getElementById ("bojaPozadine").value;
    bojaPozadineDivJS.style.background = "#f5f5f0";
    wrappJS.style.background = (bojaPozadineJS);
}
