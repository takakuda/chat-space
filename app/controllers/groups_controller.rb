class GroupsController < ApplicationController
  def new
    @group = Group.new(params[:id])
  end

  def create
    @group = Group.new(post_params)
    @group.save
    if @group.save
        redirect_to :root, notice: "グループを作成しました"
    else
        flash.now[:alert] = "グループ名を入力してください"
        render 'new'
    end
  end

  def edit
  end

  private

  def post_params
      params.require(:group).permit(:name, {user_ids: :[]})
  end
end
