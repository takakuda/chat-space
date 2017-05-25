json.messages @messages.each do |message|
  json.set! :name, @message.user.name
  json.set! :time, @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.set! :body, @message.body
  json.set! :id,   @message.id
  json.image image_tag @message.image.url if @message.image.url
end
