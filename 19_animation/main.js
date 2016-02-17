var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers'
]);

myApp.config([
	'$routeProvider', function($routeProvider) {
		$routeProvider
				.when('/list', {
					templateUrl : 'partials/list.html',
					controller  : 'ListController'
		})
				.when('/details/:itemId', {
					templateUrl : 'partials/details.html',
					controller  : 'DetailsController'
		})
				.otherwise({
					redirectTo  : '/list'
		});
	}
]);

//noinspection JSUnresolvedVariable
var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', [
	'$scope', '$http', function($scope, $http) {
		$http.get('data.json').success(function(data) {
			$scope.artists     = data;
			$scope.artistOrder = 'name';
		});
	}
]);

artistControllers.controller('DetailsController', [
	'$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		$http.get('data.json').success(function(data) {
			$scope.artists   = data;
			$scope.whichItem = $routeParams.itemId;

			if($routeParams.itemId > 0) {
				$scope.prevItem = Number($routeParams.itemId) - 1;
			} else {
				$scope.prevItem = $scope.artists.length - 1;
			}

			if($routeParams.itemId < $scope.artists.length - 1) {
				$scope.nextItem = Number($routeParams.itemId) + 1;
			} else {
				$scope.nextItem = 0;
			}

		});
	}
]);
