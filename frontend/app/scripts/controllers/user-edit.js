'use strict';

angular.module('restExampleFeApp')
  .controller('UserEditCtrl', ['$scope', '$location', '$routeParams', 'Restangular', 'flash', 
  function ($scope, $location, $routeParams, Restangular, flash) {
	  var userId = $routeParams.userId;


      Restangular.one('users', userId).get().then(function(user){            
          $scope.user = user;                                             
      });  
	  
	  $scope.reset = function() {
	      Restangular.one('users', userId).get().then(function(user){            
	          $scope.user = user;                                             
	      });
		$scope.form.$setPristine();
	  }
	  
	  $scope.save = function(updatedUser) {
		  
          $scope.user.name = updatedUser.name;
          $scope.user.email = updatedUser.email;
          $scope.user.gender = updatedUser.gender;  
		  $scope.user.put();
		  
		  flash.success = 'User has been updated';
		  
		  $location.path('/users/list');

	  }
	  
  }]);
