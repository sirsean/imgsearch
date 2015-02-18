var Search = React.createClass({
  getInitialState: function() {
    return {
      term: SearchStore.state.term(),
      results: SearchStore.state.results()
    };
  },
  componentDidMount: function() {
    SearchStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    SearchStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(this.getInitialState());
    }
  },
  onUpdateTerm: function(e) {
    Actions.setSearchTerm(e.target.value);
  },
  render: function() {
    return (
      <div>
        <h2>Search</h2>
        <p><input type="text" value={this.state.term} onChange={this.onUpdateTerm} /></p>
        {this.state.results.map(function(result) {
          return (
            <div key={result.id}>
              <img src={result.url} />
            </div>
          );
        })}
      </div>
    );
  }
});
