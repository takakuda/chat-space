class MessagesController < ApplicationController

  before_action :set_group, :set_message, only: [:index, :create]

  def index
    @groups = current_user.groups.order(id: :DESC).limit(5)
    respond_to do |format|
      format.html
      format.json {
        @messages = @group.messages.where("id > ?", params[:last_id])
      }
    end
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      respond_to do |format|
        format.html { redirect_to :root, notice: "メッセージを作成しました" }
        format.json
      end

    else
      render 'index'
    end

  end

  private

  def set_group
    @group = current_user.groups.find(params[:group_id])
    @groups = current_user.groups
  end

  def set_message
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id], user_id: current_user.id )
  end
end
