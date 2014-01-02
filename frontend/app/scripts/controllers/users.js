'use strict';

angular.module('restExampleFeApp')
        .controller('UsersCtrl', ['$scope', 'Restangular',
            function($scope, Restangular) {

				// Why is this not working?
//                var User = Restangular.all('users');
//                $scope.users = User.getList();
//                console.info($scope.users);

                
                Restangular.all('users').getList().then(function(users){            
                    $scope.users = users;                                             
                });  
                
            }]);
