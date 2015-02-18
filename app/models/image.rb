require "elasticsearch/model"

class Image < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  mount_uploader :image, ImageUploader

  validates :description, presence: true

  def as_indexed_json(options={})
    {
      id: id,
      description: description,
      tags: tags,
      url: image.url,
    }
  end
end
