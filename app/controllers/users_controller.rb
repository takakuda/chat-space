class UsersController < ApplicationController

  def edit
    @user = current_user
  end

  def update
    user = current_user
    user.update(user_params)
    redirect_to :root
  end

  def search
    @users = User.where.not(id: current_user.id).search_user(params[:keyword])
    respond_to do |format|
      format.json
    end
  end

  private
  def user_params
    params.require(:user).permit(:name,:email,:password)
  end
end
