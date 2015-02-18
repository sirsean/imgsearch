Image.View = React.createClass({
  mixins: [ReactRouter.State],
  getInitialState: function() {
    var imageId = this.getParams().imageId;
    var image = ImageStore.state.imageById(imageId);
    if (!image) {
      Actions.loadImage(imageId);
    }
    return {
      image: image
    };
  },
  componentDidMount: function() {
    ImageStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ImageStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(this.getInitialState());
    }
  },
  render: function() {
    if (this.state.image) {
      return (
        <div>
          <img src={this.state.image.image.url} />
          <p>{this.state.image.description}</p>
          <ul>
            {this.state.image.tags.map(function(tag, i) {
              return (
                <li key={i}>#{tag}</li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
});
