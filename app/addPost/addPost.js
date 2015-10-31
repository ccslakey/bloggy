'use strict';

angular.module('myApp.addPost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/addPost', {
		templateUrl: 'addPost/addPost.html',
		controller: 'AddPostCtrl'
	});
}])

.controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $firebase) {
	var firebaseObj = new Firebase("https://bloggy.firebaseio.com");
	var fb = $firebase(firebaseObj);


	$scope.addPost = function(){
		var title = $scope.article.title;
		var post = $scope.article.post;
		console.log(title, post);
		fb.push({
		    title: title,
		    post: post
		}).then(function(ref) {
		    console.log(ref);
		}, function(error) {
		    console.log("Error:", error);
		});

	}

	
}])