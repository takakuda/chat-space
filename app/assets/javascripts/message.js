$(function() {
  function buildHTML(message) {
    var message_Image = '';
    if (message.image) {
      console.log(message)
  
    }

    var html =
      `<div class = "chat-main__contents-user">
          ${message.name}
      </div>

      <div class = "chat-main__contents-time">
          ${message.time}
      </div>

      <div class = "chat-main__contents-messages">
          ${message.body}
      </div>

      <div class = "chat-main__contents-image">
          ${message.image}
      </div>`

      return html;
    }

  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    var form = $(this);
    var message = new FormData(form.get(0));

    $.ajax({
      type: 'POST',
      url: location.href,
      data: message,
      processData: false,
      contentType: false,
      dataType: 'json'
    })

    .done(function(data) {
        var html = buildHTML(data);
        $('.chat-main__contents').append(html);
        form.val('');
        $('input').prop("disabled", false);
      })

    .fail(function(data) {
      alert('メッセージが入力されていません');
      $('input').prop("disabled", false);
    });
    return false;
  });
});
