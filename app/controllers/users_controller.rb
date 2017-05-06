class UsersController < ApplicationController
  private
  def user_params
    params.require(:user).permit(:name).permit(:email).perpmit(:pass)
  end
end
