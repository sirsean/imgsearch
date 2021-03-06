var Search = React.createClass({
  getInitialState: function() {
    return {
      term: SearchStore.state.term(),
      results: SearchStore.state.results()
    };
  },
  componentDidMount: function() {
    SearchStore.addChangeListener(this._onChange);
    Actions.setSearchTerm(this.state.term);
  },
  componentWillUnmount: function() {
    SearchStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(this.getInitialState());
    }
  },
  render: function() {
    return (
      <div>
        {(!this.state.results || this.state.results.length == 0) &&
          <div className="noResults">
            <img src="/assets/results-null.png" />
          </div>
        }
        <div className="searchResults">
          {this.state.results.map(function(result) {
            return (
              <div key={result.id}>
                <SearchResult result={result} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});
