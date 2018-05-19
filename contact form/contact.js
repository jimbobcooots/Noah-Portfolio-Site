$(function() {
  //get the form
  var form = $('#ajax-contact');
  //get the messages div
  var formMessages = $('#form-messages');

  $(form).submit(function(e) {
    //stop the browser from submitting he form
    e.preventDefault();

  //serialize the form data
  var formData = $(form).serialize();

  $.ajax({
    type: 'POST',
    url: 'mailer.php',
    data: formData
  })
    .done(function(resonse) {
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      //message text
      $(formMessages).text(response);

      //Clear form
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .fail(function(data) {
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      if(data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
      }
    });
});