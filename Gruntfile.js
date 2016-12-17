/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://lab.hakim.se/reveal-js\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},

		qunit: {
			files: [ 'test/*.html' ]
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n'
			},
			build: {
				src: 'js/reveal.js',
				dest: 'js/reveal.min.js'
			}
		},

		sass: {
			main: {
				files: {
				    'lib/css/reveal.css': 'css/theme/reveal.scss',
					'lib/css/default.css': 'css/theme/source/default.scss',
                    'lib/css/beige.css': 'css/theme/source/beige.scss',
                    'lib/css/night.css': 'css/theme/source/night.scss',
                    'lib/css/serif.css': 'css/theme/source/serif.scss',
                    'lib/css/simple.css': 'css/theme/source/simple.scss',
                    'lib/css/sky.css': 'css/theme/source/sky.scss',
                    'lib/css/moon.css': 'css/theme/source/moon.scss',
                    'lib/css/solarized.css': 'css/theme/source/solarized.scss',
                    'lib/css/blood.css': 'css/theme/source/blood.scss',
                    'lib/css/gdidarkblue.css': 'css/theme/source/gdidarkblue.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				// Task-specific options go here.
			},
			dist:{
				files:{
					'lib/css/**/*.css': 'css/**/*.scss'
				}
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					head: false,
					module: false,
					console: false,
					unescape: false
				}
			},
			files: [ 'Gruntfile.js' ]
		},

		connect: {
			server: {
				options: {
					port: port,
					base: '.'
				}
			}
		},

		zip: {
			'reveal-js-presentation.zip': [
				'index.html',
				'css/**',
				'js/**',
				'lib/**',
				'images/**',
				'plugin/**'
			]
		},

		watch: {
			main: {
				files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
				tasks: 'default'
			},
			theme: {
				files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
				tasks: 'themes'
			}
		},

		browserSync: {
			bsFiles: {
				src : [
					'lib/css/**/*.css',
					'*.html'
				]
			},
			options: {
				watchTask: true,
				server: './'
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-browser-sync' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-zip' );

	// Default task
	grunt.registerTask( 'default', [ 'jshint', 'sass', 'uglify', 'qunit', 'browserSync', 'watch' ] );

	// Theme task
	grunt.registerTask( 'themes', [ 'sass' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Run tests
	grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );

};
