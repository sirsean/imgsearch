Image.Add = React.createClass({
  mixins: [ReactRouter.Navigation],
  getInitialState: function() {
    return {
      files: [],
      externalUrl: "",
      description: "",
      tags: ""
    };
  },
  componentDidMount: function() {
    this.dispatcherId = Dispatcher.register(function(action) {
      if (action.type == "IMAGE_ADDED") {
        this.transitionTo("viewImage", {imageId: action.image.id});
      }
    }.bind(this));
  },
  componentWillUnmount: function() {
    Dispatcher.unregister(this.dispatcherId);
  },
  onUpdateFile: function(e) {
    this.setState({
      files: e.target.files
    });
  },
  onUpdateExternalUrl: function(e) {
    this.setState({
      externalUrl: e.target.value
    });
  },
  onUpdateDescription: function(e) {
    this.setState({
      description: e.target.value
    });
  },
  onUpdateTags: function(e) {
    this.setState({
      tags: e.target.value
    });
  },
  onSubmit: function() {
    Actions.addImage(this.state.files, this.state.externalUrl, this.state.description, this.state.tags.split(" "));
  },
  render: function() {
    return (
      <div>
        <h1>Add Image</h1>
        <div className="addImage">
          <div className="imageInfo">
            <span className="title">Description</span>
            <textarea value={this.state.description} onChange={this.onUpdateDescription} rows="8" />
            <span className="title">Tags</span>
            <textarea value={this.state.tags} onChange={this.onUpdateTags} rows="6" />
          </div>
          <div className="imageUpload">
            <input type="file" onChange={this.onUpdateFile} />
            or
            <span>
              URL:
              <input type="text" value={this.state.externalUrl} onChange={this.onUpdateExternalUrl} />
            </span>
          </div>
          <div className="submit">
            <button onClick={this.onSubmit}>Add</button>
          </div>
        </div>
      </div>
    );
  }
});
