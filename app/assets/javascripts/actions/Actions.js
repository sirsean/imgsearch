var Actions = {
  setSearchTerm: function(term) {
    Dispatcher.dispatch({
      type: "SET_SEARCH_TERM",
      term: term
    });
  },
  gotSearchResults: function(results) {
    Dispatcher.dispatch({
      type: "GOT_SEARCH_RESULTS",
      results: results
    });
  },
  addImage: function(files, externalUrl, description, tags) {
    Dispatcher.dispatch({
      type: "ADD_IMAGE",
      files: files,
      externalUrl: externalUrl,
      description: description,
      tags: tags
    });
  },
  imageAdded: function(image) {
    Dispatcher.dispatch({
      type: "IMAGE_ADDED",
      image: image
    });
  },
  loadImage: function(imageId) {
    Dispatcher.dispatch({
      type: "LOAD_IMAGE",
      imageId: imageId
    });
  },
  imageLoaded: function(image) {
    Dispatcher.dispatch({
      type: "IMAGE_LOADED",
      image: image
    });
  }
};
