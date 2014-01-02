'use strict';

angular.module('restExampleFeApp')
  .controller('UserCreateCtrl', ['$scope', '$location', '$routeParams', 'Restangular', 'flash', 
  function ($scope, $location, $routeParams, Restangular, flash) {

	  /**
	   * Action for creating a new user on the server
	   */
	  $scope.save = function(newUser) {
		  
	      Restangular.all('users').post(newUser).then(function(user){            

			  flash.success = 'User was successfully created.';
			  $location.path('/');
			  
	      }, function error(reason) {
			  // An error has occurred
			  flash.error = reason;  
		  });
	  }
	 
	  /**
	   * Action for aborting creation of a new user
	   */
	  $scope.reset = function() {
		 flash.error = 'No user was created.'
		 $location.path('/');
	 }
  
  }]);
