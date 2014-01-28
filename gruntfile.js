module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'jekyll/_src/images/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'jekyll/assets/images/'
                }]
            }
        },

        svgmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'jekyll/_src/images/',
                    src: ['**/*.svg'],
                    dest: 'jekyll/assets/images/'
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
                    'jekyll/assets/styles/styles.css': 'jekyll/_src/styles/styles.scss'
                }
            }
        },
        
        cssmin: {
            build: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'jekyll/assets/styles/styles.min.css': 'jekyll/assets/styles/styles.css'
                }
            }
        },

        watch: {
            images: {
                files: ['jekyll/_src/images/**/*.{png,jpg}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false
                }
            },
            vectors: {
                files: ['jekyll/_src/images/**/*.svg'],
                tasks: ['svgmin'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['jekyll/_src/styles/**/*.scss'],
                tasks: ['sass', 'dataUri', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        },

        jekyll: {
            options: {
                src: 'jekyll'
            },
            dist: {
                options: {
                    dest: 'jekyll/_site',
                    config: 'jekyll/_config.yml'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['imagemin', 'svgmin', 'sass', 'cssmin', 'jekyll']);
};
