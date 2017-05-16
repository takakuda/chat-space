$(function() {
  function build(message) {
    var html = {};
    html['html_user'] = $(.chat-main__contents-user).html('message.user.name');
    html['html_date'] = $(.chat-main__contents-time).html('message.created_at');
    html['html_body'] = $(.chat-main__contents-messages).html('message.body');
    return html;
  }

$('#new')
})
