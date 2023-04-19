Module.register("timestamp", {
  // Default module config.
  defaults: {
    updateInterval: 20000 // 20 seconds
  },

  // Define start sequence.
  start: function() {
    var self = this;
    setInterval(function() {
      self.updateDom();
    }, this.config.updateInterval);
  },

  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("div");
    var now = new Date();
    wrapper.innerHTML = "Last updated: " + now.toLocaleString();
    return wrapper;
  }
});
