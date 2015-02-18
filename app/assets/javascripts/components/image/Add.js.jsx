Image.Add = React.createClass({
  mixins: [ReactRouter.Navigation],
  getInitialState: function() {
    return {
      files: [],
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
    Actions.addImage(this.state.files, this.state.description, this.state.tags.split(" "));
  },
  render: function() {
    return (
      <div className="addImage">
        <h1>Add Image</h1>
        <div className="imageInfo">
          <span className="title">Description</span>
          <textarea value={this.state.description} onChange={this.onUpdateDescription} rows="8" />
          <span className="title">Tags</span>
          <textarea value={this.state.tags} onChange={this.onUpdateTags} rows="6" />
        </div>
        <div className="imageUpload">
          <input type="file" onChange={this.onUpdateFile} />
        </div>
        <div className="submit">
          <button onClick={this.onSubmit}>Add</button>
        </div>
      </div>
    );
  }
});
