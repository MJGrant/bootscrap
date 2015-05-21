module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    //roll your own from: https://www.npmjs.com/package/grunt-contrib-connect
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'client',
                    keepalive: true
                }
            }
        }
    });
};