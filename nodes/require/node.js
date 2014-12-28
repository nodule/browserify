output = function() {
  var opts = {};
  if(input.basedir) opts.basedir = input.basedir;
  if(input.expose) opts.expose = input.expose;

  input.browserify.require(input.file, opts);
  done();
};
