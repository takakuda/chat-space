$(function() {
  function buildHTML(message) {
    var message_Image = '';
    if (message.image) {
    }

    var html =
    `<div class = "chat-main__contents" message_id="${message.id}">
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
      </div>
      </div>`;

      return html;
    }

  $("#new_message").on('submit', function(e) {
    console.log("submit");
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
      console.log("submit成功");
      var html = buildHTML(data);
      $('.chat-main__contents').append(html);
      form.val('');
      $('input').prop("disabled", false);
    })

    .fail(function(data) {
      console.log("submit失敗");
      alert('メッセージが入力されていません');
      $('input').prop("disabled", false);
    });
    return false;
  });

  if (window.location.href.match(/messages/)) {
    setInterval(function(){
      var last_id = $('.chat-main__contents').last().attr('message_id') || 0;
      console.log("===================last_id=============");
      console.log(last_id);
      $.ajax({
        type: 'GET',
        url: window.location.href,
        data: {
          last_id: last_id,
        },
        dataType: 'json'
        // processData: false,
        // contentType: false
      })

      .done(function(data) {
        console.log("setInterval成功");
        console.log(data)
        var insertHTML = '';
        data.messages.forEach(function(message) {
          // if (message.id > last_id) {
          insertHTML += buildHTML(message);
          // }
          $('.chat-main__contents').append(insertHTML);
        });
      })
      .fail(function(data) {
        console.log("setInterval失敗");
        // alert('自動更新に失敗');
      });
    }, 5000);
  }
});
