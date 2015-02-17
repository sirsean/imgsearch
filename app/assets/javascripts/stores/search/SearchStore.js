var SearchStore = function() {
  var term = "";
  var results = [];

  return new Store({
    state: {
      term: function() {
        return term;
      },
      results: function() {
        return results;
      }
    },
    handlers: {
      "SET_SEARCH_TERM": function(action) {
        term = action.term;
        $.ajax({
          type: "GET",
          url: "/search",
          data: {
            term: term
          },
          success: function(data) {
            Actions.gotSearchResults(data);
          }
        });
      },
      "GOT_SEARCH_RESULTS": function(action) {
        results = action.results;
      }
    }
  });
}();
