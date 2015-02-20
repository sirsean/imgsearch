var SearchResult = React.createClass({
  mixins: [ReactRouter.Navigation],
  onClick: function() {
    this.transitionTo("viewImage", {imageId: this.props.result.id});
  },
  render: function() {
    var result = this.props.result;
    return (
      <div className="searchResult" onClick={this.onClick}>
        <img src={result.url} />
      </div>
    );
  }
});
