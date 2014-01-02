'use strict';

angular.module('restExampleFeApp')
  .controller('UserCreateCtrl', ['$scope', '$location', '$routeParams', 'Restangular', 'flash', 
  function ($scope, $location, $routeParams, Restangular, flash) {
	  $scope.reset = function() {
		  flash.error = 'No user was created.'
		  $location.path('/users/list');
	  }
	  
	  $scope.save = function(newUser) {
		  
	      Restangular.all('users').post(newUser).then(function(user){            

			  flash.success = 'User was successfully created.';
			  $location.path('/users/list');
	      }, function error(reason) {
			  // An error has occurred
			  flash.error = reason;  
		  });
   	} 
  }]);
