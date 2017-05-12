class UsersController < ApplicationController

  def edit
    @user = current_user
  end

  def update
    user = current_user
    user.update(user_params)
    redirect_to :root
  end
  
  private
  def user_params
    params.require(:user).permit(:name,:email,:password)
  end
end
