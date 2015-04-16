'use strict';

var app2 = angular.module("app2",[]);

app2.controller("controller2", ["$scope", function($scope){
	$scope.example = "Example works!";
}]);


var app = angular.module("app",['ui.ace','app2']);

app.controller("controller", ["$scope", function($scope) {
		$scope.code = "alert('hello world');";
		$scope.aceOptions = {
			theme : 'solarized_dark',
			mode : 'r',
			useWrapMode : 'true'
		}
}]);


