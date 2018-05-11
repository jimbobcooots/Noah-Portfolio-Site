'use strict';

$(function () {
  $('.button-list').hide();
  $('#headline-container').addClass('animals');
  $('#mobile-nav> ul, li, a').addClass('blackFontBorder');
  $('#button-container').addClass('blackFontBorder');
  $('.gradient-headline').hide();

  /*NAV BACKGROUND WHEN LOWER THAN...*/
  $(document).scroll(function() {
    let doc = $(this).scrollTop();
    if (doc > 700) {
      $('#mobile-nav').css('background-color', 'white');
    }
    if (doc < 700) {
      $('#mobile-nav').css('background-color', 'transparent');
    }
  });
});

//open the background buttons
$('#change-color').on('click', function () {
  $('#change-color').fadeOut('slow');
  $('.button-list').fadeIn('slow');
});

$('.button-list').on('change', function () {
  let bgVal = $('option:selected').val();

  if(bgVal === "Gradient"){
    $('.gradient-headline').show();

/*Headline page*/
    $('#headline-container').removeClass();
    $('#headline-container').addClass('gradient');
/*Nav Bar*/
    $('#mobile-nav > button, ul, li, a').removeClass('blackFontBorder');
    $('#mobile-nav > button, ul, li, a').addClass('whiteFontBorder');
/*Background changing button*/
    $('#button-container').removeClass('blackFontBorder');
    $('#button-container').addClass('whiteFontBorder');
  }
  if(bgVal === "Animals"){
    $('#headline-container').removeClass();
    $('#headline-container').addClass('animals')

/*CHANGE TO BLACK*/
    $('#mobile-nav > button, ul, li, a').removeClass('whiteFontBorder');
    $('#mobile-nav > button, ul, li, a').addClass('blackFontBorder');
    $('#button-container').removeClass('whiteFontBorder');
    $('#button-container').addClass('blackFontBorder');
  }

});



//on the click of a button, change the class of the headline to gradient
