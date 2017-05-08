class GroupsController < ApplicationController
  def new
    @group = Group.new(params[:id])
  end

  def create
    @group = Group.new(group_params)
  end

  def post
  end

  def group_params
    params.require(@group).permit(:name, {:user_ids =>[]})
  end
end
