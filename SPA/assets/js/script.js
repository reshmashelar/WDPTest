var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'aboutController'
	});
});

// create the controller and inject Angular's $scope
scotchApp.controller('headerCtrl', function($scope) {
	$scope.companyEstDt = "December 20, 1990";
});
scotchApp.controller('mainController', function($scope, $http) {
	// create a message to display in our view
	$scope.modal = {};
	$http.get("sample-data.json").then(function(data) {
		$scope.data = data.data;

	});
	$scope.setModalValue = function(id) {
		angular.forEach($scope.data.Employees, function(value, key) {
			if (value.userId == id)
				$scope.modal = value;

		});
	};

});

scotchApp.controller('aboutController', function() {
});

