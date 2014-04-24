'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var MongoGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the mongo subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('somefile.js', 'somefile.js');
  }
});

module.exports = MongoGenerator;