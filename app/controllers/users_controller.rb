class UsersController < ApplicationController
  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    redirect_to :root
  end

  private
  def user_params
    params.require(:user).permit(:name)
  end
end
