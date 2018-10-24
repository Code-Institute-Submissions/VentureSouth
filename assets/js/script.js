// Slideshow IIFE
(function() {
    var slideIndex, slide;

    slideIndex = 0;
    showSlides();

    function showSlides() {
        slide = document.getElementsByClassName('slides');

        for (var i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
        }

        slideIndex++;
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }
        slide[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 5000);
    }

})();






