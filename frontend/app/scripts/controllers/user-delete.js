'use strict';

angular.module('restExampleFeApp')
  .controller('UserDeleteCtrl', ['$scope', '$location', '$routeParams', 'Restangular', 'flash', 
  function ($scope, $location, $routeParams, Restangular, flash) {
	  
	  var deleteUser = confirm('Are you absolutely sure you want to delete?');
	  
	  if (deleteUser) {
		  var userId = $routeParams.userId;
	      Restangular.one('users', userId).remove().then(function(user){            
 
			  // Publish a success flash
		      flash.success = 'User sucessfully deleted!';
		  
	      });
	  	
	  }else{
	  	flash.error = 'User deletetion aborted!';
	  }
	  
	  $location.path('/users/list');
  }]);
