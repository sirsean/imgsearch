class ImagesController < ApplicationController
  def show
    image = Image.find(params[:id])
    render json: image
  end

  def create
    image = Image.new(description: params[:description], tags: params[:tags].split(","))
    image.image = params[:file]
    image.save

    render json: image
  end
end
