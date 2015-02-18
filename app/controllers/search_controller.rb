class SearchController < ApplicationController
  def index
    term = search_params[:term]

    tags, rest = [], []
    term.split(" ").each do |t|
      if t[0] == "#"
        tags << t[1..-1].downcase
      else
        rest << t
      end
    end

    f = {
      bool: {
        must:
          tags.map do |t|
            {
              term: {
                tags: t
              }
            }
          end
      }
    }
    if rest.empty?
      q = {
        match_all: {}
      }
    else
      q = {
        match: {
          description: rest.join(" ")
        }
      }
    end

    query = {
      filtered: {
        filter: f,
        query: q,
      }
    }

    render json: Image.search(query: query).results.map(&:_source)
  end

  private

  def search_params
    params.permit(:term)
  end
end
