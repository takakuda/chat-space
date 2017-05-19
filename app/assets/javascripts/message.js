$(function() {
  function buildHTML(message) {

// console.log(message);
    var html =
    `<div class = "chat-main__contents-user">
      <p>
      ${message.name}
      </p>
      </div>
      <div class = "chat-main__contents-time"
      <p>
      ${message.time}
      </p>
      </div>
      <div class = "chat-main__contents-messages">
      <p>
      ${message.body}
      </p>
      </div>`
      // console.log(html)

      return html;
    }

  //   html['html_user'] = $('.chat-main__contents-user').html('message.user.name');
  //   html['html_data'] = $('.chat-main__contents-time').html('message.created_at');
  //   html['html_body'] = $('.chat-main__contents-messages').html('message.body');
  //   return html;
  // }

$(document).on('submit', '.form', function(e) {
  e.preventDefault();
  // var message = $(this)
  // var fd = new FormData(message[0])
  // var textField = $('#message_body');
  // var message = textField.val();
  var form = $('.form');
  var message = new FormData($('.form').get(0));
  // console.log(message);

  $.ajax({
    type: 'POST',
    url: location.href,
    // data: fd,
    data: message,
    processData: false,
    contentType: false,
    dataType: 'json'
  })

  .done(function(data) {
    console.log(data);
    var html = buildHTML(data);
console.log(data);
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
