var myApp = angular.module('myApp',[]);

myApp.controller('FirstCtrl', ['$scope', function($scope) {
  $scope.message = "I'm data from service";
}]);

myApp.controller('SecondCtrl', ['$scope', function($scope) {
  $scope.message = "I'm data from service";

  $scope.reversedMessage = function (message) {
  	return message.split('').reverse().join('');
  };

}]);