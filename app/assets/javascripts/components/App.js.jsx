var App = React.createClass({
  getInitialState: function() {
    return {
      searching: this.isSearching(this.props)
    };
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      searching: this.isSearching(newProps)
    });
  },
  isSearching: function(props) {
    return props.routes.filter(function(r) {
      return r == "search";
    }).length > 0;
  },
  render: function() {
    return (
      <div>
        <header>
          <div className="button searchButton">
            <Link to="search">Search</Link>
          </div>
          {this.state.searching &&
            <div className="searchBox">
              <SearchBox />
            </div>
          }
          <div className="button addButton">
            <Link to="addImage">Add</Link>
          </div>
          <div className="clear"></div>
        </header>
        <RouteHandler />
      </div>
    );
  }
});
