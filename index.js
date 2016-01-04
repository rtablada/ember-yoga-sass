/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-yoga-sass',

  treeForStyles: function() {
    var yogaPath = path.join('node_modules', 'yoga-sass');
    var yogaTree = new Funnel(this.treeGenerator(yogaPath), {
      srcDir: '/assets',
      destDir: '/app/styles',
    });

    return yogaTree;
  },
};
