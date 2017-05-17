$(function() {
  function build(message) {
    var html =

    `<div class = "chat-main__contents-user">
      <p>
      &{message.name}
      </p>
      </div>
      <div class = "hat-main__contents-time"
      <p>
      ${message.time}
      </p>
      </div>
      <div class = "hat-main__contents-messages">
      <p>
      ${message.body}
      </p>
      </div>`

      return html;
    }

  //   html['html_user'] = $('.chat-main__contents-user').html('message.user.name');
  //   html['html_data'] = $('.chat-main__contents-time').html('message.created_at');
  //   html['html_body'] = $('.chat-main__contents-messages').html('message.body');
  //   return html;
  // }

$('#new_message').on('submit', function(e) {
  e.preventDefault();
  // var message = $(this)
  // var fd = new FormData(message[0])
  // var textField = $('#message_body');
  // var message = textField.val();
  var form = $('#message_body');
  var message = new FormData($('#new_message').get(0));

  $.ajax({
    type: 'POST',
    url: location.href,
    // data: fd,
    date: message,
    processData: false,
    contentType: false,
    dateType: 'json'
  })

  .done(function(data) {
    var html = buildHTML(data);

       $('.chat-main__contents').append(html);
       // $('.js-form__text-field').val('');
       // $("input").prop("disabled", false)
       form.val('');
     })

  .fail(function(data) {
    alert('メッセージが入力されていません');
  });
  return false;
});
});
