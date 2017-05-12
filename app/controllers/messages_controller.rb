class MessagesController < ApplicationController

  def index
    @groups = current_user.groups.order(id: :DESC).limit(5)
    @group = Group.find(params[:group_id])
    @users = @group.users
    @message = Message.new
  end

  def create
    @message = current_user.messages.new(message_params)
    @message.save
    redirect_to action: :index
  end

  private
  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id])
  end
end
