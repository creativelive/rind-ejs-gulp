'use strict';

var ejstpl = require('ejstpl');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp').sync;

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

    mkdirp(path.dirname(conf.ejstpl));
    fs.writeFileSync(conf.ejstpl, fs.readFileSync(path.join(__dirname, 'node_modules', 'ejstpl', 'dist', 'ejstpl.js'), 'utf8'));

    cb();

  };
};
