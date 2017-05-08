class GroupUser < ApplicationRecord
  belongs_to :user_id
  belongs_to :group_id
  has_many :users, :through => :group_users
end
