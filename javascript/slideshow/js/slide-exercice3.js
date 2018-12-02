// Exercice 3 : 
// - Remettre en forme le code et le commenter !  
// - Si ce code permet de changer automatiquement de diapo
//   Comment faire pour avoir un diaporama automatique avec pagination
//   en réutilisant le code de l'exercice 2 ?
// - Refacoring : pensez-vous qu'il est nécessaire de réecrire ce code ?


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
