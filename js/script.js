//när tangent trycks ner
console.log
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

