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
    rest = rest.join(" ")

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
    if rest == ""
      q = {
        match_all: {}
      }
    else
      q = {
        match: {
          description: rest
        }
      }
    end

    query = {
      filtered: {
        filter: f,
        query: q,
      }
    }
    results = Image.search(query: query).results.map(&:_source)

    render json: results
  end

  private

  def search_params
    params.permit(:term)
  end
end
