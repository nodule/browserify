module.exports = {
  name: "add",
  ns: "browserify",
  title: "Add File",
  description: "Add an entry file from file that will be executed when the bundle loads.",
  phrases: {
    active: "Adding entry file {{input.file}}"
  },
  ports: {
    input: {
      browserify: {
        title: "Browserify",
        type: "Browserify"
      },
      file: {
        title: "File",
        type: "string"
      }
    },
    output: {}
  },
  fn: function add(input, $, output, state, done, cb, on) {
    var r = function() {
      $.browserify.add($.file);
      done();
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}