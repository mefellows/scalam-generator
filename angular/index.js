'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var AngularGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the angular subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('somefile.js', 'somefile.js');
  }
});

module.exports = AngularGenerator;