/**
 * Created by mjgrant on 5/20/15.
 */
angular.module("bootscrapp").controller("indexCtrl", function($scope) {
   console.log("index controller successful");

    $scope.rides = ["Tower of Terror", "Space Mountain", "Splash Mountain", "Star Tours", "Tower of Terror is the best"];
    $scope.ridesList = $scope.rides[0];
});