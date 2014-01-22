module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat: {
        //     build: {
        //         src: [
        //             '_src/scripts/libs/*.js',
        //             '_src/scripts/scripts.js'
        //         ],
        //         dest: 'assets/scripts/scripts.js',
        //     }
        // },
        // 
        // uglify: {
        //     build: {
        //         src: 'assets/scripts/scripts.js',
        //         dest: 'assets/scripts/scripts.min.js'
        //     }
        // },

        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: '_src/images/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'assets/images/'
                }]
            }
        },

        svgmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: '_src/images/',
                    src: ['**/*.svg'],
                    dest: 'assets/images/'
                }]
            }
        },

        sass: {
            build: {
                options: {
                    style: 'expanded',
                    loadPath: 'bower_components'
                },
                files: {
                    'assets/styles/styles.css': '_src/styles/styles.scss'
                }
            }
        },
        
        cssmin: {
            build: {
                options: {
                    report: 'gzip',
                },
                files: {
                    'assets/styles/styles.min.css': 'assets/styles/styles.css'
                }
            }
        },

        watch: {
            scripts: {
                files: ['_src/scripts/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['_src/images/**/*.{png,jpg}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                },
            },
            vectors: {
                files: ['_src/images/**/*.svg'],
                tasks: ['svgmin'],
                options: {
                    spawn: false,
                },
            },
            // styles: {
            //     files: ['_src/styles/**/*.scss'],
            //     tasks: ['sass'],
            //     options: {
            //         spawn: false,
            //     },
            // },
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');

    grunt.registerTask('default', ['imagemin', 'svgmin', 'sass', 'cssmin']);
};