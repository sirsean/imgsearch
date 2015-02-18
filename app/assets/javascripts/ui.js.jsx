var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="search" handler={Search} />
    <Route name="img" path="img" handler={Image.Main}>
      <Route name="addImage" path="add" handler={Image.Add} />
      <Route name="viewImage" path=":imageId" handler={Image.View} />
    </Route>
    <DefaultRoute handler={Search} />
  </Route>
);

ReactRouter.run(routes, function(Handler, state) {
  var routeList = state.routes.map(function(r) {
    return r.name;
  });
  React.render(<Handler routes={routeList} />, document.body);
});
