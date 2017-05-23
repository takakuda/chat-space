class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :group

  validates :body, presence: true

  mount_uploader :image, ImageUploader
end
