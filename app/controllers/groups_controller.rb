class GroupsController < ApplicationController
  before_action :find_group_params, only: [:edit, :update]

  def index
    @groups = current_user.groups.limit(5)
  end

  def new
    @group = Group.new
    @group.users << current_user
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
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.user_ids == current_user.id
       @group.update(group_params)
       redirect_to :root, notice: "グループを更新しました"
    else
      flash.now[:alert] = "グループ更新に失敗しました"
      render 'new'
    end

  end

  private

  def post_params
      params.require(:group).permit(:name, user_ids: [])
  end

  def find_group_params
      @group = Group.find(params[:id])
  end
end
