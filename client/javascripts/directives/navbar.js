/**
 * Created by mjgrant on 5/20/15.
 */
angular.module("app").directive("navBar", function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/nav.html'
    };
});