'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var GoogleAnalyticsGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the google-analytics subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('somefile.js', 'somefile.js');
  }
});

module.exports = GoogleAnalyticsGenerator;