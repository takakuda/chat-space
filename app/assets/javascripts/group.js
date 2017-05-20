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

})
