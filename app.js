var bitcoinCalculator = angular.module('bitcoinCalculator', []);

bitcoinCalculator.controller('bitcoinController', function($scope, $http) {
  $http.get("https://bitpay.com/api/rates")
    .success(function(data) {
      $scope.rates = data;
      for (var i = 0; i < data.length; i++) {
        if (data[i].code == "USD") {
          $scope.currRate = data[i].rate;
        }
      }
      $scope.initialAmt = 5000;
      $scope.newAmt = 500;
      $scope.newAmt = function(newAmt) {
        return $scope.initialAmt / $scope.currRate * newAmt;
      };
      $scope.profit = function(newAmt) {
        return ($scope.initialAmt / $scope.currRate * newAmt) - $scope.initialAmt;
      };
    });
});
