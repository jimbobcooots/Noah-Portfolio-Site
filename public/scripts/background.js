'use strict';

$(function () {
  $('.button-list').hide();
  $('#headline-container').addClass('animals');
  $('#mobile-nav> ul, li, a').addClass('blackFontBorder');
  $('#main-nav> ul, li, a').addClass('blackFontBorder');
  $('#button-container').addClass('blackFontBorder');
  $('.gradient-headline').hide();

  /*NAV BACKGROUND WHEN LOWER THAN...*/
  $(document).scroll(function() {
    let doc = $(this).scrollTop();
    if (doc > 500) {
      $('#mobile-nav').css('background-color', 'white');
      makeNavBlack();
    }
    if (doc < 500) {
      $('#mobile-nav').css('background-color', 'transparent');
    }
    if (doc < 500 && $('#headline-container').hasClass('gradient')) {
      $('#mobile-nav').css('background-color', 'transparent');
      makeNavWhite();
    }
  });
});

function makeNavBlack () {
  $('#mobile-nav > button, ul, li, a').addClass('blackNav');
}

function makeNavWhite () {
  $('#mobile-nav > button, ul, li, a').removeClass('blackNav');
}


//open the background buttons
$('#change-color').on('click', function () {
  $('#change-color').hide();
  $('.button-list').fadeIn();
});

$('.button-list').on('change', function () {
  let bgVal = $('option:selected').val();
  //GRADIENT BACKGROUND
  if(bgVal === 'Gradient'){
    $('.gradient-headline').show();
    makeWhite();
  }
  //ANIMAL BACKGROUND
  if(bgVal === 'Animals'){
    $('#headline-container').removeClass();
    $('#headline-container').addClass('animals');
    $('.gradient-headline').hide();
    makeBlack();
  }
});

//BLACK STYLING
function makeBlack () {
  $('#mobile-nav > button, ul, li, a').removeClass('whiteFontBorder');

  $('#mobile-nav > button, ul, li, a').addClass('blackFontBorder');
  $('#button-container').removeClass('whiteFontBorder');
  $('#button-container').addClass('blackFontBorder');
}

//WHITE STYLING
function makeWhite () {
  /*Headline page*/
  $('#headline-container').removeClass();
  $('#headline-container').addClass('gradient');
  /*Nav Bar*/
  $('#mobile-nav > button, ul, li, a').removeClass('blackFontBorder');
  $('#mobile-nav > button, ul, li, a').addClass('whiteFontBorder');
  $('#main-nav > button, ul, li, a').removeClass('blackFontBorder');
  $('#main-nav > button, ul, li, a').addClass('whiteFontBorder');
  /*Background changing button*/
  $('#button-container').removeClass('blackFontBorder');
  $('#button-container').addClass('whiteFontBorder');
}



//on the click of a button, change the class of the headline to gradient
