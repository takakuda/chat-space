class UsersController < ApplicationController
  private
  def user_params
    params.require(:user).permit(:name,:email,:password)
  end
end
