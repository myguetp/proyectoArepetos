

var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i=0;i < slides.length; i++){
        slides[i].style.display="none"
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,8000);

};


function show(){
    document.getElementById("burguerClasica").style.image("imagenes/estilo2.png");
    document.getElementById("burguerClasica").style.width=40;
    document.getElementById("burguerClasica").style.background="red";



    }   