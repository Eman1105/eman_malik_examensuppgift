//när tangent trycks ner
document.addEventListener("keydown",function(event){

    //hämtar vilket tangent som trycks ner
    let bokstav= event.key.toLocaleLowerCase();

    //leta efter element med smma id
    let knapp = document.getElementById(bokstav);

    //om tangent finns på sidan 
    if (knapp){

        //lägg till klassen tryckt
        knapp.classList.add("tryckt");
    }

}); 

document