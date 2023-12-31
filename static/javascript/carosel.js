let slideNumber = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideNumber++;
    if (slideNumber > slides.length) { slideNumber = 1 }
    slides[slideNumber - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Changes image every 2 seconds
}