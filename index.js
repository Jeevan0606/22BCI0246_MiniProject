

let mybutton = document.getElementById("top-bottomBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//-----------------------------------------------------

var slideIndex = 0;
carousel();
function carousel() {
    var slides = document.querySelectorAll('.image-grid');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'flex';
    setTimeout(carousel, 3000);
}

//----------------

function triggerAnimation() {
    // Show the animation container
    document.getElementById("animationContainer").style.display = "flex";
  
    // Redirect to your website URL after animation completes
    setTimeout(function() {
        window.location.href = "index.html"; // Replace with your website URL
    }, 2200); // Adjust timing as needed (0.5s * 8 letters + 1s delay)
}
















