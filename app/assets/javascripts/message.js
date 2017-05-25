$(function() {
  function buildHTML(message) {
    var message_Image = '';
    if (message.image) {
    }

    var html =
    `<div class = "chat-main__contents" id = "${message.id}">
      <div class = "chat-main__contents-user">
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

  if (window.location.href.match(/messages/)) {
    setInterval(function(){
      var last_id = $('.chat-main__contents').last().attr('id');
      $.ajax({
        type: 'GET',
        url: window.location.href,
        data: { id:last_id },
        dataType: 'json'
      })

      .done(function(data) {
        var insertHTML = '';
        data.messages.forEach(function(message) {
          if (message.id > last_id) {
            insertHTML += buildHTML(message);
          }
          $('chat-main__contents').append(insertHTML);
        });
      })
      .fail(function(data) {
        alert('自動更新に失敗');
      });
    }, 5000);
  }
