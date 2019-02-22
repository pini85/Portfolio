$(document).ready(function () {

/*Sticky navigation*/

  $('.skills').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky').removeClass(' nav');
      $('nav').addClass('sticky').removeClass('return-nav');
      $('ul').removeClass('nav__ul').addClass('sticky__ul');
      $('ul').removeClass('return-nav__ul').addClass('sticky__ul');
      $('li').removeClass('return-nav__li-1').addClass('sticky__li-1');
      $('li').removeClass('return-nav__li-2').addClass('sticky__li-2');
      $('li').removeClass('return-nav__li-3').addClass('sticky__li-3');
      $('.skills-highlight').addClass('nav-highlight');

    } else {
      $('ul').removeClass('sticky__ul').addClass('return-nav__ul');
      $('li').removeClass('sticky__li-1').addClass('return-nav__li-1');
      $('li').removeClass('sticky__li-2').addClass('return-nav__li-2');
      $('li').removeClass('sticky__li-3').addClass('return-nav__li-3');
      $('nav').removeClass('nav sticky').addClass('return-nav');
      $('.skills-highlight').removeClass('nav-highlight');
    }
  }, {
    offset: '58px;'
  });

   $('.projects').waypoint(function(direction) {
    if (direction == "down") {
      $('.project-highlight').addClass('nav-highlight');
      $('.skills-highlight').removeClass('nav-highlight');
       } else {
       $('.project-highlight').removeClass('nav-highlight');
       $('.skills-highlight').addClass('nav-highlight');


       }
  }, {
    offset: '58px;'
  });

   $('.next-page-projects').waypoint(function(direction) {
    if (direction == "down") {
      $('.contact-highlight').addClass('nav-highlight');
      $('.project-highlight').removeClass('nav-highlight');
       } else {
       $('.contact-highlight').removeClass('nav-highlight');
       $('.project-highlight').addClass('nav-highlight');


       }
  }, {
    offset: '31px;'
  });






  /*Scrolling*/

  $('.js--scroll-to-skills').click(function () {
    $('html, body').animate({scrollTop: $('.skills').offset().top}, 1000);

  });

  $('.js--scroll-to-projects').click(function () {
    $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000);

  });

  $('.js--scroll-to-contacts').click(function () {
    $('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);

  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.introduction').offset().top}, 1000);

  });

  /*Animations*/

  /*Skills section*/

  /*Heading*/

  $('.skills').waypoint(function(direction) {
    $('.heading-secondary-skills').addClass('animations--heading-secondary');
    }, {
    offset: '50%;'
  });

  $('.skills').waypoint(function(direction) {
    $('.heading-bar-skills').addClass('animations--heading-bar');
    }, {
    offset: '47%;'
  });

  /*Icons*/

  $('.skills').waypoint(function(direction) {
  $('.skills__features-fast').addClass('animation--features');
  $('.skills__features-responsive').addClass('animation--features animation-delay-200ms');
  $('.skills__features-dynamic').addClass('animation--features animation-delay-400ms');
  $('.skills__features-detail').addClass('animation--features animation-delay-600ms');
  }, {
    offset: '37%;'

  });

  /*Icons text*/

  $('.skills').waypoint(function(direction) {
  $('.skills__features-fast-text').addClass('animation--features-text');
  $('.skills__features-responsive-text').addClass('animation--features-text animation-delay-200ms');
  $('.skills__features-dynamic-text').addClass('animation--features-text animation-delay-400ms');
  $('.skills__features-detail-text').addClass('animation--features-text animation-delay-600ms');
  }, {
    offset: '22%;'
  });


  /*Langauges*/

//   function checkPosition() {
//     if (window.matchMedia('(max-width: 37.5em)').matches) {
//       $('.skills').waypoint(function(direction) {
//     $('.skills__langauges').addClass('animation--langauges');
//     $('.skills__html-fill').addClass('animation--fill-70 animation-delay-1000ms');
//     $('.skills__css-fill').addClass('animation--fill-70 animation-delay-1500ms');
//     $('.skills__javascript-fill').addClass('animation--fill-40');
//     $('.skills__ruby-fill').addClass('animation--fill-50');
//     $('.skills__ruby-on-rails-fill').addClass('animation--fill-55');
//     }, {
//     offset: '5%;'
//   });
//     } else {
//         $('.skills').waypoint(function(direction) {
//     $('.skills__langauges').addClass('animation--langauges');
//     $('.skills__html-fill').addClass('animation--fill-70 animation-delay-1000ms');
//     $('.skills__css-fill').addClass('animation--fill-70 animation-delay-1500ms');
//     $('.skills__javascript-fill').addClass('animation--fill-40');
//     $('.skills__ruby-fill').addClass('animation--fill-50');
//     $('.skills__ruby-on-rails-fill').addClass('animation--fill-55');
//     }, {
//     offset: '5%;'
//   });
//     }
// }

   $('.skills').waypoint(function(direction) {
    $('.skills__langauges').addClass('animation--langauges');
    $('.skills__html-fill').addClass('animation--fill-70 animation-delay-1000ms');
    $('.skills__css-fill').addClass('animation--fill-70 animation-delay-1500ms');
    $('.skills__javascript-fill').addClass('animation--fill-40');
    $('.skills__ruby-fill').addClass('animation--fill-50');
    $('.skills__ruby-on-rails-fill').addClass('animation--fill-55');
    }, {
    offset: '5%;'
  });


  /*Next-page*/

  $('.skills').waypoint(function(direction) {
    $('.next-page-skills').addClass('animation--next-page');
    }, {
    offset: '0.1%;'
  });

  /*Projects section*/

  /*Heading*/

  $('.projects').waypoint(function(direction) {
    $('.heading-secondary-projects').addClass('animations--heading-secondary');
    }, {
    offset: '50%;'
  });

  $('.projects').waypoint(function(direction) {
    $('.heading-bar-projects').addClass('animations--heading-bar');
    }, {
    offset: '47%;'
  });

  /*Projects*/

  $('.projects').waypoint(function(direction) {
    $('.js-1').addClass('animate-1');
    $('.js-2').addClass('animate-2');
    $('.js-3').addClass('animate-3');
    $('.js-4').addClass('animate-4');
    }, {
    offset: '22%;'
  });

  /*Nextpage*/

  $('.projects').waypoint(function(direction) {
    $('.next-page-projects').addClass('animation--next-page');
    }, {
    offset: '0.1%;'
  });


   /* Contact */

   /* Heading */


   $('.contact').waypoint(function(direction) {
    $('.heading-secondary-contact').addClass('animations--heading-secondary');
    }, {
    offset: '56%;'
  });

   $('.contact').waypoint(function(direction) {
    $('.heading-bar-contact').addClass('animations--heading-bar');
    }, {
    offset: '53%;'
  });

   $('.contact').waypoint(function(direction) {
    $('.paragraph-3').addClass('animations--footer-paragraph');
    }, {
    offset: '50%;'
  });

   $('.contact').waypoint(function(direction) {
    $('.form').addClass('animations--scale-in-out');
    }, {
    offset: '34%;'
  });

   /*Popups*/

   $('.open-popup-link').magnificPopup({
  removalDelay: 300,
  type:'inline',
  midClick: true,
  mainClass: 'mfp-fade'
  });

});
