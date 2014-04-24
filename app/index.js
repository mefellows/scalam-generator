'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ScalatronGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Scalatron generator.'));

    var prompts = [{
      type: 'input',
      name: 'baseName',
      message: 'What is the name of your application?',
      default: 'myapp'
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'What is your default package name?',
      default: 'com.mycompany.myapp'
    }];

    this.prompt(prompts, function (props) {
      // `props` is an object passed in containing the response values, named in
      // accordance with the `name` property from your prompt object. So, for us:
      this.baseName = props.baseName;
      this.packageName = props.packageName;

      done();
    }.bind(this));
  },

  app: function () {

    this.entities = [];
    this.resources = [];
    this.generatorConfig = {
      "baseName": this.baseName,
      "packageName": this.packageName,
      "entities": this.entities,
      "resources": this.resources
    };
    this.generatorConfigStr = JSON.stringify(this.generatorConfig, null, '\t');

    // this.template('_generator.json', 'generator.json');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    // this.template('bowerrc', '.bowerrc');
    // this.template('Gruntfile.js', 'Gruntfile.js');
    // this.copy('gitignore', '.gitignore');

    var packageFolder = this.packageName.replace(/\./g, '/');

    var projectDir = 'project/';
    var resourcesDir = 'src/main/resources/';
    var scalaDir = 'src/main/scala/';
    var appDir = scalaDir + packageFolder + '/';
    var dataDir = appDir + 'data/';
    var jsonDir = appDir + 'json/';
    var modelsDir = appDir + 'models/';
    var webappDir = 'src/main/webapp/';
    var webinfDir = webappDir + 'WEB-INF/';
    var testDir = 'src/test/scala/' + packageFolder + '/';
    this.mkdir(projectDir);
    this.mkdir(resourcesDir);
    this.mkdir(appDir);
    this.mkdir(dataDir);
    this.mkdir(jsonDir);
    this.mkdir(modelsDir);
    this.mkdir(webappDir);
    this.mkdir(webinfDir);
    this.mkdir(testDir);

    // this.copy('project/build.properties', projectDir + 'build.properties');
    // this.template('project/_build.scala', projectDir + 'build.scala');
    // this.copy('project/plugins.sbt', projectDir + 'plugins.sbt');
    // this.copy('sbt', 'sbt');
    // this.copy('src/main/resources/logback.xml', resourcesDir + 'logback.xml');
    // this.template('src/main/scala/_ScalatraBootstrap.scala', scalaDir + 'ScalatraBootstrap.scala');
    // this.copy('src/main/webapp/WEB-INF/web.xml', webinfDir + 'web.xml');

    var publicCssDir = webappDir + 'css/';
    var publicJsDir = webappDir + 'js/';
    var publicViewDir = webappDir + 'views/';
    this.mkdir(publicCssDir);
    this.mkdir(publicJsDir);
    this.mkdir(publicViewDir);
    // this.template('public/_index.html', webappDir + 'index.html');
    // this.copy('public/css/app.css', publicCssDir + 'app.css');
    // this.template('public/js/_app.js', publicJsDir + 'app.js');
    // this.template('public/js/home/_home-controller.js', publicJsDir + 'home/home-controller.js');
    // this.template('public/views/home/_home.html', publicViewDir + 'home/home.html');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = ScalatronGenerator;