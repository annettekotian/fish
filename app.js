(function(){
    "use strict";
    /*angular.module("nameCalc", [])
        .controller("controllor", function ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = function () {
                $scope.totalValue = caluclateNumeric($scope.name);
            };
            $scope.imageName = "birt";
            $scope.buttonClicked = function () {
                $scope.imageName = "bird2";

            };

            function caluclateNumeric (str) {
                var totalValue = 0;
                for(var i = 0; i < str.length; i++){
                    totalValue += str.charCodeAt(i);
                }

                return totalValue;
            }
        })*/

        angular.module("lunchChecker", [])
            .controller("lunchController", lunchController);

    lunchController.$inject = ['$scope'];
    function lunchController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.checkLunchItems = function(){
            var sLunchItems = $scope.lunchItems;
            console.log("Lunch Items " + sLunchItems);
            if (sLunchItems == "") {
                $scope.message = "Please enter data first";
            }
            return;
            var aLunchItems = sLunchItems.split(",");
            console.log("Lunch items length ", aLunchItems.length);
            console.log("aLunch ITems ", aLunchItems);
            if (aLunchItems.length > 3) {
                $scope.message = "Too much!";
            } else if (aLunchItems.length > 0 && aLunchItems.length <=3) {
                console.log("dfsdf00");
                $scope.message = "Enjoy!"
            }

        }

    }
})();