$(function() {
  function build(message) {
    var html = {};
    html['html_user'] = $(.chat-main__contents-user).html('message.user.name');
    html['html_date'] = $(.chat-main__contents-time).html('message.created_at');
    html['html_body'] = $(.chat-main__contents-messages).html('message.body');
    return html;
  }

$('#new_message').on('submit', function(e) {
  e.preventDefault();
  var textField = $('#message_body');
  var message = textField.val();
  $.ajax({
    type: 'POST',
    url: './messages',
    date: {
      message: {
        body: message
      }
    },
    dateType: 'json'
  })
  .done(function(date) {
    var html = buildHTML(date);
    $.each(html,function(i,val) {
      $('.chat-main__contents').append(val);
    });
    textField.val('');
  })
  .fail(function() {
    alert('メッセージを入力してください');
  });
});
});
