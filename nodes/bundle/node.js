output = function() {
  var opts = {};
  if(input.insertGlobals) opts.insertGlobals = input.insertGlobals;
  if(input.detectGlobals) opts.detectGlobals = input.detectGlobals;
  if(input.debug) opts.debug = input.debug;
  if(Object.keys(opts).length) {
    input.browserify.bundle(opts, function(err, src) {
       if(err) {
         output({error: err});
       } else {
         output({src: src});
       }
       done();
    });
  } else {
    input.browserify.bundle(function(err, src) {
       if(err) {
         output({error: err});
       } else {
         output({src: src});
       }
       done();
    });
  }
};
