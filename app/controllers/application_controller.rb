class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!

  def configure_permitted_parameters
       devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def index
    @groups = current_user.groups.limit(5)
    @group = Group.find(params[:id])
    @users = @group.users
  end
end
