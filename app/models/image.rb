class Image < ActiveRecord::Base
  mount_uploader :image, ImageUploader

  validates :description, presence: true
end
