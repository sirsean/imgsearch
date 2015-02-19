var ImageStore = function() {
  var images = {};

  return new Store({
    state: {
      imageById: function(imageId) {
        return images[imageId];
      }
    },
    handlers: {
      "ADD_IMAGE": function(action) {

        var data = new FormData();
        data.append("description", action.description);
        data.append("tags", action.tags);
        if (action.files.length > 0) {
          data.append("file", action.files[0]);
        }
        if (action.externalUrl != "") {
          data.append("externalUrl", action.externalUrl);
        }

        $.ajax({
          type: "POST",
          url: "/images",
          data: data,
          cache: false,
          dataType: "json",
          processData: false,
          contentType: false,
          success: function(data) {
            Actions.imageAdded(data);
          }
        });
      },
      "IMAGE_ADDED": function(action) {
        images[action.image.id] = action.image;
      },
      "LOAD_IMAGE": function(action) {
        $.ajax({
          type: "GET",
          url: "/images/" + action.imageId,
          success: function(data) {
            Actions.imageLoaded(data);
          }
        });
      },
      "IMAGE_LOADED": function(action) {
        images[action.image.id] = action.image;
      }
    }
  });
}();
