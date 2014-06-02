# rind-ejs-gulp [![](https://travis-ci.org/creativelive/rind-ejs-gulp.svg)](https://travis-ci.org/creativelive/rind-ejs-gulp)

Gulp tasks to create clientside ejs functions from [ejstpl](https://github.com/diffsky/ejstpl)

## usage

```
'use strict';

var gulp = require('gulp');
var ejstpl = require('rind-ejs-tpl');

// see ejstpl for valid options
// by default, the ejstpl.js will be copied to the opts.output directory
gulp.task('ejs', ejstpl(gulp, opts));

```
