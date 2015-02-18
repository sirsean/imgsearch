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
      <div className="searchResults">
        {this.state.results.map(function(result) {
          return (
            <div key={result.id} className="result">
              <img src={result.url} />
            </div>
          );
        })}
      </div>
    );
  }
});
