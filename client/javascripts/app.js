angular.module('app', ['ngRoute'], function($routeProvider) {
    "use strict";

    $routeProvider.when('/', {
        templateUrl: './index.html'
    });


});