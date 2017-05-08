class GroupsController < ApplicationController
  # before_action :set_group
  def new
    @group = Group.new
  end

  post = @group

  def index
  end

  def create
    @group = Group.new()
    group.save
  end

  def post_params
    params.require(:post).permit(:name, {:user_ids => []})
  end

  private

  # def set_group
  #   @group = Group.find(params[:user_id])
  # end

  def group_post_params
     params.require(:user_ids).permit(group_id, :user_id)
  end

  # def group_post_params
  #   params.require(@group).permit(:id, :user_id, :group_id)
  # end
end
