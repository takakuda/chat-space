$(function() {

  function appendList(user) {
    var html =
    `<div class = "chat-group-user clearfix">
      <p class = "chat-group-user__name"> ${user.name} </p>
      <a class = "user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id = "${user.id}" data-user-name = "${user.name}">追加</a>
    </div>`;
    console.log(user.name)
    $('#user-search-result').append(html)
  }

  function buildMemberHTML(id, name) {
    var html =
    `<div class = "chat-group-user clearfix" id=chat-group-user-${id}>
      <input name = "chat-group[user_ids][]" type = "hidden" value = "${id}">
      <p class = "chat-group-user__name">${name}</p>
      <a class = "user-search-remove chat-group-user__btn chat-group-user__btn--remove" data-user-id = "${id}">削除</a>
    </div>`;
    return html
  }

  $('#user-search-field').on('keyup', function(e) {
    e.preventDefault();
    var input = $.trim($(this).val());

    $.ajax({
      url: '/users/search',
      type: 'GET'
      data: ('keyword=' + input),
      dataType: 'json'
    })
  })
})

