'use strict';
 
angular.module('myApp.register', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])
 
// Register controller
.controller('RegisterCtrl', ['$scope', '$firebaseAuth',function($scope, $) {
	$scope.signUp = function() {
		// sign up implementation
		if (!$scope.regForm.$invalid) {
			console.log('valid form submission')

		};
	}




}]);