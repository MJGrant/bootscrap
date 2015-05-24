/**
 * Created by mjgrant on 5/20/15.
 */
angular.module("bootscrapp").controller("indexCtrl", function($scope) {
   console.log("index controller successful");

    $scope.rides = ["Tower of Terror (East)",
                    "Tower of Terror (West)",
                    "Space Mountain",
                    "Splash Mountain",
                    "Star Tours",
                    "It's a Small World"];

    $scope.ridesList = $scope.rides[0];

    $scope.user = {
        email:'',
        fiveIntegers: '',
        rideChoice1: '',
        rideChoice2: ''
    };

    $scope.submitForm = function() {
        alert("Sweet form! You are great at following directions.");
    };
});