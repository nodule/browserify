module.exports = {
  name: "api",
  ns: "browserify",
  title: "Browserify",
  description: "Browserfiy",
  phrases: {
    active: "Loading Browserify"
  },
  ports: {
    input: {},
    output: {
      browserify: {
        title: "Browserify",
        type: "Browserify"
      }
    }
  },
  dependencies: {
    npm: {
      browserify: require('browserify')
    }
  },
  fn: function api(input, $, output, state, done, cb, on, browserify) {
    var r = function() {
      output.browserify = $.create(browserify());
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}