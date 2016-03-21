output = function() {
  var opts = {};
  if($.basedir) opts.basedir = $.basedir;
  if($.expose) opts.expose = $.expose;

  $.browserify.require($.file, opts);
  done();
};
