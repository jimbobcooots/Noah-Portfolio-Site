page('/about', disAbout);

function disAbout() {
  $('#searchBar').hide();
  $('#nav').show();
  $('#myMeetUps').hide();
  $('#map').hide();
  $('#aboutPage').slideDown(250);
  $('#emeryIsBadAtNamingVariables').hide();
  $('.homeNav').show();

}

function initHomePage () {
  $('.nav-items').hide();
  $('#nav').show();
  $('#myMeetUps').hide();
  $('#headline').slideDown(250);
}

function initGallery () {

}
