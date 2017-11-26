(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItemsInput = "";
        $scope.lunchMessage = "";

        $scope.CheckLunchItems = function () {
            //split the input and set the message
            var comma = ',';
            $scope.lunchMessage = 'change';

            if ($scope.lunchItemsInput.length > 0) {
                var lunchItemsArray = $scope.lunchItemsInput.split(comma);
                if (lunchItemsArray.length < 4) {
                    $scope.lunchMessage = 'Enjoy!';
                } else {
                    $scope.lunchMessage = 'Too much!';
                }

            } else {
                $scope.lunchMessage = 'Please enter data first';
            }
        }
    }

})();