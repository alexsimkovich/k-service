module.exports = function (grunt) {

    // Loading all grunt modules base on package.json
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        clean: {
            build: ["build"]
        },
        less: {
            main: {
                files: {
                    "app/assets/css/main.css": "app/assets/css/main.less"
                }
            }
        },
        watch: {
            css: {
                files: 'app/assets/css/**/*.less',
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "app/assets/css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    server: {
                        baseDir: "app/"
                    },
                    watchTask: true // < VERY important
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'app/assets/js/lib/jquery.min.js', // All JS in the libs folder
                    'app/assets/js/lib/bootstrap.min.js',  // This specific file
                    'app/assets/js/lib/bootstrap-editable.min.js',  // This specific file
                    'app/assets/js/lib/select2.js',  // This specific file
                    'app/assets/js/lib/jquery.flexisel.js'  // This specific file

                ],
                dest: 'build/js/production.js'
            }
        },
        uglify: {
            build: {
                src: 'build/js/production.js',
                dest: 'build/js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/images/'
                }]
            }
        },
        autoprefixer: {
            // prefix the specified file
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'app/assets/css/main.css',
                dest: 'build/css/main.css'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'build/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css/',
                ext: '.min.css'
            }
        }
    });

    // Dev tasks
    //grunt.registerTask('default', ['less']);
    grunt.registerTask('default', ['less']);
    grunt.registerTask('sync', ['browserSync', 'watch:css']);
    // Prod tasks
    grunt.registerTask('production', ['concat', 'uglify', 'imagemin', 'autoprefixer', 'cssmin']);
    // Cleaning build
    grunt.registerTask('clean-build', ['clean:build']);

};
