'use strict';

var path = require('path');
var ejstpl = require('..');
var fs = require('fs');

module.exports = function(gulp, conf) {

  var opts = {
    targets: [{
      'all.js': '**/*.ejs'
    }],
    cwd: path.join(conf.gwd, 'test', 'src'),
    output: path.join(conf.gwd, 'test', 'out'),
    verbose: true
  };

  gulp.task('ejs', ['clean'], ejstpl(gulp, opts));

  gulp.task('test', ['ejs'], function() {
    var expected = [
      path.join(opts.output, 'all.js'),
      path.join(opts.output, 'ejstpl.js')
    ];

    expected.forEach(function(expect) {
      if (!fs.existsSync(expect)) {
        gulp.fail = true;
      }
    });
  });
};
