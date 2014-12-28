module.exports = {
  name: "bundle",
  ns: "browserify",
  title: "Bundle",
  description: "Bundle the files and their dependencies into a single javascript file.",
  phrases: {
    active: "Bundling to {{input.file}}"
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
      insertGlobals: {
        title: "Insert Globals",
        type: "boolean",
        description: "When opts.insertGlobals is true, always insert process, global, __filename, and __dirname without analyzing the AST for faster builds but larger output bundles",
        "default": false
      },
      detectGlobals: {
        title: "Detect Globals",
        type: "boolean",
        description: "When opts.detectGlobals is true, scan all files for process, global, __filename, and __dirname, defining as necessary. With this option npm modules are more likely to work but bundling takes longer.",
        "default": true
      },
      debug: {
        title: "Debug",
        type: "boolean",
        description: "When opts.debug is true, add a source map inline to the end of the bundle. This makes debugging easier because you can see all the original files if you are in a modern enough browser.",
        "default": false
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      src: {
        title: "Source",
        type: "string"
      }
    }
  },
  fn: function bundle(input, output, state, done, cb, on) {
    var r = function() {
      var opts = {};
      if (input.insertGlobals) opts.insertGlobals = input.insertGlobals;
      if (input.detectGlobals) opts.detectGlobals = input.detectGlobals;
      if (input.debug) opts.debug = input.debug;
      if (Object.keys(opts).length) {
        input.browserify.bundle(opts, function(err, src) {
          if (err) {
            output({
              error: err
            });
          } else {
            output({
              src: src
            });
          }
          done();
        });
      } else {
        input.browserify.bundle(function(err, src) {
          if (err) {
            output({
              error: err
            });
          } else {
            output({
              src: src
            });
          }
          done();
        });
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}