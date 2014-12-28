module.exports = {
  name: "require",
  ns: "browserify",
  title: "Require",
  description: "Make file available from outside the bundle with require(file).",
  phrases: {
    active: "Require {{input.file}}"
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
      },
      baseDir: {
        title: "Base Dir",
        type: "string",
        "default": null
      },
      expose: {
        title: "Expose",
        description: "Custom dependency name",
        type: "string",
        "default": null
      }
    },
    output: {}
  },
  fn: function require(input, output, state, done, cb, on) {
    var r = function() {
      var opts = {};
      if (input.basedir) opts.basedir = input.basedir;
      if (input.expose) opts.expose = input.expose;

      input.browserify.require(input.file, opts);
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