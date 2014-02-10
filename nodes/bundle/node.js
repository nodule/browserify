var opts = {};
if(input.insertGlobals) opts.insertGlobals = input.insertGlobals;
if(input.detectGlobals) opts.detectGlobals = input.detectGlobals;
if(input.debug) opts.debug = input.debug;
if(Object.keys(opts).length) {
  output = [input.browserify, 'bundle', opts];
} else {
  output = [input.browserify, 'bundle'];
}
