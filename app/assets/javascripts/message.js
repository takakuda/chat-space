$(function() {
  function build(message) {
    var html = {};
    html['html_user'] = $('.chat-main__contents-user').html('message.user.name');
    html['html_data'] = $('.chat-main__contents-time').html('message.created_at');
    html['html_body'] = $('.chat-main__contents-messages').html('message.body');
    return html;
  }
$('.js-form').on('submit', function(e) {
  e.preventDefault();
  var message = $(this)
  var fd = new FormData(message[0])
  var textField = $('#message_body');
  var message = textField.val();
  $.ajax({
    type: 'POST',
    url: './message',
    data: fd,
    processData: false,
    contentType: false,
    dateType: 'json'
  })
  .done(function(data) {
    var view = buildHTML(data);
    console.log(data)
    console(data)
       $('.chat ').append(view);
       $('.js-form__text-field').val('');
       $("input").prop("disabled", false)
     })
  //   var html = buildHTML(data);
  //   $.each(html,function(i,val) {
  //     $('.chat-main__contents').append(val);
  //   });
  //   textField.val('');
  // })
  .fail(function(data) {
    alert('メッセージが入力されていません');
    console.log(alert)
  });
});
});
