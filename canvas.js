window.addEventListener ("load", () => {
    var canvas = document.querySelector ("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext ('2d');
    //rad---------------------------------------------------
    c.fillRect (10,10,100,100);
    c.fillRect (110,110,100,100);
    c.fillRect (210,210,100,100);
    c.fillRect (310,310,100,100);
    c.fillRect (410,410,100,100);

    c.fillRect (510,410,100,100);
    c.fillRect (910,10,100,100);
    c.fillRect (610,310,100,100);
    c.fillRect (710,210,100,100);
    c.fillRect (810,110,100,100);

    c.beginPath ();
    c.moveTo (410,510);
    c.lineTo (0,1000);
    c.lineTo (1020,1000);
    c.lineTo (610,510);

    c.lineWidth = 10;


    c.stroke ();


    //btn-------------------------------------------
    var btnCanvasJS = document.getElementById ("btnCanvas");

    //varijabla-------------------------------------
    var carJS = document.getElementById ("car");


    //listener---------------------------------------

    btnCanvasJS.addEventListener ("click", test);   

    //function---------------------------------------
  
    function test () {
        carJS.innerHTML = ("");
        can.style.background = "red";
        
            var x = setTimeout (function() {
                can.style.background = "#f5f5f0"


                var questions = ["kako čovjek dobro mjenja boju, aj opet", "jak si, daj opet ...", "hit me again, FACO", "koja vještina, daj opet", "probaj opet", "...vrh, aj opet","kamen"];

                var random1 = Math.floor(Math.random() * questions.length) ;
                var choice1 = questions[random1];
                var faco = questions[2];
                
                carJS.innerHTML = (choice1);

                if ( choice1 == faco) {
                    console.log("hhhhhh");

                    alert ("FACO");
                }else{

                }



            }, 1000);

    }


});
