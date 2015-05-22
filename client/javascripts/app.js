angular.module('bootscrapp', ['ngRoute'], function($routeProvider) {
    "use strict";

    $routeProvider.when('/', {
        templateUrl: './index.html'
    });


});