class SearchController < ApplicationController
  def index
    term = search_params[:term]

    results = term.chars.map do |c|
      {
        name: "#{c.upcase}: #{term}",
      }
    end

    render json: results
  end

  private

  def search_params
    params.permit(:term)
  end
end