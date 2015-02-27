/**
 * Copyright 2015 Kinvey, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Imports.
var timeGrunt = require('time-grunt');

// Exports.
module.exports = function(grunt) {
  // Monitor.
  timeGrunt(grunt);

  // Configuration.
  grunt.initConfig({
    // Metadata.
    bower : require('./bower.json'),
    host  : 'http://download.kinvey.com',

    // Download libraries.
    curl: {
      // AngularJS.
      'kinvey-angular.js'      : '<%= host %>/js/kinvey-angular-<%= bower.version %>.js',
      'kinvey-angular.min.js'  : '<%= host %>/js/kinvey-angular-<%= bower.version %>.min.js',

      // Backbone.js.
      'kinvey-backbone.js'     : '<%= host %>/js/kinvey-backbone-<%= bower.version %>.js',
      'kinvey-backbone.min.js' : '<%= host %>/js/kinvey-backbone-<%= bower.version %>.min.js',

      // HTML5.
      'kinvey-html5.js'        : '<%= host %>/js/kinvey-html5-<%= bower.version %>.js',
      'kinvey-html5.min.js'    : '<%= host %>/js/kinvey-html5-<%= bower.version %>.min.js',

      // PhoneGap.
      'kinvey-phonegap.js'     : '<%= host %>/js/kinvey-phonegap-<%= bower.version %>.js',
      'kinvey-phonegap.min.js' : '<%= host %>/js/kinvey-phonegap-<%= bower.version %>.min.js',

      // Titanium.
      'kinvey-titanium.js'     : '<%= host %>/js/kinvey-titanium-<%= bower.version %>.js',
      'kinvey-titanium.min.js' : '<%= host %>/js/kinvey-titanium-<%= bower.version %>.min.js'
    }
  });

  // Import tasks.
  grunt.loadNpmTasks('grunt-curl');

  // Tasks.
  grunt.registerTask('default', [ 'curl' ]);
};
