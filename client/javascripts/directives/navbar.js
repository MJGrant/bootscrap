/**
 * Created by mjgrant on 5/20/15.
 */
angular.module("app").directive("navBar", function() {
    return {
        restrict: 'A',
        templateUrl: '../../partials/nav.html'
    };
});