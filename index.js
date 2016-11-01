var myVar;

      function animateFunc() {
          console.log("AnimateFunc!!");
          myVar = setTimeout(showPage, 2500);
      }

      function showPage() {
        console.log("Show page!!");
        document.getElementById("loader").style.display = "none";
        document.getElementById("loader1").style.display = "none";
        document.getElementById("loader2").style.display = "none";
        document.getElementById("loader3").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
      }

    $(document).ready(function(){

      // Add scrollspy to <body>
      $('body').scrollspy({target: ".navbar", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    });