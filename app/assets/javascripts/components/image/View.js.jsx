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
        <div className="viewImage">
          <div className="imageInfo">
            <span className="description">{this.state.image.description}</span>
            <div className="tags">
              {this.state.image.tags.map(function(tag, i) {
                return (
                  <span key={i} className="tag">#{tag}</span>
                );
              })}
            </div>
          </div>
          <div className="image">
            <img src={this.state.image.image.url} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
});
