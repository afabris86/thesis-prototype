'use strict';

var app = angular.module("app",['ui.ace']);

app.controller("controller", ["$scope", function($scope) {
		$scope.code = "alert('hello world');";
		$scope.aceOptions = {
			theme : 'solarized_dark',
			mode : 'r',
			useWrapMode : 'true'
		}
		$scope.example = "Example works!";
}]);


