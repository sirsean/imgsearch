class ImagesController < ApplicationController
  def show
    image = Image.find(params[:id])
    render json: image
  end

  def create
    image = Image.new(
      description: params[:description],
      tags: params[:tags].split(",").map(&:downcase),
      ready: true)
    if params[:file]
      image.image = params[:file]
    elsif params[:externalUrl]
      image.remote_image_url = params[:externalUrl]
    end
    image.save

    render json: image
  end
end
