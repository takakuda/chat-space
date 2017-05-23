class User < ApplicationRecord
  has_many :massages
  has_many :group_users
  has_many :groups, through: :group_users

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def update_without_current_password(params, *options)
    params.delete(:current_password)

    if params[:password].blank? && params[:password_confirmation].blank?
      params.delete(:password)
      params.delete(:password_confirmation)
    end

    result = update_attributes(params, *options)
    clean_up_passwords
    result
  end

  scope :search_user, ->(name){ where('name LIKE(?)', "%#{name}%")}
end
