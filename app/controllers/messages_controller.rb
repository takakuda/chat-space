class MessagesController < ApplicationController
before_action :params_date
  def index
  end

  def create
    @message = @messages.new(message_params)
    if @message.save
      redirect_to :root, notice: "メッセージを作成しました"
    else
      flash.now[:alert] = "メッセージを入力してください"
      render 'index'
    end
  end

  private

  def params_date
    @groups = current_user.groups.order(id: :DESC).limit(5)
    @group = Group.find(params[:group_id])
    @users = @group.users
    @message = Message.new
    @messages = @group.messages
  end

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id])
  end
end
