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
      type: 'GET',
      data: ('keyword=' + input),
      dataType: 'json'
    })

    .done(function(data) {
      $('#user-search-result').find('.chat-group-user').remove();
      $(data).each(function(i, user) {
        appendList(user)
      })
    })
  })

  $('#user-search-result').on('click', '.chat-group-user__btn--add', function() {
    var add_user = $(this);
    var id = add_user.data('user_id');
    var name = add_user.data('user-name');
    var html = buildHTML(id, name);

    $('#chat-group-user').append(html);
    add_user.parent().remove();
  })

    $('#chat-group-users').on('click', '.chat-group-user__btn--remove', function() {
      var id = $(this).data('user-id');
      $(this).parent().remove();
    })
})

