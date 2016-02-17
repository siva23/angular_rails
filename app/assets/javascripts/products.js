// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
var app = angular.module("jsapp", ['ngRoute','ngResource']);

app.controller('ProductsController', function($scope, $http){
	console.log("controller called");
	$scope.name = 'hi';
	$scope.products = [];
	$http.get('http://localhost:3000/products.json').then(
			function(data){
				console.log("-works-");
				console.log(data);
				$scope.products = data["data"];
			},
			function(e){
				console.log("-error-");
				console.log(e);
			}
		)
});

app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {templateUrl: 'templates/products.html', controller: 'ProductsController'})
	}
]);


