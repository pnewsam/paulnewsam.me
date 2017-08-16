document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        console.log(target);
        console.log($el);
        console.log($el.dataset);
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// $(document).ready(function(){
//   // $(alert('ready!'));
//   $(".past-projects .card").on("mouseover",function(){
//     console.log('fired!')
//     $(this).find(".past-projects__filter").removeClass("hide").fadeIn({duration:400, easing: easeInQuint})
//   });
//   $(".past-projects .card").on("mouseout",function(){
//     console.log('fired!')
//     $(this).find(".past-projects__filter").addClass("hide").fadeOut({duration:400, easing: easeInQuint})
//   });
// });