'use strict';
$(document).ready(function () {
  $('.nav-items').hide();
  $('.hamburger').click( function (event) {
    event.stopPropagation();
    $('.nav-items').slideToggle('ease');
  });

  $(document).click(function () {
    $('.nav-items').hide();
  });
});


$( window ).scroll( function() {
  if ($(this).scrollTop() > 0 && $(window).width() > 960) {
    $( '.back-to-top' ).addClass( 'show-back-to-top' );
  } else {
    $( '.back-to-top' ).removeClass( 'show-back-to-top' );
  }
});

// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
  $( 'html, body' ).animate( { scrollTop : 0 }, 0 );
  return false;
});

//Second pic in About Me
if ($(document).width() > 1200) {
  $('#second-pic').css('display', 'block');
} 
if ($(document).width() < 1200) {
  $('#second-pic').css('display', 'none');
}
