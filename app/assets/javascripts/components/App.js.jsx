var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="search">Search</Link></li>
            <li><Link to="addImage">Add</Link></li>
          </ul>
        </header>
        <RouteHandler />
      </div>
    );
  }
});
