output = function() {
  var opts = {};
  if($.insertGlobals) opts.insertGlobals = $.insertGlobals;
  if($.detectGlobals) opts.detectGlobals = $.detectGlobals;
  if($.debug) opts.debug = $.debug;
  if(Object.keys(opts).length) {
    $.browserify.bundle(opts, function(err, src) {
       if(err) {
         output({error: $.create(err)});
       } else {
         output({src: $.create(src)});
       }
       done();
    });
  } else {
    $.browserify.bundle(function(err, src) {
       if(err) {
         output({error: $.create(err)});
       } else {
         output({src: $.create(src)});
       }
       done();
    });
  }
};
