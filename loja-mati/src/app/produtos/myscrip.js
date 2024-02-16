var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += "active";
  
      if (slides.length==1) {
        setTimeout(showSlides,99999999);
      }else{
        setTimeout(showSlides, 2000); // Altera a imagem a cada 2 segundos
      }
      
    }
  
    function plusSlides(n) {
        if (slideIndex+n<=slides.length) {
            showSlides(slideIndex += n);
        }else{
            showSlides(slideIndex);
        }
      
    }
  
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }