class GroupUser < ApplicationRecord
  belongs_to :users
  belongs_to :groups
  has_many :users, :through => :group_users
end
