'use strict';
page('/', ctx => app.mapView.initGeoCode());
page('/designs', disAbout);
page('/website', disAbout);
page('/about', disAbout);
page('/contact', disAbout);

page('/mymeetups', ctx => app.meetupView.initMyMeetupsPage())//disMyMeetups()
//disMyMeetups() called here^

if ($(window).width() > 640 && $(window).width() < 1440) {
  
} 

if ($(window).width() > 640) {
  
}