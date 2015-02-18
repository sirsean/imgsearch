class SearchController < ApplicationController
  def index
    term = search_params[:term]

    results = Image.search(term).results.map(&:_source)

    render json: results
  end

  private

  def search_params
    params.permit(:term)
  end
end
