module ControllerMacros
  def login_admin(admin)
    @request.env["devise.mapping"] = Devise.mappings[:admin]
    sign_in admin
  end

  def login_user(user)
     # controller.should(:authenticate_user!).and_return true
     @request.env["devise.mapping"] = Devise.mappings[:user]
     # @user = create(:user)
     sign_in user
  end
end
