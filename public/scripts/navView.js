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
