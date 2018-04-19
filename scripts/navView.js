'use strict';

$('.cross').hide();
$('.nav-items').hide();

$('.hamburger').click(function () {
  $('.nav-items').slideToggle(function() {
    $('.hamburger').hide();
    $('.cross').show();
  })
});

$('.cross').click(function () {
  $('.nav-items').slideToggle(function() {
    $('.cross').hide();
    $('.hamburger').show();
  })
});

function handleMainNav () {
  $('.main-nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
}

function setTeasers() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
}

function initIndexPage () {
  handleMainNav();
  setTeasers();
}

initIndexPage();
