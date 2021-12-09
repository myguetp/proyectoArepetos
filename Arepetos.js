function cambiarClase(){
    let siteNav = document.getElementById('site-nav')
    siteNav.classList.toggle('site-nav-open')
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open')
};

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


