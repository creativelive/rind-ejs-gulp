'use strict';

var ejstpl = require('ejstpl');
var fs = require('fs');
var path = require('path');

module.exports = function ejs(gulp, conf) {
  conf = conf || {};

  conf.output = conf.output || process.cwd();
  conf.ejstpl = conf.ejstpl || path.join(conf.output, 'ejstpl.js');

  return function(cb) {
    cb = cb || function() {};

    // compile templates
    ejstpl({
      targets: conf.targets,
      input: conf.input,
      cwd: conf.cwd,
      output: conf.output
    });

    fs.writeFileSync(conf.ejstpl, fs.readFileSync(path.join(__dirname, 'node_modules', 'ejstpl', 'dist', 'ejstpl.js'), 'utf8'));

    cb();

  };
};
