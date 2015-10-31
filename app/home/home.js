'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

 
// Home controller
.controller('HomeCtrl', ['$scope', '$firebaseAuth', '$location', 'CommonProp', function($scope, $firebaseAuth, $location, CommonProp) {

	// auth logic goes here for now

	var firebaseObj = new Firebase("https://bloggy.firebaseio.com")
	var loginObj = $firebaseAuth(firebaseObj);

	$scope.SignIn = function(event) {
	    event.preventDefault();  // To prevent form refresh
	    var username = $scope.user.email;
	    var password = $scope.user.password;
	     
	    loginObj.$authWithPassword({
	            email: username,
	            password: password
	        })
	        .then(function(user) {
	            // Success callback
	            console.log('Authentication successful');
	            $location.path('/welcome');
	            CommonProp.setUser(user.password.email);
	        }, function(error) {
	            // Failure callback
	            console.log('Authentication failure');
	        });
	}

}])
.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});