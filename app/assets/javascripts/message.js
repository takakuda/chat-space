$(function() {
  function buildHTML(message) {

    var html =
      `<div class = "chat-main__contents-user">
          ${message.name}
      </div>

      <div class = "chat-main__contents-time">
          ${message.time}
      </div>

      <div class = "chat-main__contents-messages">
          ${message.body}
      </div>`

      return html;
    }

  $(document).on('submit', '.form', function(e) {
    e.preventDefault();
    var form = $('.form');
    var message = new FormData($('.form').get(0));

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
      })

    .fail(function(data) {
      alert('メッセージが入力されていません');
    });
    return false;
  });
});
