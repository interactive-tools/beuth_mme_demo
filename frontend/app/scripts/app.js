'use strict';

angular.module('restExampleFeApp', [
'ngCookies',
'ngResource',
'ngSanitize',
'ngRoute',
'restangular',
'angular-flash.service', 
'angular-flash.flash-alert-directive'
])
.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://192.168.0.133:3000');
})
.config(function (flashProvider) {

	// Support bootstrap 3.0 "alert-danger" class with error flash types
	flashProvider.errorClassnames.push('alert-danger');

	/**
	* Also have...
	*
	* flashProvider.warnClassnames
	* flashProvider.infoClassnames
	* flashProvider.successClassnames
	*/

})
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.when('/users/list', {
		templateUrl: 'views/users.html',
		controller: 'UsersCtrl'
	})
	.when('/users/show/:userId', {
		templateUrl: 'views/user-show.html',
		controller: 'UserCtrl'
	})
	.when('/users/edit/:userId', {
		templateUrl: 'views/user-edit.html',
		controller: 'UserEditCtrl'
	})
	.when('/users/create', {
		templateUrl: 'views/user-create.html',
		controller: 'UserCreateCtrl'
	})
	.when('/users/delete/:userId', {
		templateUrl: 'views/blank.html',
		controller: 'UserDeleteCtrl'
	})
	.otherwise({
		redirectTo: '/users/list'
	});
});
