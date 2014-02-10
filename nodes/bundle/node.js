var opts = {};
if(input.insertGlobals) input.insertGlobals = opts.insertGlobals;
if(input.detectGlobals) input.detectGlobals = opts.detectGlobals;
if(input.debug) input.debug = opts.debug;
output = [input.browserify, 'bundle', opts];
