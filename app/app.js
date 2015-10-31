'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome',
  'firebase',
]).
config(['$routeProvider', function($routeProvider) {
  // default to home
  $routeProvider.otherwise({
  	redirectTo: '/home'
  });

}]);
