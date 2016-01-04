/*jshint node:true*/
var RSVP  = require('rsvp');

module.exports = {
  description: 'install ember-material-lite into a typical project',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  beforeInstall: function(options) {
    return RSVP.all([
      this.addPackageToProject('yoga-sass'),
    ]);
  },

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^4.2.1'),
    ]);
  }
};
