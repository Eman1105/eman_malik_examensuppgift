//när tangent trycks ner

document.addEventListener("keydown", function(event){

    //hämtar vilket tangent som trycks ner
    let bokstav= event.key.toLowerCase();

    //leta efter element med smma id
    let knapp = document.getElementById(bokstav);

    //om tangent finns 
    if (knapp){
        knapp.classList.add("tryckt");
    }

}); 

//när tangenten slåpps
document.addEventListener("keyup",function(event){

    let bokstav = event.key.toLowerCase();
    
    let knapp = document.getElementById(bokstav);
    
    if (knapp) {
        knapp.classList.remove("tryckt");
    }
});

    // image shows
document.addEventListener("keydown",function(event){
    
        let bokstav = event.key.toLowerCase();

        if (bokstav== "f"){

            document.getElementById("bild").style.display = "block";
        }

}); 

//image disappear
document.addEventListener("keydown",function(event){
    
    let bokstav = event.key.toLowerCase();

    if (bokstav == "f"){
        let bild =
        document.getElementById("bild");
        bild.style.display = "none";
    }

}); 
