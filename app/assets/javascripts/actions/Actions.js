var Actions = {
  setSearchTerm: function(term) {
    Dispatcher.dispatch({
      type: "SET_SEARCH_TERM",
      term: term
    });
  },
  gotSearchResults: function(results) {
    Dispatcher.dispatch({
      type: "GOT_SEARCH_RESULTS",
      results: results
    });
  }
};
