module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    	all: {
		    options: {
		    	separator: ';'
		    },
		    src: ['src/copyright.js', 'src/leaflet-tilefilter.js'],
		    dest: 'dist/<%= pkg.name %>.js'
    	}
    },
    uglify: {
    	all: {
			options: {
				preserveComments: 'some',
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
	        files: {
	          'dist/<%= pkg.name %>.min.js': ['<%= concat.all.dest %>']
	        }
    	}
    },
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};