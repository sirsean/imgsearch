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
    // you're searching if you're on search OR the home page
    return props.routes.filter(function(r) {
      return (r == "search") || (r === undefined);
    }).length > 0;
  },
  render: function() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src="/assets/donut-imgsearch_logo.png" />
          </div>
          {this.state.searching &&
            <div className="searchBox">
              <SearchBox />
              <div className="button addButton">
                <Link to="addImage">or add a new image</Link>
              </div>
            </div>
          }
          {!this.state.searching &&
            <div className="button searchButton">
              <Link to="search">go back to Search</Link>
            </div>
          }
        </header>
        <RouteHandler />
      </div>
    );
  }
});
