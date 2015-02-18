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
      <div>
        <p>add an image</p>
        <p>upload file <input type="file" onChange={this.onUpdateFile} /></p>
        <p>Description <textarea value={this.state.description} onChange={this.onUpdateDescription} /></p>
        <p>Tags <textarea value={this.state.tags} onChange={this.onUpdateTags} /></p>
        <p><button onClick={this.onSubmit}>Add</button></p>
      </div>
    );
  }
});
