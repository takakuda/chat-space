$(function() {
  function build(message) {
    console.log(message)
    var html = {};
    html['html_user'] = $('.chat-main__contents-user').html('message.user.name');
    html['html_date'] = $('.chat-main__contents-time').html('message.created_at');
    html['html_body'] = $('.chat-main__contents-messages').html('message.body');
    return html;
  }
$('#new_message').on('submit', function(e) {
  e.preventDefault();
  var message = $(this)
  var fd = new FormData(message[0])
  var textField = $('#message_body');
  var message = textField.val();
  console.log(message);
  $.ajax({
    type: 'POST',
    data: fd,
    processData: false,
    contentType: false,
    dateType: 'json'
  })
  .done(function(data) {
    console.log(data);
    var html = buildHTML(data);
    $.each(html,function(i,val) {
      $('.chat-main__contents').append(val);
    });
    textField.val('');
  })
  .fail(function() {
    alert('メッセージ');
  });
});
});
