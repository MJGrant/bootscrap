angular.module('bootscrapp', ['ngRoute'], function($routeProvider) {
    "use strict";

    $routeProvider.when('/', {
        templateUrl: './index.html'
    });

});

//Custom validators
angular.module("bootscrapp").directive('rideDropdown', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.rideDropdown = function(modelValue, viewValue) {

                if(scope.user.rideChoice1 !== viewValue) {
                    return true;
                }

                return false;
            };
        }
    };
});

var intRegex = /^[-+]?\d+$/;
angular.module("bootscrapp").directive('integerCheck', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            console.log("log");
            ctrl.$validators.integerCheck = function(modelValue, viewValue) {
                if (intRegex.test(viewValue)) {
                    return true;
                }
                //otherwise, it's invalid
                return false;
            };
        }
    };
});

