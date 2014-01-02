'use strict';

angular.module('restExampleFeApp')
  .controller('UserCtrl', ['$scope', '$routeParams', 'Restangular', 'flash', 
  function ($scope, $routeParams, Restangular, flash) {

	  var userId = $routeParams.userId;

      Restangular.one('users', userId).get().then(function(user){            
          $scope.user = user;
      });  

  }]);
